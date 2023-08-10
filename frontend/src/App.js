import "./App.css";
import logo3 from "./logo3.png";
import Header from "./MyComponents/Header";
import { AllJobs } from "./MyComponents/AllJobs";
import About from "./MyComponents/about/About"
import Home from "./MyComponents/home/hero/Hero"
import { AddJob } from "./MyComponents/AddJob";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [alljobs, setAllJobs] = useState([]);

  // /******************************************************************* */
  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = async () => {
    let result = await fetch("http://localhost:5000/jobs");
    result = await result.json();
    setAllJobs(result);
  };
  // /******************************************************************* */

  const onDelete = (job) => {
    console.log("I am ondelete of job", job);

    // Remove the job from the alljobs state using filter
    const updatedJobs = alljobs.filter((e) => e !== job);
    setAllJobs(updatedJobs);

    // Save the updated jobs array to localStorage
    localStorage.setItem("alljobs", JSON.stringify(updatedJobs));
  };

  const addJob = (
    title,
    desc,
    sal,
    time,
    loc,
    category,
    mobileNo,
    email,
    postedBy
  ) => {
    console.log(
      "I am adding this job",
      title,
      desc,
      sal,
      time,
      loc,
      category,
      mobileNo,
      email,
      postedBy
    );
    let sno;
    if (alljobs.length === 0) {
      sno = 0;
    } else {
      sno = alljobs[alljobs.length - 1].sno + 1;
    }
    const myJob = {
      sno: sno,
      title: title,
      desc: desc,
      sal: sal,
      time: time,
      loc: loc,
      category: category,
      mobileNo: mobileNo,
      email: email,
      postedBy: postedBy,
    };
    setAllJobs([...alljobs, myJob]);
    console.log(myJob);
  };

  return (
    <>
      <Router>
        <Header logo={logo3} searchBar={false} />
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route
            exact
            path="/jobs"
            render={() => {
              return (
                <>
                  <AddJob addJob={addJob} />
                  <AllJobs alljobs={alljobs} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path='/about' component={About} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
