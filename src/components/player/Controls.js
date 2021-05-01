import React,  {useState} from 'react'
import defaultImage from '../menuRadio/defaultImage.jpg'
import './player.css'




function Controls(props) {

    const [statevolum, setStateVolum] = useState(0.3)
    //const [showInformation, setShowinformatio] = useState(true)
    function accion(){
        if (props.isPlaying){
            props.setIsPlaying(false)
            props.audioEl.current.pause()
        } else {
            props.setIsPlaying(true)
            props.audioEl.current.play()
        }

        }      
    
    function muted(){
    if (props.isMuted){
        props.setIsMuted(false)
  
    }else {
        props.setIsMuted(true)
    }
   } 
   
    const handleVolume = (q) => {
        setStateVolum(q);
        props.audioEl.current.volume = q;
    }

    const setDefaultSrc = (event) => {
        event.target.src = defaultImage;
    }
   
      
   
    return (
        <div className="controls">

          <div className='vlmen'>
            <span className="volum" onClick={muted}><i class="fas fa-volume-down"></i> </span>
            <input value={Math.round(statevolum * 100)} type="range" name="volBar" id="volBar" onChange={(e) => handleVolume(e.target.value / 100)} />
          </div>         
                 
          <div className="musicControls">
                <span  className="prev" onClick={props.playPreviousRadio}><i class="fas fa-step-backward"></i></span>
                <span className="play" onClick={accion}><i class={props.isPlaying ? "fas fa-pause" : "fas fa-play"}></i></span>
                <span  className="next" onClick={props.playNextRadio}><i class="fas fa-step-forward"></i></span>
                <span className="random" onClick={props.getNewRandomRadio}><i class="fas fa-random"></i></span>
                                    
          </div>
          {
              props.showInfo ?
           <div className="name-country-radio">
                <h3 className='radio-name'>{props.valueRadio.name} </h3>
                <h3 className='country-name'>{props.valueRadio.country}</h3> 
                <img className="image-player" src={props.valueRadio.favicon}  onError={setDefaultSrc}/>
          </div> 
          :
          <div className="name-country-radio">
                <h3 className='radio-name'>{props.randomRadio.name} </h3>
                <h3 className='country-name'>{props.randomRadio.country}</h3> 
                <img className="image-player" src={props.randomRadio.favicon}  onError={setDefaultSrc}/>
            </div>
          }




          
          
    </div>
    )
}


export default Controls