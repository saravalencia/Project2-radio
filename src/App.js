import { useState } from "react";
import "./App.css";
import ListStationTest from "./components/ListStationTest";


/*--------------Discover------------------*/

function App() {
  const [text] = useState("world from stations");
  const [stations, setStations] = useState("");

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
      {/*{console.log(stations)}*/}
      {/*<h3>{names[Math.floor(Math.random() * names.length)]}</h3><br />*/}
      <ListStationTest />
      <h1>{text}</h1>
      <h2>Station dinamic</h2>
      <audio controls autoplay name="media">
        <source src={stations[Math.floor(Math.random() * stations.length)]} type="audio/mpeg"></source>
      </audio>
      <br />
      {/*<Map />*/}
      <button onClick={getData}>Give me radio</button>{" "}
    </div>
  );
}

/*--------------The End Discover------------------*/


export default App;
