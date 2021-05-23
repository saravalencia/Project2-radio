import React, {useState} from "react";
import './player.css'

function FavoritesRandom({handleFavoritesRandom, infoRandom}) {
    const [isFavoriteRandom, setIsFavoriteRandom] = useState(false)
    const handleClickRandom =  () => {
        setIsFavoriteRandom(!isFavoriteRandom)
        handleFavoritesRandom({infoRandom});
    }


  return (

           
          <div className="favoriteRandom" onClick={handleClickRandom}>
          {isFavoriteRandom ? <i class="fas fa-heart"></i> : <i class="far fa-heart"></i>}  
          </div>           
          
           
    
  );
}

export default FavoritesRandom;