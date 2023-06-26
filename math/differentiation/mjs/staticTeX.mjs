// TODO: fix security issue from using innerHTML
// import katex from 'katex';
import katex from 'https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/katex.mjs';

document.querySelectorAll('.staticTeX').forEach(
  el => {
    let origTeX = el.querySelector('span.origTeX');
    let outputTeX = document.createElement('div');
    console.log(origTeX);
    console.log();
    console.log(outputTeX);


    outputTeX.className = 'TeXbox';
    // outputTeX.setHTML(katex.renderToString(origTeX.innerText));
    outputTeX.innerHTML = katex.renderToString(origTeX.innerText);
    el.appendChild(outputTeX);
  }
);
