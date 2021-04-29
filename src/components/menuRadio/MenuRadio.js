import React from 'react'
import defaultImage from './defaultImage.jpg'
import './menuRadio.css'

function MenuRadio(props){

  const setDefaultSrc = (event) => {
    event.target.src = defaultImage;
}

    return (props.trigger) ? (

   <div className="container-popUp">

<div className="modal-wrapper">       
      <div className="modal-header">
            <h1>TOP 10 RADIOS LIST</h1>
            <spam  className="close-modal-btn" onClick={()=> props.setBottomPopUp(false)}>X</spam>
      </div>
      <div className="modal-content">
      {
          
          props.countryRadio.map((countrys, index)=> 

          <div key={index} className="modal-body"> 
          {<a onClick={() => props.getRadio(countrys.url_resolved)}><img className="img" alt="Radio-Icon" onError={setDefaultSrc} src={countrys.favicon} /></a> }
          <p className='a-radio' onClick={() => props.getRadio(countrys.url_resolved, index)}>
          {countrys.name}  
          </p>                
          </div>
          
         
          )}  
      </div>       
        
    </div>


   </div>      
   
 
 
    ) : "";



}

export default MenuRadio;
















// import React from 'react'
// import './menuRadio.css'

// function MenuRadio(props){



//     return (
        
//   <div className="modal-wrapper"
//   style= {{
//     opacity: props.show ? '1' : '0'
//   }}>       
//       <div className="modal-header">
//         <h1> RADIOS LIST</h1>
//         <span className="close-modal-btn">X</span>
//       </div>
//       <div className="modal-content">
//       {
          
//           props.countryRadio.map((countrys, index)=> 

//           <div key={index} className="container-all-radios mov-radios"> 
//           {<img className="img" alt="favicon" src={countrys.favicon}/> }
//           <p className='a-radio' onClick={() => props.getRadio(countrys.url_resolved, index)}>
//           {countrys.name}
//           </p>
        
//           </div>
          
         
//           )}
//       </div>

//   </div> 
 
 
//     );



// };

// export default MenuRadio;