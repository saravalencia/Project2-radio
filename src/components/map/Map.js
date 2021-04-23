import React, {useState, useEffect} from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import MenuRadio from '../menuRadio/MenuRadio'
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

import './map.css';

/*[ISO2 country code] to find countrys by code*/


function Map(props) {

  /*let [country, setCountry] = useState('')
  
  const getData = (countryCode) => {
    fetch('https://de1.api.radio-browser.info/json/stations/bycountrycodeexact/' + countryCode)
    .then(response => response.json())
    .then(data => {
      setCountry(data)
      setApiloaded(true)     
    }) 
  }*/
  
  let [bottomPopUp,setBottomPopUp] = useState(false)
  



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
     props.getCountryCode(countryCode)
     setBottomPopUp(true)
    })

 
     // mettre a jour le state
 

// Create hover state and set alternative fill color
return (
  <div className="container-menu-map">
    <div id = "chartdiv" className="chartdiv">
  </div>
  {
    props.apiloaded &&
    <MenuRadio
    trigger={bottomPopUp}
    setBottomPopUp={setBottomPopUp}
    getRadio={props.getRadio}
    countryRadio={props.countryRadio} />
  }
  
  </div>
   
);
}

export default Map;
 