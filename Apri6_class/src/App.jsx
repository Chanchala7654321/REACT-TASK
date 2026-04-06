
import React from 'react'

import './App.css'

function App() {

  function change(e) {
    console.log(e.target.value);
  }

  function click (fruit) {
    console.log(fruit);
  }

  function submit(e){
    e.preventDefault();
    console.log("Form Submitted");
  }

  return (
    <>
      <h1>Events</h1>

      <p>Type somothing about you</p>
      <input type="text" placeholder="Type here.." onChange={change}/>

      <p>Click</p>
      <button onClick={() => click("Apple")}>Apple</button>
      <button onClick={() => click("Banana")}>Banana</button>
      <button onClick={() => click("Guava")}>Guava</button>


      <form onSubmit={submit}>
        <p>Try submitting this form</p>
        <button >Submit</button>
      </form>
      

    </>
  )
}

export default App