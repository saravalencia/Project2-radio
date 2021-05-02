import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import Map from './components/map/Map'; 
//import MenuRadio from './components/menuRadio/MenuRadio'
import Player from './components/player/Player'
import AboutUs from './components/aboutUs/AboutUs'
import Favorites from './components/favorites/Favorites'
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useLocalStorage} from './components/favorites/useLocalStorage';

import { history } from './_helpers';
import { alertActions } from './_actions';
import { PrivateRoute } from './_components';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';



function App() {
  let [countryRadio, setCountryRadio] = useState('')
  let [country, setCountry] = useState('')
  let [valueRadio, setValueRadio] = useState("");
  let [apiloaded, setApiloaded] = useState("")
  //let [bottomPopUp,setBottomPopUp] = useState(false)
  let [addFavorites, setAddFavorites] = useState([]);   //este de acá
  //let favorites = valueRadio
  //let [favorites, setFavorites] = 
  //let [currentRadioIndex, setcurrentRadioIndex] = useState('')

  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

  
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
  
  const handleAddToFavorites = (radio) => {
    console.log(radio);
    //meterle a addFavorites "radio" como un nuevo elemento del array
    //setAddFavorite([...addFavorites, radio])

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
      <Router history={history}>
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
      
      <Route exact path="/login">
        <LoginPage/>
      </Route>

      <Route exact path="/register">
        <RegisterPage/>
      </Route>
      <Redirect from="*" to="/" />
      </Switch> 
      <Player 
          valueRadio={valueRadio}
          handleAddToFavorites={handleAddToFavorites}
          //getbackwars={getbackwars}
         // nextRadioIndex={nextRadioIndex}
      />     
      </Router>
    

      
    </div>
  );
}

export default App;