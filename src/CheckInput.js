//React check boxes functional component

import React from "react";

function CheckInput(props) {
  const checkGrpLabel = props.chkInfo.chkBoxesLabel;
  const checkBoxes = props.chkInfo.arrChks;

  return (
    <React.Fragment>
      {checkBoxes.map((chk, idx) => {
        return (
          <React.Fragment key={chk.name}>
            <label htmlFor={chk.name}>{idx ? "" : checkGrpLabel}</label>
            <input
              type="checkbox"
              name={chk.name}
              checked={chk.value}
              onChange={props.onChange}
            />
            <label htmlFor={chk.name} className="rhs">
              {chk.label}
            </label>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}

export { CheckInput };
