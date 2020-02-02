import React from "react";
import { FormBasicsCheat } from "./FormBasicsCheat";

const iniStateForm = {
  txtName: "James Bond",
  txtAlias: "007",
  txtAdr: "",
  txtCity: "",
  pwdCode: ""
};

export default function App() {
  return (
    <div className="App">
      <FormBasicsCheat iniState={iniStateForm} />
    </div>
  );
}
