export const getData = (countryCode) => {
  fetch('https://de1.api.radio-browser.info/json/stations/bycountrycodeexact/' + countryCode)
  .then(response => response.json())
  .then(data => {
    setCountry(data)
    setApiloaded(true)     
  }) 
}