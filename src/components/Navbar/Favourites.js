import React from 'react';
import { Button } from '@material-ui/core';
import './Favourites.css';

import { favouritesActions } from '../../_actions';
import { useDispatch, useSelector } from 'react-redux';

function Favourites(props) {
    const [active, setActive] = React.useState(true);

    const dispatch = useDispatch();

    function handleClickCreate(event) {
        console.log(event.currentTarget.value);

        //aqui metemos localstoragge
        const rememberMe = "pizza";
        localStorage.setItem('rememberMe', event.currentTarget.value);

        dispatch(favouritesActions.addFavourite('hola','radio'));

    }

    function handleClickDelete (event) {
        console.log(event.currentTarget.value);

        const deleteMe = localStorage.removeItem('rememberMe', event.currentTarget.value);
        console.log(deleteMe);
    }

    function handleClickShow (event) {
        console.log(event.currentTarget.value);

        const showMe = localStorage.getItem('rememberMe', event.currentTarget.value);
        console.log(showMe);
    }

    function handleClickKeep (event) {
        console.log(event.currentTarget.value);
    }



  return (
      <div className="buttons">
          
  <Button onClick={(event)=>handleClickCreate(event)} value={props.valueRadio}>Create</Button>
  <Button onClick={(event)=>handleClickDelete(event)} value={"text"}>Delete</Button> //extraer el rememberme de localstorage, borrarlo, y meter el dato modificado a localstorage.
  <Button onClick={(event)=>handleClickShow(event)} value={"text"}>Show</Button> //extraer reme. me de ls. y loguearlo a la consola. 
  <Button onClick={(event)=>handleClickKeep(event)} value={"text"}>Keep</Button> //quitar y agregar más adelante si se necesita.

      </div>
  );
}

export default Favourites;