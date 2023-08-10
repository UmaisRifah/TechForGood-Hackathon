import React, { useState, useEffect } from "react";
import { JobItem } from "./JobItem";

export const AllJobs = (props) => {
  const [alljobs, setAllJobs] = useState([]);

  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = async () => {
    let result = await fetch("http://localhost:5000/jobs");
    result = await result.json();
    setAllJobs(result);
  };

  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const jobChunks = chunkArray(alljobs, 3);

  let customSearchbtnStyle = {
    width: "200px",
    marginTop: "20px",
    transform: "translate(230%, -0%)",
  };

  let customHeading = {
    marginTop: "55px",
  };

  let customP = {
    marginBottom: "100px",
    textAlign: "center",
    marginTop: "50px",
    fontSize: "20px",
  };

  //searching handled => search by title
  const handleSearchByTitle = async(event)=>{
    // console.log(event.target.value);
    let key = event.target.value;
    if(key){
        let searchResult = await fetch(`/jobs/search/titles/${key}`);
        searchResult = await searchResult.json();
        if(searchResult){
            setAllJobs(searchResult);
        }
    }else{
        getAllNotes();
    }
  }

  //searching handled => search by location
  const handleSearchByLocation = async(event)=>{
    // console.log(event.target.value);
    let key = event.target.value;
    if(key){
        let searchResult = await fetch(`/jobs/search/locations/${key}`);
        searchResult = await searchResult.json();
        if(searchResult){
            setAllJobs(searchResult);
        }
    }else{
        getAllNotes();
    }
  }

  //searching handled => search by Category
  const handleSearchByCategory = async(event)=>{
    // console.log(event.target.value);
    let key = event.target.value;
    if(key){
        let searchResult = await fetch(`/jobs/search/categories/${key}`);
        searchResult = await searchResult.json();
        if(searchResult){
            setAllJobs(searchResult);
        }
    }else{
        getAllNotes();
    }
  }

  return (
    <div className="container pb-52">
      {/* Display Jobs */}
      <h2 className="mt-32 text-center fw-bold" style={customHeading}>
        All Domestic Jobs
      </h2>

        {/* Search Bars */}
      <div className="row mb-3 input-group rounded">
        <div className="col-md-4">
          <input
            type="search"
            class="form-control rounded search-bar-box"
            onChange={handleSearchByTitle}
            placeholder="Search by Title..."
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <input
            type="search"
            class="form-control rounded search-bar-box"
            onChange={handleSearchByLocation}
            placeholder="Search by Location..."
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <input
            type="search"
            class="form-control rounded search-bar-box"
            onChange={handleSearchByCategory}
            placeholder="Search by Category..."
            className="form-control"
          />
        </div>
      </div>

      {jobChunks.map((chunk, index) => (
        <div key={index} className="row mb-3">
          {chunk.map((job) => (
            <div key={job.sno} className="col-md-4">
              <JobItem job={job} />
            </div>
          ))}
        </div>
      ))}

        
      {alljobs.length === 0 && <p style={customP}>No jobs found!</p>}
    </div>
  );
};
