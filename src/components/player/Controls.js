
import React, {useContext, useState} from 'react'
import './player.css'
import defaultImage from '../menuRadio/defaultImage.jpg'
import {MyContext} from '../../context/MyProvider'



function Controls(props) {

    const context = useContext(MyContext)
    const [statevolum, setStateVolum] = useState(0.3)


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
                <span className="volum" onClick={muted}><i className={props.isMuted ? "fas fa-volume-mute" : "fas fa-volume-down"}></i> </span>
                <input value={Math.round(statevolum * 100)} type="range" name="volBar" id="volBar" onChange={(e) => handleVolume(e.target.value / 100)} />
            </div>         
             
            <div className="musicControls">
            <span  className={context.randomRadio ? "prev-hidden" : "prev"} onClick={context.playPreviousRadio}><i className="fas fa-step-backward"></i></span>
                <span className="play" onClick={accion}><i className={props.isPlaying ? "fas fa-pause" : "fas fa-play"}></i></span>
                <span  className={context.randomRadio ? "next-hidden" : "next"} onClick= {context.playNextRadio}><i className="fas fa-step-forward"></i></span>
                <span className="random" onClick={context.getNewRandomRadio}><i className="fas fa-random"></i></span>
                                
            </div>
            {
            context.showInfo ?
                <div className="name-country-radio">
                    <h3 className='radio-name'>{context.valueRadio.name} - </h3>
                    <h3 className='country-name'>- {context.valueRadio.country}</h3> 
                    <img className="image-player" src={context.valueRadio.favicon}  onError={setDefaultSrc}/>
                </div> 
            :
                <div className={context.valueRadio.url_resolved ? "name-country-radio" : "name-country-radio-hidden"}>
                    <h3 className='radio-name'>{context.randomRadio.name} </h3>
                    <h3 className='country-name'>{context.randomRadio.country}</h3> 
                    <img className={context.randomRadio ? "image-player" : "image-player-hide" }src={context.randomRadio.favicon}  onError={setDefaultSrc}/>
                </div>
             } 
        </div>
)
}


export default Controls