import {MyContext} from '../../context/MyProvider'
import React, {useContext} from 'react';
import defaultImage from './defaultImage.jpg'

const ListFavoritesRandom = ({infoRandom}) => {
  const context = useContext(MyContext)
  const setDefaultSrc = (event) => {
    event.target.src = defaultImage;
}
  return (
    <div className="cards-radios">
      <div>
       {<a  onClick={() => context.getRadioFavoriteRandom(infoRandom)}><img className="img" alt="Radio-Icon" onError={setDefaultSrc} src={infoRandom.favicon} /></a> }
          <p className='a-radio' onClick={() => context.getRadioFavoriteRandom(infoRandom)}>
          {infoRandom.name}  
          </p> 
      </div>
        
    </div>
    
    
   
  );
}

export default ListFavoritesRandom;
