import React, {useState, useRef/*, useEffect*/} from 'react'
import Controls from './Controls';
import ReactAudioPlayer from 'react-audio-player';
import './player.css'


function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
      <div className="c-player">
          <audio src={props.chosenRadioRandom} autoPlay muted={isMuted} ref={audioEl}></audio>
          <Controls 
          setIsMuted={setIsMuted} 
          isMuted={isMuted} 
          audioEl={audioEl} 
          isPlaying={isPlaying} 
          setIsPlaying={setIsPlaying}
          />

{/*<ReactAudioPlayer
      src={props.chosenRadioRandom}
      autoPlay
      controls
/>*/}

      </div>
  )
}

export default Player; 