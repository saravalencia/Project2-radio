import {MyContext} from '../../context/MyProvider'
import React, {useContext} from 'react';
import defaultImage from './defaultImage.jpg'

const ListFavorites = ({info}) => {
  const context = useContext(MyContext)
  const setDefaultSrc = (event) => {
    event.target.src = defaultImage;
}
  return (
    <div className="cards-radios">
      <div>
       {<a  onClick={() => context.getRadioFavorite(info)}><img className="img" alt="Radio-Icon" onError={setDefaultSrc} src={info.favicon} /></a> }
          <p className='a-radio' onClick={() => context.getRadioFavorite(info)}>
          {info.name}  
          </p> 
      </div>
        
    </div>
    
    
   
  );
}

export default ListFavorites;
