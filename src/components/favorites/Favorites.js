import React from 'react';
import ListFavorites from './ListFavorites'
import './Favorites.css';


function Favorites({favoritesList, getRadioFavorite}){
    return(
        <div  className="favorites-radios">
            <div className="title-favorites">
             <h1>Favorite List</h1>   
            </div>
            <div className="radios-container">
              {favoritesList.map((info) => (
                <ListFavorites  {...info}
                getRadioFavorite={getRadioFavorite}
            />
            ))}  
            </div>               
        </div>
     )
}
    



export default Favorites;