import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './player.css'


 const Player = (props) => (
  <div className="controls">
    
  <AudioPlayer
    autoPlay
    src={props.valueRadio}
    onPlay={e => console.log("onPlay")}
   
  />

   
</div>
);

export default Player;