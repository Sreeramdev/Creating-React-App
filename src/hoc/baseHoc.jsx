import React from "react";
import ClassComponents from "../pages/ClassComponents";
import FunctionalComponent from "../pages/FunctionalComponent";
const BaseHoc =(Component)=>{
  return(
    <div>
        <Component />
    </div>
  )
}

export default BaseHoc;