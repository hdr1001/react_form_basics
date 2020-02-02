//React form basics cheat

import React from "react";
import { TextInput } from "./TxtInput";

class FormBasicsCheat extends React.Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, props.iniState);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit(event) {
    alert("Submit " + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <div id="center_col">
        <div id="content">
          <form
            encType="application/x-www-form-urlencoded"
            onSubmit={this.handleSubmit}
          >
            <fieldset>
              <legend>Form lift state example</legend>

              <div className="ElementGrp">
                <TextInput
                  name="txtName"
                  value={this.state.txtName}
                  onChange={this.handleChange}
                />
              </div>

              <div className="ElementGrp">
                <label>&nbsp;</label>
                <input type="submit" value="Submit" />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export { FormBasicsCheat };
