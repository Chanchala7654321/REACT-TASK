import React from 'react'
import ProjectOne from './ProjectOne'
import ProjectTwo from './ProjectTwo'
import ProjectThree from './ProjectThree'


function Main() {
  return (
   <main className="main-container" id='projects'>
     <h2 className="section-title">My Projects</h2>
     
     <div className="project-row">
       <ProjectOne />
       <ProjectTwo />
       <ProjectThree />
     </div>
   </main>
  )
}

export default Main
