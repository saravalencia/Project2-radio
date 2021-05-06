import React, {useState, useEffect} from 'react';

export const MyContext = React.createContext();

 

const MyProvider = props => {

  let [countryRadio, setCountryRadio] = useState('')
  let [country, setCountry] = useState('')
  let [valueRadio, setValueRadio] = useState("");
  let [apiloaded, setApiloaded] = useState("")
  let [stations, setStations] = useState(false);
  let [randomRadio, setRandomRadio] = useState("")
  let [currentCountryRadioIndex, setCurrentCountryRadioIndex] = useState('')
  let [currentRandomRadioIndex, setCurrentRandomRadioIndex] = useState('')
  let [bottomPopUp,setBottomPopUp] = useState(false)
  let [isPlaying, setIsPlaying] = useState(true);
  let [favorites, setFavorites] = useState([]);
  let [showInfo, setShowInfo] = useState(false)
  


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
    setShowInfo(true)  
    setRandomRadio(false)  
  }
 
  const getRadioFavorite = (favoriteRadio) => {
    setValueRadio(favoriteRadio)
    console.log(favoriteRadio)
    setIsPlaying(true)
    
  }
  

  const getNewRandomRadio = () => {
  
    
    setValueRadio(randomRadio === undefined
      ? "http://radiomeuh.ice.infomaniak.ch/radiomeuh-128.mp3"
      : randomRadio);
    setRandomRadio(stations[Math.floor(Math.random() * stations.length)]);
    setIsPlaying(true)
    setShowInfo(false)
    
  }

 

  const playNextRadio = () => {
    
   
   if (currentCountryRadioIndex === 9 ) {
     setCurrentCountryRadioIndex(0);
     setValueRadio(countryRadio[0])
   } else {
     console.log(countryRadio[currentCountryRadioIndex + 1])
    
    setValueRadio(countryRadio[currentCountryRadioIndex + 1]);
    setCurrentCountryRadioIndex(currentCountryRadioIndex + 1)
    
   }
    
  }

   
   const playPreviusRadioRandom = () => {
    
   
    if (currentRandomRadioIndex === 9 ) {
      setCurrentRandomRadioIndex(0);
      setRandomRadio(stations[0])
    } else {
      console.log(stations[currentRandomRadioIndex - 1])
     
     setRandomRadio(stations[currentRandomRadioIndex - 1]);
     setCurrentRandomRadioIndex(currentRandomRadioIndex - 1)
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
  
const handleFavorites = (radiosFavoritesInfo) => {

   setFavorites([...favorites, radiosFavoritesInfo]);
 

};

    return (
        <MyContext.Provider value={{
            countryRadio: countryRadio,
            country: country,
            valueRadio: valueRadio,
            apiloaded: apiloaded,
            stations: stations,
            randomRadio: randomRadio,
            currentCountryRadioIndex: currentCountryRadioIndex,
            currentRandomRadioIndex: currentRandomRadioIndex,
            isPlaying: isPlaying,
            showInfo: showInfo,
            bottomPopUp: bottomPopUp,
            favoritesList: favorites,
            handleFavorites: handleFavorites,
            setIsPlaying: setIsPlaying,
            getRadioFavorite: getRadioFavorite,            
            setBottomPopUp: setBottomPopUp,
            getData: getData,
            getCountryCode: getCountryCode,
            getRadio: getRadio,
            getNewRandomRadio: getNewRandomRadio,
            playNextRadio: playNextRadio,
            playPreviusRadioRandom: playPreviusRadioRandom,
            getDataRandom: getDataRandom,
            
            
        }}>
            {props.children}
        </MyContext.Provider>

    )
}

export default MyProvider;