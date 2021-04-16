import React, { useState } from "react";

const ListStationTest = () => {


  return (
    <div className="App">

      <h2>Station static</h2>
      <audio controls autoplay name="media">
        <source src="https://stream.iceradio.nl/iceradiohq?ver=30283"></source>
      </audio>
      <audio controls autoplay name="media">
        <source
          src="https://stream.iceradio.nl/iceradiohq?ver=30283"
          type="audio/mpeg"
        ></source>
      </audio>
    </div>
  );
};

export default ListStationTest;
