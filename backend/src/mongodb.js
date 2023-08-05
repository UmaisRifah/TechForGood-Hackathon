const mongoose = require("mongoose");

let connectionString;
connectionString = 'mongodb://localhost:27017/BitbyBit';


mongoose.connect(connectionString)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.log('Failed to connect to MongoDB:', error);
    });

const LogInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    }
});

const collection = mongoose.model("user", LogInSchema);

module.exports = collection;
