
import React from 'react'

function App() {

  let isLoggedIn = true;
  let isAdmin = false;

  return (
    <>
      {isLoggedIn && isAdmin && (
        <h1>Welcome, Admin!</h1>
      )}
      {isLoggedIn && !isAdmin && (
        <h1>Welcome back!</h1>
      )}
      {!isLoggedIn && (
        <h1>Please log in.</h1>
      )}
    </>
  )
}

export default App




