import { useState } from "react";
import "./App.css";
import ListStationTest from "./components/ListStationTest";
import ReactAudioPlayer from 'react-audio-player';



/*--------------Discover------------------*/

function App() {
  const [text] = useState("world from stations");
  const [stations, setStations] = useState("");
  //let [valueRadio, setValueRadio] = useState("");
  let setValueRadio = stations[Math.floor(Math.random() * stations.length)]

  const getData = () => {
    fetch("https://de1.api.radio-browser.info/json/stations")
      .then((response) => response.json())
      .then((data) => {
        setStations(
          data.map(function (mapStation) {
            return mapStation.url;
          })
        );
        /*console.log(names);*/
      });
    /*let names = data.map(function(mapName){
      return mapName.name
    })
    console.log(names)*/
  };

  return (
    <div className="App">
      {console.log(stations)}
      {console.log(setValueRadio)}
      {/*{console.log(valueRadio)}*/}
      {/*<h3>{names[Math.floor(Math.random() * names.length)]}</h3><br />*/}
      <ListStationTest />
      <h1>{text}</h1>
      <h2>Station dinamic</h2>
      {/*<audio controls autoplay name="media">
        <source src={stations[Math.floor(Math.random() * stations.length)]} type="audio/mpeg"></source>
      </audio>
      <img alt="img"src={mapStation.favicon} />
      <a className='nav-radio' href="#">{mapStation.name}</a>*/}
      
         {/*{
          stations.map(mapStation => 
    
    <ul className='RadioList'>{<img className="img" src={mapStation.favicon}/> }
    <a className='nav-radio' href="#" onClick={() => setValueRadio(mapStation.url)}  >{mapStation.name}</a>

    </ul>

    )}*/}
      <br />
      {/*<Map />*/}
      <button onClick={getData}>Give me radio</button>
      <div className="controls">
    
    <ReactAudioPlayer
      src={setValueRadio}
      autoPlay
      controls
    />
    
    
    </div>
    </div>
  );
}

/*--------------The End Discover------------------*/


export default App;
