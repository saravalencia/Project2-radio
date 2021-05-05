import React, {useContext} from 'react';
import Navbar from './components/Navbar/Navbar'
import Map from './components/map/Map'; 
import Player from './components/player/Player'
import AboutUs from './components/aboutUs/AboutUs'
import Favorites from './components/favorites/Favorites'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import MenuRadio from './components/menuRadio/MenuRadio'

import {MyContext} from './context/MyProvider'

function App() {

  const context = useContext(MyContext)

  return (
    
    

<div className="App">
        <BrowserRouter>
        <Navbar/>
        
        <Switch>
        <Route exact path="/aboutUs">
      
            <AboutUs  />           
                        
        </Route>
  
        <Route exact path="/favorites">
      
            <Favorites
              />          
                        
        </Route>
        <Route exact path="/">        
                   
        <div className="container-menu-map">
            <Map 
              
              />   
                
            {
              context.apiloaded &&
            <MenuRadio
              />
            } 
               
        </div> 
          
        </Route>
        </Switch> 
        <Player 
            
        />     
        </BrowserRouter>
    

      
    </div>

   
    
      
  );
}

export default App;