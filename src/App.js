import React, { Component } from "react";
import { Grommet, Heading } from "grommet";
import "./App.css";
import "./wavy.scss";
import "./master.scss";
import TheHero from "./sections/TheHero/TheHero";
import AnimationBackground from "./components/animation/animation";
import AnimationBackgroundB from "./components/animation/animation_b";
import TheWork from "./sections/TheWork";
import ProgressBar from "./components/UI/ProgressBar/ProgressBar";
import Centerer from "./components/hoc/Centerer";
import scrollToComponent from "react-scroll-to-component";

const theme = {
  global: {
    colors: { brand: "#99cc33", accent: ["#3399cc", "#cc3399"] },
    input: { border: { radius: "4px" } },
    font: {
      name: "IBM Plex Sans",
      family: "'IBM Plex Sans', Arial, sans-serif"
    }
  },
  button: { border: { radius: "4px" } },
  checkBox: { border: { radius: "4px" } },
  layer: { border: { radius: "4px" } }
};

const animationBackgroundColor = "rgba(0, 0, 0, 0.2)";

class App extends Component {
  state = {
    currentHeight: 0,
    totalHeight: 0
  };

  constructor(props) {
    super(props);
    this.mainSection = React.createRef();
  }

  //To listen to scrolling
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    this.setState({
      totalHeight: document.documentElement.scrollHeight - window.innerHeight
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  scrollToMainSection = () => {
    console.log("GOING TO MAINSECTIOn");
    scrollToComponent(this.mainSection.current, {
      offset: 0,
      align: "top",
      duration: 700,
      ease: "inExpo"
    });
  };

  handleScroll = () => {
    // do something like call `this.setState`
    // access window.scrollY etc
    this.setState({
      currentHeight:
        document.documentElement.scrollTop || document.body.scrollTop
    });
  };

  render() {
    return (
      <Grommet theme={theme} full style={{ width: "100%" }}>
        <div className="app">
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              zIndex: 900
            }}
            className="fixedElementFix"
          >
            <ProgressBar
              height="4px"
              length={
                (this.state.currentHeight / this.state.totalHeight) * 100 + "%"
              }
              opacity={this.state.currentHeight > 0 ? 1 : 0}
            />
          </div>
          <div
            className="heroSegment"
            style={{ backgroundColor: animationBackgroundColor }}
          >
            <AnimationBackground />
            <TheHero scrollToMainSection={this.scrollToMainSection} />
          </div>
          <div className="wavy" />
          <TheWork ref={this.mainSection} />
          <div className="wavy rotate" />
          <div className="footerSegment">
            <AnimationBackgroundB short />
            <div
              style={{
                height: "400px",
                backgroundColor: animationBackgroundColor,
                zIndex: -2
              }}
            >
              <Centerer>
                <Heading
                  style={{
                    color: "white",
                    fontWeight: "600",
                    padding: "100px 50px 0"
                  }}
                  textAlign="center"
                  responsive={true}
                  margin="large"
                >
                  Here! Let's grab a cup of digital coffee.
                </Heading>
              </Centerer>
            </div>
          </div>
        </div>
      </Grommet>
    );
  }
}

export default App;
