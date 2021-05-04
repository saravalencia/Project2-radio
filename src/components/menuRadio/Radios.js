import React, {useState} from "react";
import defaultImage from './defaultImage.jpg'

import { favouritesActions } from '../../_actions';
import { useDispatch, useSelector } from 'react-redux';

function Favorites({handleFavorites, info, radioName}) {

    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    const [isFavorite, setIsFavorite] = useState(false)
    const handleClick =  () => {
        setIsFavorite(!isFavorite)
        handleFavorites({info});

        dispatch(favouritesActions.addFavourite(user.username, radioName));

    }


  return (

           
          <div className="favorite" onClick={handleClick}>
          {isFavorite ? "♥" : "♡"}  
          </div>           
          
           
    
  );
}

export default Favorites;