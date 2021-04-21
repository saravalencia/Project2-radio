import React, {useState, useRef, useEffect} from 'react'
import Controls from './Controls';
import './player.css'


function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isCurrentRadio, setIsCurrentRadio] = useState(isPlaying);


 
  return (
      <div className="c-player">
          <audio src={props.valueRadio}  muted={isMuted} ref={audioEl}></audio>
          <Controls 
          setIsMuted={setIsMuted} 
          isMuted={isMuted} 
          setIsMuted={setIsMuted}
          audioEl={audioEl} 
          isPlaying={isPlaying} 
          setIsPlaying={setIsPlaying}
          isCurrentRadio={setIsCurrentRadio}
          setIsCurrentRadio={setIsCurrentRadio}
          />
          
      </div>
  )
}

export default Player;