import React from 'react';
// import './ProjectOne.css'; 

function ProjectOne() {
  return (
    <div className="project-container">

      <h2 className="project-title">Project One</h2>

      <p className="project-desc">
        Added, deleted, and completed tasks using JavaScript DOM manipulation without page reload. 
        Designed a simple and responsive UI for smooth usage across devices.
      </p>

      <div className="btn-group">
        <a href="https://github.com" className="btn btn-blue">
          GitHub
        </a>
        <a href="#" className="btn btn-dark">
          Live Demo
        </a>
      </div>

    </div>
  );
}

export default ProjectOne;
