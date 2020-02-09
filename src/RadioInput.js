//React radio buttons functional component

import React from "react";

function RadioInput(props) {
  const radioGrpLabel = props.btnInfo.radioGrpLabel;
  const radioButtons = props.btnInfo.arrBtns;

  return (
    <React.Fragment>
      {radioButtons.map((btn, idx) => {
        return (
          <React.Fragment key={btn.id}>
            <label htmlFor={btn.id}>{idx ? "" : radioGrpLabel}</label>
            <input
              type="radio"
              name={btn.name}
              id={btn.id}
              value={btn.value}
              onChange={props.onChange}
              checked={props.value === btn.value}
            />
            <label htmlFor={btn.id} className="rhs">
              {btn.label}
            </label>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}

export { RadioInput };
