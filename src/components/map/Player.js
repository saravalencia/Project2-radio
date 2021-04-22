import React, {useState, useRef, useEffect} from 'react'
import Controls from './Controls';


function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  
 
  return (
      <div className="c-player">
          <audio src={props.songs} autoPlay muted={isMuted} ref={audioEl}></audio>
          <Controls setIsMuted={setIsMuted} isMuted={isMuted} audioEl={audioEl} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
      </div>
  )
}

export default Player;