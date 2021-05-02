import React from 'react';
import './Favorites.css';


function Favorites(props){
    return(
        <div className="containerPopUp-radios">
            <div className="tittle">
                Favourites Radios
            </div>
           <div className="container-fav-radios">            
            <img  src="https://images.vexels.com/media/users/3/153286/isolated/preview/99b4727883865307f95511eb26383cbc-icono-plano-de-radio-port-aacute-til-by-vexels.png" alt="fotoRadio" className="Photos" /> 
             <h1>Título de la Radio </h1>{/* props.name */}
            <button className="btn-delete" onClick=""> {/* props.cancion que pinche */}
                Delete
            </button>
           </div>
        </div>
    )
}
    



export default Favorites;