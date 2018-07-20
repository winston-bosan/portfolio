import React, { Component } from 'react';
import { Heading, Paragraph } from "grommet";
import Container from "../components/UI/Container/Container";
import { Grid, Row, Col } from "react-bootstrap";
import { Technology, Home } from "grommet-icons";

class TheWork extends Component {
  state = {  }

  render() { 
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
              <Col sm={12} md={4}>
                <Heading level={2} color="#111" margin="small">
                  Meighbourhood ⇒
                </Heading>
              </Col>
              <Col sm={12} md={6}>
                <Heading level={2} color="#111" margin="small">
                  About:
                </Heading>
                <Paragraph color="#111" margin="small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Paragraph>
              </Col>
              <Col sm={12} md={2}>
                <Technology size="xlarge" style={{ stroke: "#7fd4d3" }} />
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={4}>
                <Heading level={2} color="#111" margin="small">
                  True North ⇒
                </Heading>
              </Col>
              <Col sm={12} md={6}>
                <Heading level={2} color="#111" margin="small">
                  About:
                </Heading>
                <Paragraph color="#111" margin="small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                  alt='This is Simon in the Flesh.'
                />
              </Col>
              <Col sm={12} md={7}>
                <Heading color="black">Hi! I am Simon.</Heading>
                <Paragraph style={{ color: "black" }}>
                  <span style={{ fontWeight: "800" }}>||</span> Based in Toronto,
                  Canada
                </Paragraph>
                <Paragraph style={{ color: "black" }}>
                  <span style={{ fontWeight: "800" }}>||</span> I am enamored with
                  React and PyTorch.
                </Paragraph>
                <Paragraph style={{ color: "black" }}>
                  <span style={{ fontWeight: "800" }}>||</span> I write
                  JavaScript, SCSS/CSS and HTML. Also, I build tiny houses. I aim
                  to create experiences that look and function beautifully across
                  web and real-life.
                </Paragraph>
              </Col>
            </Row>
          </Grid>
        </div>
      </Container>
    );
  
  }
}
 
export default TheWork;