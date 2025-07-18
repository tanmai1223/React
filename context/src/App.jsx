import React from "react";
import Parent from "./Components/Parent";
import {Data} from './Context/Context'

function App() {

  const EmpData=[
    {
      name:"Ravi",
      age:15
    },
    {
      name:"Abhi",
      age:78
    },
    {
      name:"Ammu",
      age:15
    },
    {
      name:"Nuttu",
      age:18
    }
  ]

  return (
    <div>
      <Data.Provider value={EmpData}>
        <Parent />
      </Data.Provider>
    </div>
  );
}

export default App;
