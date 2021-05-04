import React, { useEffect } from 'react';
import ListFavorites from './ListFavorites'
import './Favorites.css';

import { favouritesActions } from '../../_actions';
import { useDispatch, useSelector } from 'react-redux';

function Favorites({favoritesList, getRadioFavorite}){
    const favs = useSelector(state => state.favourites);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(favouritesActions.getByUsername(user.username));
    }, []);

    return(
        <div  className="favorites-radios">
            <div className="title-favorites">
             <h1>Favorite List</h1>   
            </div>
            <div className="radios-container">
              


            {favs.items &&
                <ul>
                    {favs.items.map((fav, index) =>
                        
                        <p>{fav.radioname}</p>
                        
                    )}
                </ul>
            }
            </div>               
        </div>
     )
}
    



export default Favorites;