import React, {useState, useRef, useEffect} from 'react'
import Controls from './Controls';
import './player.css'


function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
 
 
  return (
      <div className="c-player">
          <audio src={props.valueRadio} autoPlay muted={isMuted} ref={audioEl}></audio>
          <Controls 
          setIsMuted={setIsMuted} 
          isMuted={isMuted} 
          audioEl={audioEl} 
          isPlaying={isPlaying} 
          setIsPlaying={setIsPlaying}
          />
          
      </div>
  )
}

export default Player;