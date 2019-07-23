import React from 'react';
import 'bulma/css/bulma.css';

function coolButton(props){

return(


<button className={`button ${props.isSmall && 'is-small'} `}>{props.children}</button>


);


}
export default coolButton;