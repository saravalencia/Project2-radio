import React/*, { useState }*/ from "react";

const Discover = (props) => {


  return (
    <div className="App">

      {/*<h2>Station static</h2>
      <audio controls autoplay name="media">
        <source src="https://stream.iceradio.nl/iceradiohq?ver=30283"></source>
      </audio>*/}

      <h2>Station dinamic</h2>
      <button onClick={props.getData}>Give me another random radio to listen to</button>

    </div>
  );
};

export default Discover;
