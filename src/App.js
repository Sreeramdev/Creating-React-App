import "./App.css";
import ClassComponents from "./components/ClassComponents";
import FunctionalComponent from "./components/FunctionalComponent";
import { useState } from "react";
function App() {
  const company = "devtown";
  const [name, setName] = useState("sreeram")

  return (
    <div className="App">
      <h1>Class component</h1>
      <ClassComponents></ClassComponents>
      <br />
      <h1>Functional component</h1>
      <FunctionalComponent name = {name} age = {21} company={company} setName={setName}/>
    </div>
  );
}

export default App;
