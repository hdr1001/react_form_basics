//React drop down menu functional component

import React from "react";

function DropDownInput(props) {
  const ddInfo = props.ddInfo;

  return (
    <React.Fragment>
      <label htmlFor={ddInfo.name}>{ddInfo.ddLabel}</label>
      <select name={ddInfo.name} value={props.value} onChange={props.onChange}>
        {ddInfo.arrOpts.map(anOpt => {
          return (
            <React.Fragment key={anOpt.value}>
              <option value={anOpt.value}>{anOpt.text}</option>
            </React.Fragment>
          );
        })}
      </select>
    </React.Fragment>
  );
}

export { DropDownInput };
