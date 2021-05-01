import { arcToPoint } from '@amcharts/amcharts4/.internal/core/rendering/Path'
import { add } from '@amcharts/amcharts4/.internal/core/utils/Array'
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
   
   function nextRadioIndex(valueRadio){
    if (props.valueRadio + 1 > props.valueRadio - 1) {
      return 0;
    } else {
      return props.valueRadio + 1;
    }
  };

   
  
   
    return (
        <div className="controls">

          <div className='vlmen'>
            <span className="volum" onClick={muted}><i class="fas fa-volume-down"></i> </span>
          </div>         
                 
          <div className="musicControls">
                <span  className="prev" onClick={nextRadioIndex}><i class="fas fa-step-backward"></i></span>
                <span className="play" onClick={accion}><i class={props.isPlaying ? "fas fa-pause" : "fas fa-play"}></i></span>
                <span  className="next" onClick=''><i class="fas fa-step-forward"></i></span>
                <span className="random" onClick=''><i class="fas fa-random"></i> </span>      
                <span  className="fav" onClick={add}><i class={props.isAdding ? "fas fa-heart" : "far fa-heart"}></i></span> 
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