import React, {useEffect, useState} from 'react';

const api = 'https://de1.api.radio-browser.info/json/stations/bycountrycodeexact/'
let [country, setCountry] = useState('')
  
 export const getData = (countryCode) => fetch(api + countryCode).then(response => response.json())
    
          const storeData = () =>{
            then(data => {
            setCountry(data)
            setApiloaded(true) 
          } )}
              
     
  
  let [apiloaded, setApiloaded] = useState(false)

  useEffect(()=>{
      storeData()
  }, []);