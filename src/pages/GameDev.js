import React, { Component } from "react";
import { Heading, Paragraph, Image } from "grommet";
import Container from "../components/UI/Container/Container";
import { Grid, Row, Col } from "react-bootstrap";

class GameDev extends Component {
  state = {};

  render() {
    let showMobileExperience = window.innerWidth < 1000;
    return (
      <Container veryStrict>
        <Grid style={{ margin: 0 }} className="overrideMaxWidth">
          <Row>
            <Col sm={12}>
              <Heading
                className="colorHighlight"
                color="black"
                style={{
                  width: "auto",
                  display: "inline-block",
                  position: "relative"
                }}
              >
                August 3rd
              </Heading>
            </Col>
          </Row>
          <Row style={{ marginBottom: 40 }}>
            <Col sm={12} md={10} style={{ paddingTop: "12px" }}>
              <Heading
                color="black"
                size="small"
                margin="none"
                style={{ margin: "20px 0 20px 0" }}
              >
                Passion. The convenient foil for all misspent youth.
              </Heading>
              <Paragraph
                color="111"
                margin="none"
                style={{ marginTop: "10px", maxWidth: "100%" }}
              >
                The word uttered by people who have sundried their dreams during
                an earlier reign of a god they never bothered to remember.
                Passion is an epidemic that people finds solace in. “Oh, I have
                lost passion in that.” Says so another husk of a man. To keep
                going forward, Game Development must not only stay as a passion.
                But something more.
              </Paragraph>
              <Image
                fit="cover"
                style={{
                  borderRadius: "5px",
                  border: "1px solid rgba(0,0,0,0.3)",
                  margin: "20px 0 20px 0",
                  padding: "5px",
                  maxWidth: "100%"
                }}
                margin="small"
                src="https://catlikecoding.com/unity/tutorials/object-management/object-variety/tutorial-image.jpg"
              />
              <Paragraph
                color="111"
                margin="none"
                style={{ marginTop: "10px", maxWidth: "100%" }}
              >
                So far today, I have ventured further in Unity studying. I am
                currently learning the intricacies of save/load system design as
                well as Factory method pattern. Nothing out of my comfort zone
                yet. If anything, I should slow down and practice more to
                imprint the lessons in my memory.
              </Paragraph>
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
                color="black"
                style={{
                  width: "auto",
                  display: "inline-block",
                  position: "relative"
                }}
              >
                August 2nd
              </Heading>
            </Col>
          </Row>
          <Row style={{ marginBottom: 40 }}>
            <Col sm={12} md={10} style={{ paddingTop: "12px" }}>
              <Paragraph
                color="111"
                margin="none"
                style={{ marginTop: "10px", maxWidth: "100%" }}
              >
                I guess I am not that bad at C# after all. In the end, it is
                just another programming language which carries the
                technological foundation and debts of the likes of Java and C++.
                So, not so different after all.
              </Paragraph>
              <Paragraph
                color="111"
                margin="none"
                style={{ marginTop: "10px", maxWidth: "100%" }}
              >
                I ended up with three small projects. One about a clock face to
                familiarize myself with the language and component-based design
                language. Another about object instantiation as a graph. And
                another with instantiation as an animated surface.
              </Paragraph>

              <Image
                fit="cover"
                style={{
                  borderRadius: "5px",
                  border: "1px solid rgba(0,0,0,0.3)",
                  margin: "20px 0 20px 0",
                  padding: "5px",
                  maxWidth: "100%"
                }}
                margin="small"
                src="https://catlikecoding.com/unity/tutorials/basics/mathematical-surfaces/tutorial-image.jpg"
              />
              <Paragraph
                color="111"
                margin="none"
                style={{ marginTop: "10px", maxWidth: "100%" }}
              >
                So far, I quite enjoy Unity actually. The reason for why I
                switched from Godot is because of a lack of good documentation.
                The engine itself is light weight and well supported. But Unity
                has just so much industry depth and user base that learning it,
                though technologically may not be a better decision,
                realistically, it is a much simpler process.
              </Paragraph>
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
                color="black"
                style={{
                  width: "auto",
                  display: "inline-block",
                  position: "relative"
                }}
              >
                August 1st
              </Heading>
            </Col>
          </Row>
          <Row style={{ marginBottom: 40 }}>
            <Col sm={12} md={10} style={{ paddingTop: "12px" }}>
              <Paragraph
                color="111"
                margin="none"
                style={{ marginTop: "10px", maxWidth: "100%" }}
              >
                Today, I have decided on a very hard question - Which engine
                should I develop my first project in?
              </Paragraph>
              <Paragraph
                color="111"
                margin="none"
                style={{ marginTop: "10px", maxWidth: "100%" }}
              >
                After hours of anguish and trying to min-max future and present
                rewards, I realized getting started is much more important than
                the optimal decision.
              </Paragraph>
              <Heading
                color="black"
                size="small"
                margin="none"
                style={{ margin: "20px 0 20px 0", textAlign: "center" }}
              >
                "Choosing which engine to learn is not as important as learning
                the engine."
              </Heading>
              <Paragraph
                color="111"
                margin="none"
                style={{ marginTop: "10px", maxWidth: "100%" }}
              >
                So, I have decided to use Godot engine for my first game. I do
                intend to make either an isometric or 2D game first. Because of
                this need, the Godot engine is more suitable than Unity for my
                current needs. Also, its compiling language is very similar to
                Python. That helps because I am rusty with my C#.
              </Paragraph>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}

export default GameDev;
