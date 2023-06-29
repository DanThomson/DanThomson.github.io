// How to use staticTeX.mjs
//
// To your css links add the following line
//     <link href="/math/css/staticTeX.css" rel="stylesheet">
//
// To your javascripts add the following
//     <script src="/math/mjs/staticTeX.mjs" type="module" defer></script>
//
// Create a div  with class staticTeX
//   <div class="staticTeX padded">
// Within that div include a span with class origTeX.
// Put your LaTeX code inside that span.
//     <span class="origTeX"> d(\,u(x) \cdot v(x)\,) = v \cdot du + u\cdot dv</span
//   </div>
//
// This file will add a child span, which contains the KaTeX output, to the staticTeX div.


// Imports like the following did not work consistently on Lainie's computer
// import katex from 'katex';
import katex from 'https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/katex.mjs';


document.querySelectorAll('.staticTeX').forEach(
  el => {
    el.querySelectorAll('span.origTeX').forEach(
      span => {
        let outputTeX = document.createElement('span');
        katex.render(span.innerText, outputTeX, {});
        span.after(outputTeX);
      }
    )
  }
);
