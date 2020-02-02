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
      <div>
        <label htmlFor={this.props.name}>Name</label>
        <input
          type="text"
          name={this.props.name}
          value={this.props.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export { TextInput };
