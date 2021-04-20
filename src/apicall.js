
 export const getData = (props) => {
    fetch('https://de1.api.radio-browser.info/json/stations/bycountrycodeexact/' + props.countryCode)
    .then(response => response.json())
    .then(data => {
      props.setCountry(data)
      props.setApiloaded(true)     
    })
  } 
  
