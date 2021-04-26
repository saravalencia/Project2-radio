import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import Map from './components/map/Map'; 
//import MenuRadio from './components/menuRadio/MenuRadio'
import Player from './components/player/Player'
import AboutUs from './components/aboutUs/AboutUs'
import Favorites from './components/favorites/Favorites'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {useLocalStorage} from './components/favorites/useLocalStorage'


function App() {
  let [countryRadio, setCountryRadio] = useState('')
  let [country, setCountry] = useState('')
  let [valueRadio, setValueRadio] = useState("");
  let [apiloaded, setApiloaded] = useState("")
  //let [bottomPopUp,setBottomPopUp] = useState(false)
  let [addFavorites, setAddFavorites] = useLocalStorage('Favorites', 'setAddFavorites')
  //let favorites = valueRadio
  //let [favorites, setFavorites] = 
  //let [currentRadioIndex, setcurrentRadioIndex] = useState('')
    console.log(addFavorites)
  
  const getData = (countryCode) => {
    fetch('https://de1.api.radio-browser.info/json/stations/bycountrycodeexact/' + countryCode)
    .then(response => response.json())
    .then(data => {
      setCountryRadio(data)
      setApiloaded(true)     
    }) 
  }

  const getCountryCode = (selectedCountry) => {
    setCountry(selectedCountry)
    getData(selectedCountry)
  }

  const getRadio = (selectedRadio) => {
    setValueRadio(selectedRadio)
    setAddFavorites(selectedRadio)
  }

  
  //  function nextRadioIndex(){
  //     if (currentRadioIndex + 1 > valueRadio.length - 1) {
  //       return 0;
  //     } else {
  //       return currentRadioIndex + 1;
  //     }
  //   };
  

  // function getbackwars(){
  //       currentSong(valueRadio.legth - 1)

    // setCurrentSong(() => {
    //   if (currentSong + 1 > valueRadio.length - 1) {
    //     return 0;
    //   } else {
    //     return currentSong + 1;
    //   }
    // })
  // } 
  //
    
  
  // const setLocalStorage = value => {
  //   try{
  //     valueRadio(value)
  //     window.localStorage.setItem("text", value)
  //   } catch (error){
  //     console.log(error)
  //   }
  // }


  
  return (
    
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
      <Switch>      
      <Route exact path="/country" exact>        
            
            <Map 
              getCountryCode={getCountryCode}
              getRadio={getRadio}
              countryRadio={countryRadio}
              apiloaded={apiloaded}
              addFavorites={addFavorites}
              />            
                 
      </Route>

      <Route exact path="/aboutUs">
    
            <AboutUs  />           
                      
      </Route>

      <Route exact path="/favorites">
    
            <Favorites
            valueRadio={valueRadio} />          
                      
      </Route>
      <Route exact path="/">        
                    
              <Map 
              getCountryCode={getCountryCode}
              getRadio={getRadio}
              countryRadio={countryRadio}
              apiloaded={apiloaded}
              />
                 
      </Route>
      </Switch> 
      <Player 
          valueRadio={valueRadio}
          //getbackwars={getbackwars}
         // nextRadioIndex={nextRadioIndex}
      />     
      </BrowserRouter>
    

      
    </div>
  );
}

export default App;