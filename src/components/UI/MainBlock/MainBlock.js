import React from "react";
import './MainBlock.css';

const MainBlock = props => {
  return (
    <div className="section section-gutters maxWidth">
      {props.children}
    </div>
  );
};

export default MainBlock;
