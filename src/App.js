import { useState } from "react";
import "./App.css";
import Discover from "./components/Discover";
/*import ReactAudioPlayer from 'react-audio-player';*/
import Player from './components/repro/Player';



/*--------------Discover------------------*/

function App() {
  const [text] = useState("world from stations");
  const [stations, setStations] = useState("");
  //let [valueRadio, setValueRadio] = useState("");
  let chosenRadioRandom  = stations[Math.floor(Math.random() * stations.length)]

  const getData = () => {
    fetch("https://de1.api.radio-browser.info/json/stations")
      .then((response) => response.json())
      .then((data) => {
        setStations(
          data.map(function (mapStation) {
            return mapStation.url;
          })
        );
      });

  };

  return (
    <div className="App">

      <h1>{text}</h1>
      <Discover getData={getData}/>
      

      <br />
      <div className="controls">
    

   <Player chosenRadioRandom={chosenRadioRandom} />
    {/*<ReactAudioPlayer
      src={loco}
      autoPlay
      controls
    />*/}
    
    
    </div>
    </div>
  );
}

/*--------------The End Discover------------------*/


export default App;
