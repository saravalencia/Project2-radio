import React, { useState, useEffect } from "react";
import "./App.css";
//import MenuRandom from './components/menuRandom/MenuRandom'
import Player from './components/player/Player'


/*--------------Discover------------------*/

function App() {
  //const [text] = useState("world from stations");


  let [api, setApi] = useState('')
  let [url, setUrl]= useState('')
  let [radioRandom, setRadioRandom]= useState('')
  let [apiloaded, setApiloaded] = useState(false)
  
  const getData = (countryCode) => {
    fetch('https://de1.api.radio-browser.info/json/stations')
        .then(response => response.json())
        .then(data => {
            setApi(Math.floor(Math.random() * api.length))
            setApi(data.filter((filterRadio) => filterRadio.codec === "MP3")/*.sort((a,b) => b.votes - a.votes)*/.slice(0,10))    
            
            setApiloaded(true)      
    }) 
  }
   
  useEffect(() => {
    getData()
}, [])



const handle = () => {
  setUrl(api)
}

  return (
    <div className="App">
       { url ?
      <>
  <div className="RadioItemsContainer"> 
      {/* {
        apiloaded &&
        <MenuRandom
        url={url}
        setRadioRandom={setRadioRandom}
        /> 
      } */}

<div >
          {
            
            url.map((datas, index)=> 
              
            <ul key={index} className='RadioList'>{<img className="img" src={datas.favicon}/> }
            <a className='nav-radio' href="#" onClick={() => setRadioRandom(datas.url)}  >{datas.name}</a>
            
            </ul>
           
            )}
        </div>
  </div> 
  </> 
  : ''
  }
      <div>
        <button className="button" onClick={handle}>Radio Random</button>
      </div>

      <div className="container-player">
      <Player 
      
      />
      </div>
    </div>
  );
}

/*--------------The End Discover------------------*/


export default App;