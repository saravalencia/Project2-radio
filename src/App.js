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
  let [stations, setStations] = useState(false);
  let [randomRadio, setRandomRadio] = useState("http://radiomeuh.ice.infomaniak.ch/radiomeuh-128.mp3")
  let [currentCountryRadioIndex, setCurrentCountryRadioIndex] = useState('')
  
  


  const getData = (countryCode) => {
    fetch('https://de1.api.radio-browser.info/json/stations/bycountrycodeexact/' + countryCode)
    .then(response => response.json())
    .then(data => {
      setCountryRadio(data.filter((country) => country.codec === "MP3").sort
    ((a,b) => b.votes - a.votes ).slice(0,10))
      setApiloaded(true)     
    }) 
  }

  const getCountryCode = (selectedCountry) => {
    setCountry(selectedCountry)
    getData(selectedCountry)
  }

  const getRadio = (selectedRadio, index) => {
    setValueRadio(selectedRadio)
    console.log(index)
    setCurrentCountryRadioIndex(index)
    
  }
 
  

  const getNewRandomRadio = () => {
  
    
    setValueRadio(randomRadio.url === undefined
      ? "http://radiomeuh.ice.infomaniak.ch/radiomeuh-128.mp3"
      : randomRadio.url);
    setRandomRadio(stations[Math.floor(Math.random() * stations.length)]);
    
  }


  const playNextRadio = () => {
    
   
   if (currentCountryRadioIndex === 9 ) {
     setCurrentCountryRadioIndex(0);
     setValueRadio(countryRadio[0].url)
   } else {
     console.log(countryRadio[currentCountryRadioIndex + 1].url)
    
    setValueRadio(countryRadio[currentCountryRadioIndex + 1].url);
    setCurrentCountryRadioIndex(currentCountryRadioIndex + 1)
   }
    
  }

const getDataRandom = () => {
     
    fetch("https://de1.api.radio-browser.info/json/stations")
      .then((response) => response.json())
      .then(data => data.filter(radio => (radio.codec === "MP3" || radio.codec === "OGG"))) //aqui el filter
      .then((data) => {
        setStations(data)
      }
      )};


      useEffect (() => {
        getDataRandom()
        
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

          playNextRadio={playNextRadio}
          getNewRandomRadio={getNewRandomRadio}
          valueRadio={valueRadio}
      />     
      </BrowserRouter>
    

      
    </div>
  );
}

export default App;