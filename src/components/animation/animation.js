import React, { Component } from "react";
const lines = [];
const colors = [["#01051A", "#178EDE"]];

var colorIndex = -1;

var step = 0,
  width = 0,
  height = 0;

var context;
var canvas;

class AnimationBackground extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    canvas = this.canvasRef.current;
    this.setup();
    this.color();
    context = this.canvasRef.current.getContext("2d");
    this.update();
  }

  setup() {
    width = window.innerWidth;
    height = this.props.short ? 400 : window.innerHeight;

    lines.length = 0;

    let lineCount = height / 52;
    let pointCount = 49.3;
    let spacingH = width / pointCount * 1;
    let spacingV = height / lineCount;

    for (let v = 0; v < lineCount; v++) {
      let line = { points: [], ran: 0.2 + Math.random() * 0.7 };

      for (let h = 0; h < pointCount; h++) {
        line.points.push({
          nx: h * spacingH,
          ny: v * spacingV
        });
      }

      line.points.push({
        nx: width + spacingH,
        ny: v * spacingV
      });

      lines.push(line);
    }
  }

  color() {
    colorIndex = ++colorIndex % colors.length;
    canvas.style.backgroundColor = colors[colorIndex][0];
  }

  update() {
    step += 0.8;
    canvas.width = width;
    canvas.height = height;

    context.clearRect(0, 0, width, height);

    context.lineWidth = 3;
    context.strokeStyle = colors[colorIndex][1];
    context.fillStyle = colors[colorIndex][0];

    lines.forEach((line, v) => {
      context.beginPath();

      line.points.forEach((point, h) => {
        point.x = point.nx;
        point.y =
          point.ny +
          Math.sin((point.x * line.ran + (step + point.ny)) / 35) *
            (6 + (point.ny / height) * 34);
      });

      line.points.forEach((point, h) => {
        let nextPoint = line.points[h + 1];

        if (h === 0) {
          context.moveTo(point.x, point.y);
        } else if (nextPoint) {
          let cpx = point.x + (nextPoint.x - point.x) / 2;
          let cpy = point.y + (nextPoint.y - point.y) / 2;
          context.quadraticCurveTo(point.x, point.y, cpx, cpy);
        }
      });

      context.stroke();

      context.lineTo(width, height);
      context.lineTo(0, height);
      context.closePath();
      context.fill();
    });

    window.requestAnimationFrame(a => this.update(a));
  }

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        className="backgroundAnimation"
        style={this.props.short ? { height: "400px" } : {}}
      />
    );
  }
}

export default AnimationBackground;
