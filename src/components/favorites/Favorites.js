import React, {useContext} from 'react';
import ListFavorites from './ListFavorites'
import {MyContext} from '../../context/MyProvider'
import './Favorites.css';
import ListFavoritesRandom from './ListFavoritesRandom';


function Favorites({ getRadioFavorite, getRadioFavoriteRandom}){
    const context = useContext(MyContext)
    return(
        <div  className="favorites-radios">
            <div className="title-favorites">
             <h1>Top 10 Favorite Radios List</h1>   
            </div>
            <div className="radios-container">
              {context.favoritesList.map((info, index) => (
                <ListFavorites
                key={index} 
                {...info}
                getRadioFavorite={getRadioFavorite}                
            />
            ))}  
            </div>
            <div className="title-favorites">
             <h1>Random Favorite Radios List</h1>   
            </div>
            <div className="radios-container">
              {context.favoritesListRandom.map((info, index) => (
                <ListFavoritesRandom
                key={index} 
                {...info}
                getRadioFavoriteRandom={getRadioFavoriteRandom}                
            />
            ))}  
            </div>               
        </div>
     )
}
    

export default Favorites;