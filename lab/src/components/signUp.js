import React from 'react';
import 'bulma/css/bulma.css';
import Nav from './nav'
import FormField from "./formField"
import Buttons from "./coolButton";


function signUp(){
return(
  <div>
  <Nav />
  <FormField />
  <Buttons />
  </div>
);
}

export default signUp;
