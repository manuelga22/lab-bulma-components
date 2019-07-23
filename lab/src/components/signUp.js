import React from 'react';
import 'bulma/css/bulma.css';
import Nav from './nav'
import FormField from "./formField"
import Button from "./coolButton";


function signUp(){
return(
  <div>
  <Nav />
  <FormField Name="name" theType="name" />
  <Button isSmall isDanger>button 1</Button>
  </div>
);
}

export default signUp;
