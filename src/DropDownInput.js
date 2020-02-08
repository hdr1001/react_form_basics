//React drop down menu input component

import React from "react";

class DropDownInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event);
  }

  render() {
    const ddInfo = this.props.ddInfo;

    return (
      <React.Fragment>
        <label htmlFor={ddInfo.name}>{ddInfo.ddLabel}</label>
        <select
          name={ddInfo.name}
          value={this.props.value}
          onChange={this.handleChange}
        >
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
}

export { DropDownInput };
