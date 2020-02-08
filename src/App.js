import React from "react";
import { FormBasicsCheat } from "./FormBasicsCheat";

const iniStateForm = {
  txtName: "James Bond",
  txtAlias: "007",
  txtAdr: "",
  txtCity: "",
  pwdCode: "",
  optGender: "M",
  chkWater: false,
  chkIce: false,
  chkStir: true,
  ddmMenuChoice: "c",
  hdnInp: "🤯" //No longer associated with a control
};

export default function App() {
  return (
    <div className="App">
      <FormBasicsCheat iniState={iniStateForm} />
    </div>
  );
}
