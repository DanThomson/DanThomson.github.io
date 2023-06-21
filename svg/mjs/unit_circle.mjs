// TODO: Rename this something other than mouse

// These don't need to be in a separate file. I put them there
// because I just learned modules finally work!
import { offsetToGraph, vecLength } from "funcs";


let figure = document.querySelector("#figure");
figure.addEventListener("mousemove", logKey);

let hypo_line = document.querySelector("line#hypo-line");
let mouse_line = document.querySelector("line#mouse-line");
let base_line = document.querySelector("line#base-line");

let vertex_point = document.querySelector("#vertex-point");
let x_axis_point = document.querySelector("#x-axis-point");

let screenLog = document.querySelector("#screen-log");


let graphX, graphY;
let rest;

function logKey(e) {
  [graphX, graphY, ...rest] = offsetToGraph(e.offsetX, e.offsetY);
  let vecL = Math.hypot(graphX, graphY);

  screenLog.innerText = `
    Mouse  X/Y: ${graphX.toFixed(2)/100}, ${graphY.toFixed(2)/100}
    Circle X/Y: ${(graphX/vecL).toFixed(2)}, ${(graphY/vecL).toFixed(2)}
  `;

  base_line.x2.baseVal.value = graphX > 0 ? 150 : -150;

  mouse_line.x2.baseVal.value = graphX;
  mouse_line.y2.baseVal.value = graphY;

  vertex_point.x.baseVal.value = (graphX/vecL) * 100;
  vertex_point.y.baseVal.value = (graphY/vecL) * 100;

  x_axis_point.x.baseVal.value = (graphX/vecL) * 100;

  hypo_line.x1.baseVal.value = (graphX/vecL) * 100;
  hypo_line.x2.baseVal.value = (graphX/vecL) * 100;
  hypo_line.y2.baseVal.value = (graphY/vecL) * 100;
}
