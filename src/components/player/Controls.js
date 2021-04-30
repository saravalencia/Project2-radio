
import React from 'react'
import './player.css'
import defaultImage from '../menuRadio/defaultImage.jpg'




function Controls(props) {

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
   
   const setDefaultSrc = (event) => {
    event.target.src = defaultImage;
}
  
   
    return (
        <div className="controls">

          <div className='vlmen'>
            <span className="volum" onClick={muted}><i class="fas fa-volume-down"></i> </span>
          </div>         
                 
          <div className="musicControls">
                <span  className={props.randomRadio ? "prev-hidden" : "prev"} onClick={props.playPreviousRadio}><i class="fas fa-step-backward"></i></span>
                <span className="play" onClick={accion}><i class={props.isPlaying ? "fas fa-pause" : "fas fa-play"}></i></span>
                <span  className={props.randomRadio ? "next-hidden" : "next"} onClick= {props.playNextRadio}><i class="fas fa-step-forward"></i></span>
                <span className="random" onClick={props.getNewRandomRadio}>Random Radio:<i class="fas fa-random"></i> </span>                    
          </div>
        <div className='name-country-radio'>
            
         
        <h3 className='radio-name'>{props.randomRadio.name} </h3>
        
        <h3 className='country-name'>{props.randomRadio.country}</h3> 
        {/* <img className="image-player" src={props.randomRadio.favicon}  onError={setDefaultSrc}/> */}
      
      
        </div>
         
        </div>
    )
}


export default Controls