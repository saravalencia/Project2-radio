import React, {useContext} from 'react';
import ListFavorites from './ListFavorites'
import {MyContext} from '../../context/MyProvider'
import './Favorites.css';


function Favorites({ getRadioFavorite}){
    const context = useContext(MyContext)
    return(
        <div  className="favorites-radios">
            <div className="title-favorites">
             <h1>Favorite List</h1>   
            </div>
            <div className="radios-container">
              {context.favoritesList.map((info) => (
                <ListFavorites  {...info}
                getRadioFavorite={getRadioFavorite}
            />
            ))}  
            </div>               
        </div>
     )
}
    

export default Favorites;