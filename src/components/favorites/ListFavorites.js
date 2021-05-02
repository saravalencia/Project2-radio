import React from 'react'
import Favorites from './Favorites'

const favoritesRadios = [
    {
      name: "",
      icon: "",
      url: "",
    },
    
  ];
  
  const ListFavorites = () => {
    return (
      <div  className="favorites-radios" >
        {favoritesRadios.map((radios, index) => (
          <Favorites
            key={index}
            img={radios.icon}
            name={radios.name}          
            url={radios.url}
          />
        ))}
      </div>
    );
  };
  
  export default ListFavorites;