import React, { Component } from "react";
import { Heading, Paragraph, Text } from "grommet";
import Container from "../components/UI/Container/Container";
import { Grid, Row, Col } from "react-bootstrap";
import { Technology, Home } from "grommet-icons";
import WorldMap from "grommet-old/components/WorldMap";
import Box from "grommet-old/components/Box";

class TheWork extends Component {
  state = {};

  render() {
    let showMobileExperience = window.innerWidth < 1000;
    return (
      <Container veryStrict>
        <div>
          <Grid style={{ margin: 0 }} className="overrideMaxWidth">
            <Row>
              <Col sm={12}>
                <Heading
                  className="colorHighlight"
                  size="large"
                  color="black"
                  margin="large"
                  style={{
                    width: "auto",
                    display: "inline-block",
                    position: "relative"
                  }}
                >
                  The Work
                </Heading>
              </Col>
            </Row>
            <Row style={{ marginBottom: 40 }}>
              <Col sm={12} md={5} style={{ paddingTop: "12px" }}>
                <Heading
                  level={2}
                  color="#111"
                  margin="small"
                  className="underline"
                  onClick={() => {
                    window.open("http://www.meighbourhood.com");
                  }}
                >
                  Meighbourhood ⇒
                </Heading>
              </Col>
              <Col sm={12} md={5} style={{ paddingTop: "12px" }}>
                <Heading level={2} color="#111" margin="small">
                  About:
                </Heading>
                <Paragraph color="#111" margin="small">
                  A online real estate data platform designed to offer a
                  visualization of housing data for Toronto, Canada.
                </Paragraph>
              </Col>
              <Col sm={12} md={2}>
                <Technology size="xlarge" style={{ stroke: "#7fd4d3" }} />
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={5}>
                <Heading
                  className="underline"
                  style={{ cursor: "not-allowed" }}
                  level={2}
                  color="#111"
                  margin="small"
                >
                  True North ⇒
                </Heading>
              </Col>
              <Col sm={12} md={5}>
                <Heading level={2} color="#111" margin="small">
                  About:
                </Heading>
                <Paragraph color="#111" margin="small">
                  A mini-house compound based in Ontario to teach and educate
                  people about the simplicity and benefits of minimal living.
                </Paragraph>
              </Col>
              <Col sm={12} md={2}>
                <Home size="xlarge" style={{ stroke: "#7fd4d3" }} />
              </Col>
            </Row>
          </Grid>
          <hr
            style={{
              marginTop: 60,
              marginBottom: 60,
              borderStyle: "dashed",
              borderColor: "rgba(0,0,0,0.1)"
            }}
          />
          <Grid style={{ margin: 0 }} className="overrideMaxWidth">
            <Row>
              <Col sm={12}>
                <Heading
                  className="colorHighlight"
                  size="large"
                  color="black"
                  margin="xlarge"
                  style={{
                    width: "auto",
                    display: "inline-block",
                    position: "relative",
                    marginBottom: 100
                  }}
                >
                  The Experience
                </Heading>
              </Col>
            </Row>
            <Row style={{ marginBottom: 80 }}>
              <Col sm={12}>
                <WorldMap
                  colorIndex="grey-2"
                  series={[
                    {
                      place: [41.585907860802784, 103.83870967741933],
                      label: "Beijing",
                      colorIndex: "graph-3",
                      id: "Beijing",
                      flag: !showMobileExperience && (
                        <Box pad="small" colorIndex="graph-3">
                          <Heading level="3" margin="none">
                            Tencent, 2015 Summer
                          </Heading>
                          <Text
                            margin="none"
                            style={{
                              fontStyle: "italic",
                              fontWeight: "bold"
                            }}
                            size="small"
                          >
                            Mobile advertisement intern
                          </Text>
                          <Text
                            margin="none"
                            size="small"
                            style={{ maxWidth: 250 }}
                          >
                            > I worked on a seasonal project with Nielsen to
                            bringing TV ad rating analysis techniques to mobile
                            advertisement.
                          </Text>
                        </Box>
                      )
                    },
                    {
                      place: [44.37770459322163, -79.38709677419355],
                      label: "Toronto",
                      colorIndex: "graph-1",
                      id: "Toronto",
                      flag: !showMobileExperience && (
                        <Box
                          pad="small"
                          colorIndex="graph-1"
                          style={{ color: "white" }}
                        >
                          <Heading level="3" margin="none">
                            Meighbourhood,<br /> 2017~2018
                          </Heading>
                          <Text
                            style={{
                              fontStyle: "italic",
                              fontWeight: "bold"
                            }}
                            margin="none"
                            size="small"
                          >
                            Founder and Developer
                          </Text>
                          <Text
                            margin="none"
                            size="small"
                            style={{ maxWidth: "300px" }}
                          >
                            > I built a data visualization platform for Toronto
                            Real Estate. A place where people can see housing
                            price, crime statistics and trends with the aid of
                            Technology.
                          </Text>

                        </Box>
                      )
                    }
                  ]}
                />
              </Col>
            </Row>
            {showMobileExperience && (
              <Row>
                <Box
                  pad="medium"
                  colorIndex="graph-3"
                  style={{ marginBottom: "10px" }}
                >
                  <Heading level="3" margin="none">
                    Tencent, 2015 Summer
                  </Heading>
                  <Text
                    margin="none"
                    style={{ fontStyle: "italic", fontWeight: "bold" }}
                    size="small"
                  >
                    Mobile advertisement intern in Beijing
                  </Text>
                  <Text margin="none" size="small" style={{ maxWidth: "none" }}>
                    > I worked on a seasonable project with Nielsen to bringing
                    TV ad rating analysis techniques to mobile advertisement.
                  </Text>
                </Box>
              </Row>
            )}
            {showMobileExperience && (
              <Row>
                <Box
                  pad="medium"
                  colorIndex="graph-1"
                  style={{ color: "white" }}
                >
                  <Heading level="3" margin="none">
                    Meighbourhood, 2017~2018
                  </Heading>
                  <Text
                    style={{ fontStyle: "italic", fontWeight: "bold" }}
                    margin="none"
                    size="small"
                  >
                    Founder and Developer in Toronto
                  </Text>
                  <Text margin="none" size="small" style={{ maxWidth: "none" }}>
                    > I built a data visualization platform for Toronto Real
                    Estate. A place where people can see housing price, crime
                    statistics and trends with the aid of Technology.
                  </Text>
                </Box>
              </Row>
            )}
          </Grid>
          <hr
            style={{
              marginTop: 60,
              marginBottom: 60,
              borderStyle: "dashed",
              borderColor: "rgba(0,0,0,0.1)"
            }}
          />
          <Grid style={{ margin: 0 }} className="overrideMaxWidth">
            <Row>
              <Col sm={12}>
                <Heading
                  className="colorHighlight"
                  size="large"
                  color="black"
                  margin="large"
                  style={{
                    width: "auto",
                    display: "inline-block",
                    position: "relative"
                  }}
                >
                  The Man
                </Heading>
              </Col>
            </Row>
            <Row style={{ marginBottom: 80 }}>
              <Col sm={12} md={5}>
                <img
                  src="https://i.imgur.com/J0MYLUX.jpg"
                  style={{
                    maxWidth: "300px",
                    width: "100%",
                    boxShadow: "8px 8px 0px 0px #7fd4d3",
                    zIndex: 800,
                    backgroundColor: "#7fd4d3",
                    background: "rgba(39,62,84,0.82)"
                  }}
                  alt="This is Simon in the Flesh."
                />
              </Col>
              <Col sm={12} md={7}>
                <Heading color="black" style={{ marginTop: "10px" }}>
                  Hi! I am Simon.
                </Heading>
                <Paragraph style={{ color: "black" }}>
                  <span style={{ fontWeight: "800" }}>↳</span> Based in Toronto,
                  Canada
                </Paragraph>
                <Paragraph style={{ color: "black" }}>
                  <span style={{ fontWeight: "800" }}>↳</span> I am enamored
                  with React and PyTorch.
                </Paragraph>
                <Paragraph style={{ color: "black" }}>
                  <span style={{ fontWeight: "800" }}>↳</span> I write
                  JavaScript, SCSS/CSS and HTML. Also, I build tiny houses. I
                  aim to create experiences that look and function beautifully
                  across web and real-life.
                </Paragraph>
                <Text style={{ color: "black" }}>
                  <span style={{ fontWeight: "800" }}>↳</span> Availability:{" "}
                  <span className="availableColor">◉</span>
                </Text>
              </Col>
            </Row>
          </Grid>
        </div>
      </Container>
    );
  }
}

export default TheWork;
