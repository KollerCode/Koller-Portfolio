import React, { useState } from "react";
// import SpinnerIcon from "../images/SpinnerIcon.gif"

function Resume() {
  // const [spin,setSpin] = useState(0)
 
  return (
    <div className="resume">
      <a href="kollernatasha@gmail.com">Resume available upon request</a>
      {/* <img 
         className="spinner-image"
         src={SpinnerIcon}
         alt=''
         onClick={() => setSpin(1)}
         onAnimationEnd={() => setSpin(0)}
         spin={spin}
       />*/}
    </div>
  );
 }

export default Resume