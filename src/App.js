import React, {useState} from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import Map from './components/map/Map'; 
import MenuRadio from './components/menuRadio/MenuRadio'
import Player from './components/player/Player'
import {CSSTransition} from 'react-transition-group'


function App() {
  let [countryRadio, setCountryRadio] = useState('')
  let [country, setCountry] = useState('')
  let [valueRadio, setValueRadio] = React.useState("");
  let [apiloaded, setApiloaded] = useState("")
  
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



  
  return (
    
    <div className="App">
      
      <Navbar/>

      <div className='containerAll'>
      {
        apiloaded &&
       <CSSTransition
        timeout={30000}
        in={true}
        appear={true}
        classNames="transition" >

          <MenuRadio 
          getRadio={getRadio}
          countryRadio={countryRadio} 
          />
  </CSSTransition>
     } 
      <Map 
      getCountryCode={getCountryCode}
      />
  </div>
   <Player 
      valueRadio={valueRadio}
      />
    </div>
  );
}

export default App;
