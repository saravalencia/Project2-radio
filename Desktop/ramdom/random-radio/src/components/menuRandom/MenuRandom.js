import React from 'react'
import './menuRandom.css'

function MenuRadio(props){



    return(

         
  <div className="RadioItemsContainer"> 
      
      <div >
          {
            
            props.getData.map((datas, index)=> 
              
            <ul key={index} className='RadioList'>{<img className="img" src={datas.favicon}/> }
            <a className='nav-radio' href="#" onClick={() => props.setRadioRandom(datas.url)}  >{datas.name}</a>
            
            </ul>
           
            )}
        </div>

      
  </div> 
 
 
    )



}

export default MenuRadio;