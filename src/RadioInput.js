//React radio buttons input component

import React from "react";

class RadioInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event);
  }

  render() {
    const radioGrpLabel = this.props.btnInfo.radioGrpLabel;
    const radioButtons = this.props.btnInfo.arrBtns;

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
                onChange={this.handleChange}
                checked={this.props.value === btn.value}
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
}

export { RadioInput };
