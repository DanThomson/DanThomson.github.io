// TODO: fix security issue from using innerHTML
// import katex from 'katex';
import katex from 'https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/katex.mjs';

// import {link_io_pair} from 'io_pair';
import {link_io_pair} from '/math/differentiation/mjs/io_pair.mjs';


document.querySelectorAll('.inode').forEach(
  inode => {
    let inode_out = document.querySelector('#' + inode.name + '_out');
    let inode_errors = document.querySelector('#' + inode.name + '_errors');

    link_io_pair(inode, inode_out, inode_errors);
  }
);


// Product rule with values for u, v, etc.
let ux = document.querySelector('#ux');
let vx = document.querySelector('#vx');
let dux = document.querySelector('#dux');
let dvx = document.querySelector('#dvx');

[ ux, vx, dux, dvx ].forEach(
  oNode => {
    oNode.addEventListener('change',
      change_event => { // Update product rule expanded
        if ( ux.value && vx.value && dux.value && dvx.value ) {
          let chainrule = document.querySelector('#chainrule');
          let chainrule_TeX = String.raw`
            d(u \cdot v) =  d(${ux.value} \cdot ${vx.value})=
            ${vx.value} \cdot ${dux.value} + ${ux.value} \cdot ${dvx.value}
          `;
          // chainrule.setHTML(katex.renderToString(chainrule_TeX));
          chainrule.innerHTML = katex.renderToString(chainrule_TeX);
        };
      }
    );
  }
);
