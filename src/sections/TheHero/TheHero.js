import React, { Component } from "react";
import Centerer from "../../components/hoc/Centerer";
import "./button.scss";
import { Heading } from "grommet";

class TheHero extends Component {

  render() {
    return (
      <Centerer>
        <Heading
          style={{
            color: "white",
            fontWeight: "400",
            fontSize: "2rem",
            marginBottom: 10,
            textAlign: "center"
          }}
          textAlign="center"
        >
          CW SIMON CHEN
        </Heading>
        <Heading
          style={{
            color: "white",
            fontWeight: "600",
            fontSize: "4rem",
            marginTop: 0
          }}
          textAlign="center"
          responsive={true}
          margin="large"
        >
          Interdiciplinary Developer.
        </Heading>
        <Centerer>
          {/* <Link to="/work"> */}
          <div className="button" onClick={this.props.scrollToMainSection}>
            <span className="button__mask" />
            <span className="button__text">Let's Go</span>
            <span className="button__text button__text--bis">Let's Go</span>
          </div>
          {/* </Link> */}
        </Centerer>
      </Centerer>
    );
  }
}

export default TheHero;
