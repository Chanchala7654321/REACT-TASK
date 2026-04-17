

import React, { useState, useEffect } from 'react';

function TitleCounter() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(false); 

  useEffect(() => {
    document.title = `Total Clicks: ${count}`;
    console.log("Title update");
    
  }, [count]); 

  return (
    <div>
      <h1>Document Title Syncer</h1>
      <p>Current Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Count
      </button>

      <br /><br />

      <div>
        <button onClick={() => setStatus(!status)}>
          Toggle 
        </button>
        
        <p>Other state is: {status ? 'true' : 'false'}</p>
      </div>
    </div>
  );
}

export default TitleCounter;