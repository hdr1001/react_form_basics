//React form basics cheat

import React from "react";
import { TextInput } from "./TxtInput";
import { RadioInput } from "./RadioInput";
import { CheckInput } from "./CheckInput";
import { DropDownInput } from "./DropDownInput.js";

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

    event.persist(); //http://bit.ly/2StVoUa

    if (event.target.type === "checkbox") {
      this.setState((prevState, props) => {
        return { [name]: event.target.checked };
      });
    } else {
      this.setState((prevState, props) => {
        return { [name]: event.target.value };
      });
    }
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
    const radioBtns = {
      radioGrpLabel: "Gender",
      arrBtns: [
        {
          name: "optGender",
          id: "optMale",
          label: "Male",
          value: "M"
        },
        {
          name: "optGender",
          id: "optFemale",
          label: "Female",
          value: "F"
        }
      ]
    };

    const checkBoxes = {
      chkBoxesLabel: "Options",
      arrChks: [
        {
          name: "chkWater",
          label: "Water",
          value: this.state.chkWater
        },
        {
          name: "chkIce",
          label: "Ice",
          value: this.state.chkIce
        },
        {
          name: "chkStir",
          label: "Stir",
          value: this.state.chkStir
        }
      ]
    };

    const dropDownOpts = {
      ddLabel: "Menu choice",
      name: "ddmMenuChoice",
      arrOpts: [
        { text: "A la cart", value: "a" },
        { text: "Special", value: "s" },
        { text: "Catch of the day", value: "c" },
        { text: "Vegetarian", value: "v" }
      ]
    };

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
                <RadioInput
                  btnInfo={radioBtns}
                  value={this.state.optGender}
                  onChange={this.handleChange}
                />
              </div>

              <div className="ElementGrp">
                <CheckInput chkInfo={checkBoxes} onChange={this.handleChange} />
              </div>

              <div className="ElementGrp">
                <DropDownInput
                  ddInfo={dropDownOpts}
                  value={this.state.ddmMenuChoice}
                  onChange={this.handleChange}
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
