import React, {useState, useRef, useEffect} from 'react'
import Controls from './Controls';
import './player.css'


function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isCurrentRadio, setIsCurrentRadio] = useState(isPlaying);

 
  return (
      <div className="c-player">
          <audio src={props.valueRadio} autoPlay  muted={isMuted} ref={audioEl}></audio>
          <Controls
          playPreviousRadio={props.playPreviousRadio}
          playNextRadio={props.playNextRadio}
          getNewRandomRadio={props.getNewRandomRadio}
          setIsMuted={setIsMuted} 
          isMuted={isMuted} 
          audioEl={audioEl} 
          isPlaying={props.isPlaying} 
          setIsPlaying={props.setIsPlaying}
          isCurrentRadio={isCurrentRadio}
          setIsCurrentRadio={setIsCurrentRadio}
          country={props.country}
          randomRadio={props.randomRadio}
          />
          
      </div>
  )
}

export default Player;