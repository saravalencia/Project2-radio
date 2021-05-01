import React, {useState, useRef, useEffect} from 'react'
import Controls from './Controls';
import './player.css'


function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isCurrentRadio, setIsCurrentRadio] = useState(isPlaying);
  const [isAdding, setIsAdding] = useState(false);


 
  return (
      <div className="c-player">
          <audio src={props.valueRadio} autoPlay  muted={isMuted} ref={audioEl}></audio>
          <Controls 
          setIsMuted={setIsMuted} 
          isMuted={isMuted} 
          setIsMuted={setIsMuted}
          audioEl={audioEl} 
          isPlaying={isPlaying} 
          setIsPlaying={setIsPlaying}
          isCurrentRadio={isCurrentRadio}
          setIsCurrentRadio={setIsCurrentRadio}
          //getbackwars={props.getbackwars}
          nextRadioIndex={props.nextRadioIndex}
          isAdding={isAdding}
          setIsAdding={setIsAdding}
          
          />
          
      </div>
  )
}

export default Player;