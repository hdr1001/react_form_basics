//React text input component

import React from "react";

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event);
  }

  render() {
    return (
      <React.Fragment>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input
          {...(this.props.password ? { type: "password" } : { type: "text" })}
          name={this.props.name}
          value={this.props.value}
          {...(this.props.readOnly
            ? { readOnly: true }
            : { onChange: this.handleChange })}
          {...(this.props.maxLength ? { maxLength: this.props.maxLength } : {})}
        />
      </React.Fragment>
    );
  }
}

export { TextInput };
