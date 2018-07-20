import React from "react";
import './ProgressBar.scss'

const ProgressBar = props => {
  return (
    <div className="progressBorder" style={{opacity: props.opacity}}>
      <div
        className="progressBar"
        style={{ height: props.height, width: props.length, backgroundColor: '#7fd4d3' }}
      />
    </div>
  );
};

export default ProgressBar;
