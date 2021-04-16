import React, {useState} from 'react';


function MenuRadio({api}){


<div className=""> 
          {
            apiloaded &&
            <div>
              {
                country.sort((a,b) => b.votes - a.votes ).slice(0,5).map(countrys => <h1>{countrys.name}</h1>)
              }
              </div>
          }
      </div> 

}
