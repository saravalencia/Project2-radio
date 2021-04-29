import { arcToPoint } from '@amcharts/amcharts4/.internal/core/rendering/Path'
import React from 'react'
import './player.css'




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
 
   
      
   
    return (
        <div className="controls">

          <div className='vlmen'>
            <span className="volum" onClick={muted}><i class="fas fa-volume-down"></i> </span>
          </div>         
                 
          <div className="musicControls">
                <span  className="prev" onClick={props.playPreviousRadio}><i class="fas fa-step-backward"></i></span>
                <span className="play" onClick={accion}><i class={props.isPlaying ? "fas fa-pause" : "fas fa-play"}></i></span>
                <span  className="next" onClick={props.playNextRadio}><i class="fas fa-step-forward"></i></span>
                <span className="random" onClick={props.getNewRandomRadio}><i class="fas fa-random"></i></span>
                                    
          </div>
          <div className="name-country-radio">
          <h3>Random Radio name: {props.randomRadio.name} from </h3>
          <h3>{props.randomRadio.country}</h3>
          </div>

          {/* <div className="progressb">
            <span class="currenT"> 1:30</span>
            <input type="range" name="progresBar" id="prgbar"/>
            <span class="totalT">3:12</span>
          </div> */}
        </div>
    )
}


export default Controls