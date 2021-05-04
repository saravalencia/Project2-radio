// import React from 'react'
// //import MenuRadio from '../menuRadio/MenuRadio';
// import Favorites from './Favorites'

function Cards({info, getRadioFavorite}) {
  return (
    <div className="cards-radios">
        {<a onClick={() => getRadioFavorite(info)}><img className="img" alt="Radio-Icon" src={info.favicon} /></a> }
          <p className='a-radio' onClick={() => getRadioFavorite(info)}>
          {info.name}  
          </p> 
    </div>
   
  );
}

export default Cards;
