import {MyContext} from '../../context/MyProvider'
import React, {useContext} from 'react';

function Cards({info, getRadioFavorite}) {
  const context = useContext(MyContext)
  return (
    <div className="cards-radios">
        {<a key={info.name} onClick={() => context.getRadioFavorite(info.url_resolved)}><img className="img" alt="Radio-Icon" src={info.favicon} /></a> }
          <p className='a-radio' onClick={() => context.getRadioFavorite(info.url_resolved)}>
          {info.name}  
          </p> 
    </div>
   
  );
}

export default Cards;
