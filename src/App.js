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
  let [valueRadio, setValueRadio] = useState("");
  let [apiloaded, setApiloaded] = useState("")
  let [bottomPopUp,setBottomPopUp] = useState(false)
  
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

      <div className="container-menu-map">
       
      <Map 
      setBottomPopUp={setBottomPopUp}
      getCountryCode={getCountryCode}
      />
      {
        apiloaded &&
       <CSSTransition
        timeout={30000}
        in={true}
        appear={true}
        classNames="transition" >

          <MenuRadio 
          trigger={bottomPopUp}
          setBottomPopUp={setBottomPopUp}
          getRadio={getRadio}
          countryRadio={countryRadio}
          />
  </CSSTransition>
     }
  </div>
   <Player 
      valueRadio={valueRadio}
      />
    </div>
  );
}

export default App;