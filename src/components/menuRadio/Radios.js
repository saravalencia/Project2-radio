import React, {useState} from "react";



function Favorites({handleFavorites, info}) {
    const [isFavorite, setIsFavorite] = useState(false)
    const handleClick =  () => {
        setIsFavorite(!isFavorite)
        handleFavorites({info});
    }


  return (

           
          <div className="favorite" onClick={handleClick}>
          {isFavorite ? "♥" : "♡"}  
          </div>           
          
           
    
  );
}

export default Favorites;