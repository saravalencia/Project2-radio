import { arcToPoint } from '@amcharts/amcharts4/.internal/core/rendering/Path'
import React from 'react'
import './map.css'




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
            <span className="volum" onClick={muted}><i className="fas fa-volume-down"></i> </span>
            <input type="range" name="volBar" id="volbar"/>
          </div>         
                 
          <div className="musicControls">
                <span  className="prev"><i className="fas fa-step-backward"></i></span>
                <span className="play" onClick={accion}><i class={props.isPlaying ? "fas fa-pause" : "fas fa-play"}></i></span>
                <span  className="next"><i className="fas fa-step-forward"></i></span>
                <span className="random"><i className="fas fa-random"></i> </span>
                <span className="repeat"><i className="fas fa-redo-alt"></i> </span>                
          </div>

          <div className="progressb">
            <span className="currenT"> 1:30</span>
            <input type="range" name="progresBar" id="prgbar"/>
            <span class="totalT">3:12</span>
          </div>
        </div>
    )
}


export default Controls