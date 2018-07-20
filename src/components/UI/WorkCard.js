import React from "react";
import { Heading, Paragraph } from "grommet";
import Centerer from "../hoc/Centerer";

const WorkCard = props => {
  return (
    <div
      style={{
        height: "250px",
        width: "100%",
        backgroundImage: props.image ? props.image : "grey",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center"
      }}
    >
      {/* <div
        style={{
          width: '100%',
          height: '100%',
          boxSizing: 'border-box',
          backgroundImage: props.image ? props.image : "grey",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          position: "absolute",
          zIndex: -1,
          filter: "brightness(40%)"
        }}
      /> */}
      <div
        style={{
          backgroundColor: props.flip ? "rgba(0,0,0,0.4)" : "none",
          padding: "20px 32px"
        }}
      >
        <Heading color={props.flip ? "white" : "black"}>{props.title}</Heading>
        <Paragraph style={{ color: props.flip ? "white" : "black" }}>
          {props.content}
        </Paragraph>
        <Paragraph style={{ color: props.flip ? "white" : "black" }}>
          {props.ending}
        </Paragraph>
      </div>
      {props.flip && [
        <div
          style={{ width: "100%", borderBottom: "5px solid rgba(0,0,0,0.2)" }}
        />,
        <div
          style={{ width: "100%", borderBottom: "5px solid rgba(0,0,0,0.1)" }}
        />
      ]}
    </div>
  );
};

export default WorkCard;
