import React from "react";
import Nav from "./Component/Nav";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import Parent from "./Component/Parent";
import Child from "./Component/Child";

function App() {
  const number = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {/*Component
      {/*<Nav />
      <Body />
      <Footer />*/}
      {/*Props
      <Parent name="parent"/>*/}
      {/*map*/}
      {number.map((item) => (
        <Child number={item} />
      ))}
    </div>
  );
}

export default App;
