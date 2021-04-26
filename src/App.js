import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import Map from './components/map/Map'; 
//import MenuRadio from './components/menuRadio/MenuRadio'
import Player from './components/player/Player'
import AboutUs from './components/aboutUs/AboutUs'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  let [countryRadio, setCountryRadio] = useState('')
  let [country, setCountry] = useState('')
  let [valueRadio, setValueRadio] = useState("");
  let [apiloaded, setApiloaded] = useState("")
  let [bottomPopUp,setBottomPopUp] = useState(false)
  const [stations, setStations] = useState(false);
  const [randomRadio, setRandomRadio] = useState("http://radiomeuh.ice.infomaniak.ch/radiomeuh-128.mp3")
  
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
  }



  const getNewRandomRadio = () => {
  
    
    setValueRadio(randomRadio.url === undefined
      ? "http://radiomeuh.ice.infomaniak.ch/radiomeuh-128.mp3"
      : randomRadio.url);
    setRandomRadio(stations[Math.floor(Math.random() * stations.length)]);
    
  }

 //unir boton random a 


const getData2 = () => {
     
    fetch("https://de1.api.radio-browser.info/json/stations")
      .then((response) => response.json())
      .then(data => data.filter(radio => (radio.codec === "MP3" || radio.codec === "OGG"))) //aqui el filter
      .then((data) => {
        setStations(data)
      }
      )};


      useEffect (() => {
        getData2()
        
      }, []);
  

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
              />            
                 
      </Route>

      <Route exact path="/aboutUs">
    
            <AboutUs  />           
                      
      </Route>

      <Route exact path="/favorites">
    
            <h1>FAVORITES</h1>          
                      
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
          getNewRandomRadio={getNewRandomRadio}
          valueRadio={valueRadio}
      />     
      </BrowserRouter>
    

      
    </div>
  );
}

export default App;