import React from 'react'
import './menuRadio.css'

function MenuRadio(props) {

    return (

        <div className="RadioItemsContainer"> 
      
        <div >
          {
            
            props.countryRadio.filter((country) => country.codec === "MP3").sort((a,b) => b.votes - a.votes ).slice(0,10).map(countrys=> 
              
            <ul className='RadioList'>
            <li className='nav-radio' onClick={() => props.getRadio(countrys.url_resolved)}  >{countrys.name}</li>
            
            </ul>
           
            )}
        </div> 

      
  </div> 

    )

}

export default MenuRadio;