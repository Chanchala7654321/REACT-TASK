import React from 'react'

function ProfileSection({name, role, bio, isAvailable}) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{role}</h2>
      <p>{bio}</p>
      <span style={{backgroundColor : isAvailable? "green" : "grey",
          padding:"4px 10px",
          borderRadius:"5px",
          color:"white"
      }}>
        { isAvailable? "Hiring me" : "Not Looking"}
      </span>
    </div>
  )
}

export default ProfileSection
