import React from 'react';
import ListFavorites from './ListFavorites'
import './Favorites.css';

import { favouritesActions } from '../../_actions';
import { useDispatch, useSelector } from 'react-redux';

function Favorites({favoritesList, getRadioFavorite}){

    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    const userFavourites = favouritesActions.getByUsername(user.username);

    return(
        <div  className="favorites-radios">
            <div className="title-favorites">
             <h1>Favorite List</h1>   
            </div>
            <div className="radios-container">
              {favoritesList.map((info) => (
                <ListFavorites  {...userFavourites}
                getRadioFavorite={getRadioFavorite}
                
                
            />
            ))}  
            </div>               
        </div>
     )
}
    



export default Favorites;