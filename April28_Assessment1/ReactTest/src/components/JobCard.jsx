import React from "react";

function JobCard({ title, company, location, salary, isNew }) {
  return (
    <div>
      <div className="card">
        <h1>{title} <span>{isNew?"|🔥 Hot":""}</span></h1>
        <p>{company} | {location}</p>
        <p>{salary}</p>
      </div>
    </div>
  );
}

export default JobCard;
