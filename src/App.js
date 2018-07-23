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
import { scroller, Element } from "react-scroll";
import "../node_modules/grommet-css";

const theme = {
  global: {
    colors: { brand: "#178EDE", accent: ["#3399cc", "#cc3399", "33cc99"] },
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
    window.requestAnimationFrame(() => {
      scroller.scrollTo("mainSection", {
        duration: 900,
        delay: 0,
        smooth: "easeInOutQuart"
      });
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
          <Element name="mainSection">
            <TheWork ref={this.mainSection} />
          </Element>
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
                <div style={{ width: "100%" }}>
                  <Heading
                    style={{
                      color: "white",
                      fontWeight: "600",
                      padding: "100px 0 0px",
                      marginBottom: 10
                    }}
                    textAlign="center"
                    responsive={true}
                    margin="large"
                  >
                    Here! Let's grab a cup of digital coffee.
                  </Heading>
                  <Heading
                    responsive={true}
                    textAlign="center"
                    level={2}
                    color="#7fd4d3"
                  >
                    <span
                      className="underlineColored"
                      onClick={() => {
                        window.open("http://m.me/cwsimonc");
                      }}
                    >
                      Messeging
                    </span>{" "}
                    ||{" "}
                    <span
                      className="underlineColored"
                      onClick={() => {
                        window.open(
                          "https://mail.google.com/mail/?view=cm&fs=1&to=cw.simon.chen@gmail.com&su=Greetings!&body=I heard you make kickass coffee!"
                        );
                        window.open(
                          "mailto:cw.simon.chen?Subject=I heard you make kickass coffee!"
                        );
                      }}
                    >
                      Email
                    </span>
                  </Heading>
                </div>
              </Centerer>
            </div>
          </div>
        </div>
      </Grommet>
    );
  }
}

export default App;
