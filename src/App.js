import React from "react";
import "./App.css";
import BasicTest from "./components/basicTest/BasicTest";
import Counter from "./components/counter/Counter";
import Reducer from "./components/hooks/Reducer";

function App() {
  const [name, setName] = React.useState("test");
  const changeName = () => {
    setName("Tuan");
  };
  return (
    <div className="App">
      <BasicTest />
      <h1>Counter</h1>
      <Counter name={name} changeName={changeName} />
      <Reducer />
    </div>
  );
}

export default App;
