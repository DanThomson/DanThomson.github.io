// TODO: fix security issue from using innerHTML
import katex from "katex";

// Radians * (180 / Math.PI) = degrees
const rtod = 180 / Math.PI;
// Degrees * (Math.PI / 180) = radians
const dtor = Math.PI / 180;


document.querySelector("#figure").addEventListener("mousemove", mousemove);

let hypo_line = document.querySelector("line#hypo-line");
let mouse_line = document.querySelector("line#mouse-line");
let base_line = document.querySelector("line#base-line");

let vertex_point = document.querySelector("#vertex-point");
let x_axis_point = document.querySelector("#x-axis-point");

let TeX = document.querySelector("#TeX");
let screenLog = document.querySelector("#screen-log");


function offsetToGraph(x, y) {
  return [(x - 150), -(y - 150)];
}


function mousemove(e) {
  let graphX, graphY;
  let rest;

  [graphX, graphY, ...rest] = offsetToGraph(e.offsetX, e.offsetY);

  let vecL = Math.hypot(graphX, graphY); // vector Length

  let X = graphX/vecL;
  let Y = graphY/vecL;


  // Updates to lines and points on unit circle graph
  base_line.x2.baseVal.value = graphX > 0 ? 100 : -100;

  mouse_line.x2.baseVal.value = X * 100;
  mouse_line.y2.baseVal.value = Y * 100;

  vertex_point.x.baseVal.value = X * 100;
  vertex_point.y.baseVal.value = Y * 100;

  x_axis_point.x.baseVal.value = X * 100;

  hypo_line.x1.baseVal.value = X * 100;
  hypo_line.x2.baseVal.value = X * 100;
  hypo_line.y2.baseVal.value = Y * 100;


  // Math equations
  let tex = String.raw`
    \sin^2(\theta) + \cos^2(\theta) = 1 \\
    (\sin(${(Math.asin(Y) * rtod).toFixed()}))^2 + (\cos(${(Math.acos(X) * rtod).toFixed()}))^2 = 1 \\
    (${Y.toFixed(2)})^2 + (${X.toFixed(2)})^2 = 1 \\
    (${(Y**2).toFixed(2)}) + (${(X**2).toFixed(2)}) = 1
  `;
  // TeX.setHTML(katex.renderToString(tex));
  TeX.innerHTML = katex.renderToString(tex);


  // Log below unit circle graph
  screenLog.innerText = `
    Mouse  X/Y: ${graphX.toFixed(2)/100}, ${graphY.toFixed(2)/100}
    Circle X/Y: ${X.toFixed(2)}, ${Y.toFixed(2)}

    ArcSin: ${Math.asin(Y).toFixed(2)}, ${(Math.asin(Y) * rtod).toFixed()}
    ArcCos: ${Math.acos(X).toFixed(2)}, ${(Math.acos(X) * rtod).toFixed()}
    ArcTan: ${Math.atan(Y/X).toFixed(2)}, ${(Math.atan(Y/X) * rtod).toFixed()}
  `;
}
