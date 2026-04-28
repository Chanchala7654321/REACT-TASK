import React from "react";
import { userData, jobListings } from "./data";
import JobCard from "./JobCard";
function JobBoard() {
  return (
    <div className="JobBoard">
      <div className="group1">
        <h1>Current Openings</h1>
      </div>
      <ul>
        {jobListings.map((job) => (
          <li key={job.id}>
            <JobCard
              title={job.title}
              company={job.company}
              location={job.location}
              salary={job.salary}
              isNew={job.isNew}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobBoard;
