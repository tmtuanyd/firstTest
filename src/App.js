import React from "react";
import "./App.css";
import BasicTest from "./components/basicTest/BasicTest";
import Counter from "./components/counter/Counter";
import Reducer from "./components/hooks/Reducer";
import TestAxios from "./components/hooks/TestAxios";
import TestContext from "./components/hooks/TestContext";
import TestForm from "./components/hooks/TestForm";
import Context from "./components/store/context";

function App() {
  const [state, setState] = React.useState("Some Text");
  const [name, setName] = React.useState("test");
  const changeName = () => {
    setName("Tuan");
  };
  const changeText = () => {
    setState("Some Other Text");
  };
  return (
    <div className="App">
      <BasicTest />
      <h1>Counter</h1>
      <Counter name={name} changeName={changeName} />
      <Reducer />
      <Context.Provider
        value={{ changeTextProp: changeText, stateProp: state }}
      >
        <TestContext />
      </Context.Provider>
      <TestForm />
      <TestAxios url="https://jsonplaceholder.typicode.com/posts/1" />
    </div>
  );
}

export default App;
