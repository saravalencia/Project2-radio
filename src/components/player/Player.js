import React, {useState, useRef, useContext} from 'react'
import Controls from './Controls';
import './player.css'
import {MyContext} from '../../context/MyProvider'

function Player(props) {

  const context = useContext(MyContext)
  
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isCurrentRadio, setIsCurrentRadio] = useState(isPlaying);

 

  return (
      <div className="c-player">

          <audio src={context.valueRadio.url_resolved} autoPlay  muted={isMuted} ref={audioEl}></audio>
          <Controls 
          
          setIsMuted={setIsMuted} 
          isMuted={isMuted} 
          setIsMuted={setIsMuted}
          audioEl={audioEl} 
          isPlaying={isPlaying} 
          setIsPlaying={setIsPlaying}
          isCurrentRadio={isCurrentRadio}
          setIsCurrentRadio={setIsCurrentRadio}
         
          />
          
      </div>
  )
}

export default Player;