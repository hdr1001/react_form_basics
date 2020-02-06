//React check box input component

import React from "react";

class CheckInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event);
  }

  render() {
    const checkGrpLabel = this.props.chkInfo.chkBoxesLabel;
    const checkBoxes = this.props.chkInfo.arrChks;

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
                onChange={this.handleChange}
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
}

export { CheckInput };
