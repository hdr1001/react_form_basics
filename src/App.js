import React from "react";
import { FormBasicsCheat } from "./FormBasicsCheat";

const iniStateForm = { txtName: "" };

export default function App() {
  return (
    <div className="App">
      <FormBasicsCheat iniState={iniStateForm} />
    </div>
  );
}
