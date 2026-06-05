import React from "react";
import { useRef, useImperativeHandle } from "react";

function App() {
  const videoRef = useRef();
  return (
    <>
      <PlayVideo ref={videoRef} />
      <div className="controls">
        <button onClick={()=> videoRef.current.play()}>Play</button>
        <button onClick={()=> videoRef.current.pause()}>Pause</button>
      </div>
    </>
  );
}

function PlayVideo({ ref }) {
  const videoRef = useRef(null);

  useImperativeHandle(ref,() => {
    return {
      play() {
        if(videoRef.current){
          videoRef.current.play();
        }
      },
      pause(){
        if(videoRef.current){
          videoRef.current.pause();
        }
      }
      
    };
},[]);

  return (
    <video ref={videoRef} controls={false} width="900px">
      <source
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        type="video/mp4"
      />
    </video>
  );
}

export default App;
