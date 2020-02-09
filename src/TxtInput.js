//React text input functional component

import React from "react";

function TextInput(props) {
  return (
    <React.Fragment>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        {...(props.password ? { type: "password" } : { type: "text" })}
        name={props.name}
        value={props.value}
        {...(props.readOnly
          ? { readOnly: true }
          : { onChange: props.onChange })}
        {...(props.maxLength ? { maxLength: props.maxLength } : {})}
      />
    </React.Fragment>
  );
}

export { TextInput };
