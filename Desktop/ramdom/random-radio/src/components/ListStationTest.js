import React, { useState, useRef } from "react";
import Controls from "./Controls";

function ListStationTest(props){
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
   

  return (
    <div className="App">

      <h2>Station static</h2>
      <audio src={props.stations} ref={audioEl}></audio>
      <Controls 
          
          audioEl={audioEl} 
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying} 
          
          />
      </div>
  );
};

export default ListStationTest;