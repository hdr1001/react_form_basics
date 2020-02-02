//React form basics cheat

import React from "react";

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

    if (event.target.type === "checkbox") {
      this.setState({
        [name]: event.target.checked
      });
    } else {
      this.setState({
        [name]: event.target.value
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
    return (
      <div id="center_col">
        <div id="content">
          <form
            encType="application/x-www-form-urlencoded"
            onSubmit={this.handleSubmit}
            onReset={this.handleReset}
          >
            <fieldset>
              <legend>Form elements example</legend>

              <div className="ElementGrp">
                <label htmlFor="txtName">Name</label>
                <input
                  type="text"
                  name="txtName"
                  value={this.state.txtName}
                  onChange={this.handleChange}
                />

                <label htmlFor="txtAlias">Alias</label>
                <input
                  type="text"
                  name="txtAlias"
                  value={this.state.txtAlias}
                  readOnly
                />

                <label htmlFor="txtAdr">Address</label>
                <input
                  type="text"
                  name="txtAdr"
                  value={this.state.txtAdr}
                  onChange={this.handleChange}
                  maxLength="64"
                />

                <label htmlFor="txtCity">City</label>
                <input
                  type="text"
                  name="txtCity"
                  value={this.state.txtCity}
                  onChange={this.handleChange}
                />

                <label htmlFor="pwdCode">Secret code</label>
                <input
                  type="password"
                  name="pwdCode"
                  value={this.state.pwdCode}
                  onChange={this.handleChange}
                />
              </div>

              <div className="ElementGrp">
                <label htmlFor="optMale">Gender</label>
                <input
                  type="radio"
                  name="optGender"
                  id="optMale"
                  value="M"
                  onChange={this.handleChange}
                  checked={this.state.optGender === "M"}
                />
                <label htmlFor="optFemale" className="rhs">
                  Male
                </label>
                <label>&nbsp;</label>
                <input
                  type="radio"
                  name="optGender"
                  id="optFemale"
                  value="F"
                  onChange={this.handleChange}
                  checked={this.state.optGender === "F"}
                />
                <label htmlFor="optFemale" className="rhs">
                  Female
                </label>
              </div>

              <div className="ElementGrp">
                <label htmlFor="chkWater">Options</label>
                <input
                  type="checkbox"
                  name="chkWater"
                  checked={this.state.chkWater}
                  onChange={this.handleChange}
                />
                <label htmlFor="chkWater" className="rhs">
                  Water
                </label>
                <label htmlFor="chkIce">&nbsp;</label>
                <input
                  type="checkbox"
                  name="chkIce"
                  checked={this.state.chkIce}
                  onChange={this.handleChange}
                />
                <label htmlFor="chkIce" className="rhs">
                  Ice
                </label>
                <label htmlFor="chkStir">&nbsp;</label>
                <input
                  type="checkbox"
                  name="chkStir"
                  checked={this.state.chkStir}
                  onChange={this.handleChange}
                />
                <label htmlFor="chkStir" className="rhs">
                  Stir
                </label>
              </div>

              <div className="ElementGrp">
                <label htmlFor="ddmMenuChoice">Menu choice</label>
                <select
                  className="ddmMenuChoice"
                  value={this.state.ddmMenuChoice}
                  onChange={this.handleChange}
                >
                  <option value="a">A la cart</option>
                  <option value="s">Special</option>
                  <option value="c">Catch of the day</option>
                </select>
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
