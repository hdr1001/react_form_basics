//React form basics cheat

import React from "react";
import { TextInput } from "./TxtInput";

class FormBasicsCheat extends React.Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, props.iniState);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
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

  handleReset(event) {
    this.setState(Object.assign({}, this.props.iniState));
    event.preventDefault();
  }

  render() {
    return (
      <div id="center_col">
        <div id="content">
          <form
            encType="application/x-www-form-urlencoded"
            onSubmit={this.handleSubmit}
            onReset={this.handleReset}
          >
            <fieldset>
              <legend>Form lift state example</legend>

              <div className="ElementGrp">
                <TextInput
                  label="Name"
                  name="txtName"
                  value={this.state.txtName}
                  onChange={this.handleChange}
                />
                <TextInput
                  label="Alias"
                  name="txtAlias"
                  value={this.state.txtAlias}
                  readOnly={true}
                />
                <TextInput
                  label="Address"
                  name="txtAdr"
                  value={this.state.txtAdr}
                  onChange={this.handleChange}
                  maxLength={64}
                />
                <TextInput
                  label="City"
                  name="txtCity"
                  value={this.state.txtCity}
                  onChange={this.handleChange}
                />
                <TextInput
                  label="Secret code"
                  name="pwdCode"
                  value={this.state.pwdCode}
                  onChange={this.handleChange}
                  password={true}
                />
              </div>

              <div className="ElementGrp">
                <label>&nbsp;</label>
                <input type="submit" value="Submit" />
                <input type="reset" value="Reset" />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export { FormBasicsCheat };
