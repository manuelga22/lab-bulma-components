import React from 'react';

import 'bulma/css/bulma.css';

function formfields(props){

return (
<div>
<div class="field">
  <label class="label">{props.Name}</label>
  <div class="control">
    <input class="input" type={props.theType} placeholder="e.g Alex Smith" />
  </div>
</div>
</div>

);

}
export default formfields;