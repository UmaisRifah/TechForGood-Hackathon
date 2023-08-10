import React from 'react';

export const JobItem = ({ job, onDelete }) => {
  const { title, description, salary, time, location, category, mobile_no, email, posted_by } = job;
  
  let customCardStyle = {
    width: "350px",
    borderRadius: "20px"
  };

  let customHrStyle = {
    margin: 0,
    marginBottom: 10
  };

  let customBtnStyle = {
    width: "30%",
  }

  return (
    <div className="card mb-3" style={customCardStyle}>
      <div className="card-body d-flex flex-column" >
      <div className="card-body">
        <h5 className="card-title"><strong>Domestic Job: </strong>{title}</h5>
        <p className="card-text"> <strong>Description: </strong>{description}</p>
        <p className="card-text"><strong>Salary: </strong>{salary}</p>
        <p className="card-text"><strong>Time: </strong>{time}</p>
        <p className="card-text"><strong>Location: </strong>  {location}</p>
        <p className="card-text"><strong>Category: </strong>  {category}</p>
        <p className="card-text"><strong>Mobile Number: </strong>{mobile_no}</p>
        <p className="card-text"><strong>Email: </strong>{email}</p>
        <p className="card-text"><strong>Posted By: </strong> {posted_by}</p>
      </div>
    </div>
    </div>
  );
};

