import React from 'react';
import Option from './Option';
const Options = (props) => (
      <div>
        <button onClick = {props.handleDeleteOptions}>
          Remove all
        </button>
        {(props.options.length!==0)?props.options.map((option,index) =>(
          <Option 
            key={index} 
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption} 
          />
          )
        ):<p>The options array is empty</p>}
      </div>
    );
export default Options;
