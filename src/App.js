import "./App.css";
import ClassComponents from "./pages/ClassComponents";
import FunctionalComponent from "./pages/FunctionalComponent";
import {Routes,Route} from "react-router-dom"
import { useState } from "react";
import BaseHoc from "./hoc/baseHoc";
function App() {
  const company = "devtown";
  const [name, setName] = useState("sreeram")

  return (
    <Routes>
       <Route path="/" element={
        <BaseHoc>
       <ClassComponents/>
       </BaseHoc>}/>
       <Route path="/functional-component" element={
       <BaseHoc>
       <FunctionalComponent
       name = {name}
       company = {company}
       age ={21}
       setName={setName}
       />
       </BaseHoc>}/>

      </Routes>
  );
}

export default App;
