// Static LaTeX
import katex from "katex"


document.querySelectorAll(".staticTeX").forEach(
  el => {
    let origTeX = el.querySelector("span.origTeX");
    let outputTeX = document.createElement("div");
    outputTeX.className = "TeXbox";
    outputTeX.setHTML(katex.renderToString(origTeX.innerText));
    el.appendChild(outputTeX);
  }
);
