import React, {useState} from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import './map.css';

/*[ISO2 country code] to find countrys by code*/


 export function Map() {

  let [country, setCountry] = useState('')
  
  const getData = (countryCode) => {
    fetch('https://de1.api.radio-browser.info/json/stations/bycountrycodeexact/' + countryCode)
    .then(response => response.json())
    .then(data => {
      setCountry(data)
      setApiloaded(true)     
    }) 
  }

  const play = () =>{
    this.setCountry({
      play: true,
      pause: false
    });
    console.log(this.audio);
    this.audio.play();
  }

  let [apiloaded, setApiloaded] = useState(false)

//Function controls


  
  
 










const chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

 chart.maxZoomLevel = 1;

 chart.seriesContainer.draggable = false;

 chart.seriesContainer.resizable = false;

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
let polygonTemplate = polygonSeries.mapPolygons.template;

polygonTemplate.tooltipText = "{name} {id}";

let hs = polygonTemplate.states.create("hover");

hs.properties.fill = am4core.color("#F5455D");
polygonSeries.exclude = ["AQ"];
polygonTemplate.fill = am4core.color("#4040CE");

polygonTemplate.events.on('hit', function (e)  {
    let countryCode = e.target.dataItem.dataContext.id
    getData(countryCode)
    
    // mettre a jour le state
})

// Create hover state and set alternative fill color

    return (
      <div className="">
      <div  className="container">
      <div> 
          {
            apiloaded &&
            <div >
              {
                country.sort((a,b) => b.votes - a.votes ).slice(0,5).map(countrys=> <ul><img src={countrys.favicon}/><a href={countrys.url} onClick={play}>{countrys.name}</a></ul>)
              }
            </div>
              
          }
      </div>  
      <div id = "chartdiv" className="chartdiv">
      </div>
      </div>
      <div className="controls">

          <div className='vlmen'>
            <span className="volum"><i class="fas fa-volume-down"></i> </span>
            <input type="range" name="volBar" id="volbar"/>
          </div>         
                 
          <div className="musicControls">
                <span  className="prev"><i class="fas fa-step-backward"></i></span>
                <span className="play"><i class="fas fa-play"></i></span>
                <span  className="next"><i class="fas fa-step-forward"></i></span>
                <span className="random"><i class="fas fa-random"></i> </span>
                <span className="repeat"><i class="fas fa-redo-alt"></i> </span>                
          </div>

          <div className="progressb">
            <span class="currenT"> 1:30</span>
            <input type="range" name="progresBar" id="prgbar"/>
            <span class="totalT">3:12</span>
          </div>
               
      </div>
      
      </div>
    );
  
}