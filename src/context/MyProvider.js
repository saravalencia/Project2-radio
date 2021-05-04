import React, {useState, useEffect} from 'react';

export const MyContext = React.createContext();

 

const MyProvider = props => {

  let [countryRadio, setCountryRadio] = useState('')
  let [country, setCountry] = useState('')
  let [valueRadio, setValueRadio] = useState("");
  let [apiloaded, setApiloaded] = useState("")
  let [stations, setStations] = useState(false);
  let [randomRadio, setRandomRadio] = useState("")
  let [favorites, setFavorites] = useState([]);
  let [currentCountryRadioIndex, setCurrentCountryRadioIndex] = useState('')
  const [isPlaying, setIsPlaying] = useState(true);
  let [bottomPopUp,setBottomPopUp] = useState(false)
  let [showInfo, setShowInfo] = useState(false)


  const getData = (countryCode) => {

    fetch('https://de1.api.radio-browser.info/json/stations/bycountrycodeexact/' + countryCode)
    .then(response => response.json())
    .then(data => {
      setCountryRadio(data.filter((country) => country.codec === "MP3" || country.codec === "OGG").sort
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
    setRandomRadio(false)
    setShowInfo(true)   
  }
 
  const getRadioFavorite = (favoriteRadio) => {
    setValueRadio(favoriteRadio)
    console.log(favoriteRadio)
    setIsPlaying(true)
    
  }
  
  const handleFavorites = (radiosFavoritesInfo) => {
    setFavorites([...favorites, radiosFavoritesInfo]);
   };

  const getNewRandomRadio = () => {
  
    setValueRadio(randomRadio.url === undefined
      ? "http://radiomeuh.ice.infomaniak.ch/radiomeuh-128.mp3"
      : randomRadio.url);
    setRandomRadio(stations[Math.floor(Math.random() * stations.length)]);
    setIsPlaying(true)
    setShowInfo(false)   
  }


  const playNextRadio = () => {
 
     if (currentCountryRadioIndex === 9  ) {
     setCurrentCountryRadioIndex(0);
     setValueRadio(countryRadio[0].url)
   } else  {
    setValueRadio(countryRadio[currentCountryRadioIndex + 1].url);
    setCurrentCountryRadioIndex(currentCountryRadioIndex + 1)
   }
    
  }

  const playPreviousRadio = () => {

   
   if (currentCountryRadioIndex === 9 ) {
      setCurrentCountryRadioIndex(0);
      setValueRadio(countryRadio[0].url)
    } else {
     
     setValueRadio(countryRadio[currentCountryRadioIndex - 1].url);
     setCurrentCountryRadioIndex(currentCountryRadioIndex - 1)
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
        <MyContext.Provider value={{
            countryRadio: countryRadio,
            country: country,
            valueRadio: valueRadio,
            apiloaded: apiloaded,
            stations: stations,
            randomRadio: randomRadio,
            currentCountryRadioIndex: currentCountryRadioIndex,
            isPlaying: isPlaying,
            bottomPopUp: bottomPopUp,
            favoritesList: favorites,
            handleFavorites: handleFavorites,
            getRadioFavorite: getRadioFavorite,            
            setBottomPopUp: setBottomPopUp,
            getData: getData,
            getCountryCode: getCountryCode,
            getRadio: getRadio,
            getNewRandomRadio: getNewRandomRadio,
            playNextRadio: playNextRadio,
            playPreviousRadio: playPreviousRadio,
            getDataRandom: getDataRandom,
            
        }}>
            {props.children}
        </MyContext.Provider>

    )
}

export default MyProvider;