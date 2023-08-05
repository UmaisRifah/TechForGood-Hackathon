const express = require('express');
// const bodyParser = require('body-parser');
const collection = require("./src/mongodb");
const cors = require('cors');
const jwt = require("jsonwebtoken");
const path = require("path");
const distPath = path.join(__dirname, '../../frontend/dist/task2');
const secretKey = "secretkey";
const secretKey2 = "yourSecretKey";
const app = express();
// app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.post('/signup', async (req, res) => {
    const name = req.body.name;
    const number = req.body.number;
    const email = req.body.email;
    const password = req.body.password;
    const otp_user = Math.floor(100000 + Math.random() * 900000).toString(); // Assign value to otp_user

    const data = {
        name: name,
        number: number,
        email: email,
        password: password,
        otp: otp_user
    };

    try {
        await collection.insertMany([data]);

        res.send({ otp: otp_user });
    } catch (error) {
        console.error(error);
        res.send("An error occurred during signup.");
    }
});




app.post('/login', async (req, res) => {
    try {
        const check = await collection.findOne({ email: req.body.email });
        if (check && check.otp === req.body.otp) {
            // const user = { email: req.body.email, name: check.name };
            jwt.sign({ email: req.body.email }, secretKey, (err, token) => {
                if (err) {
                    res.status(500).json({ error: 'Failed to generate token' });
                } else {
                    // req.email = user.email; // Store the user email in the request object
                    res.json({ token });
                }
            });
            return;
        }

        res.status(401).json({ error: 'Invalid credentials' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.post('/otp', async (req, res) => {
    try {
        const check = await collection.findOne({ email: req.body.email });

        if (check && check.password === req.body.password) {
            const otp = check.otp;
            console.log('Your OTP is:', otp);
            return res.json({ otp }); // Send the OTP response here and return from the function
        }

        return res.status(401).json({ error: 'Invalid credentials' });
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred' });
    }
});


app.post('/forgotPassword', async (req, res) => {
    try {
        const check = await collection.findOne({ email: req.body.email });

        if (check && check.email) {
            jwt.sign({ email: check.email }, secretKey2, { expiresIn: '60s' }, (err, token) => {
                if (err) {
                    res.status(500).json({ error: 'Failed to generate token' });
                } else {
                    // const resetLink = `http://localhost:3000/reset-password?email=${encodeURIComponent(check.email)}&token=${encodeURIComponent(token)}`;
                    const resetLink = `http://localhost:4200/reset-password?token=${encodeURIComponent(token)}`;
                    console.log(resetLink); // Log the reset password link with the email and token
                    res.json({ token });
                }
            });

        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});


function verifyToken2(req, res, next) {
    const token = req.headers['authorization'];
    const tokenWithoutPrefix = token ? token.replace('Bearer ', '') : null;

    console.log(token);

    if (!token) {
        return res.status(401).json({ error: 'Token not provided' });
    }

    jwt.verify(tokenWithoutPrefix, secretKey2, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        req.user = decoded;
        req.email = decoded.email;
        next();
    });
}

app.post('/resetPass', verifyToken2, async (req, res) => {
    try {
        const email = req.email;
        const newPassword = req.body.password;

        const updatedUser = await collection.findOneAndUpdate(
            { email: email },
            { $set: { password: newPassword } },
            { returnOriginal: false }
        );

        if (updatedUser) {
            res.status(200).json({ message: 'Password reset successfully', email: email, password: newPassword });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});



//middleware
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    const tokenWithoutPrefix = token ? token.replace('Bearer ', '') : null;

    console.log(token);

    if (!token) {
        return res.status(401).json({ error: 'Token not provided' });
    }

    jwt.verify(tokenWithoutPrefix, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }

        req.user = decoded;
        req.email = decoded.email; // Retrieve the user email from the decoded token and store it in the request object
        next();
    });
}

app.use(express.static(distPath));
//use npm run build to get the path in frontend
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'path to dist')));

app.listen(3000, async () => {
    console.log(`Server is running on port 3000`);
});