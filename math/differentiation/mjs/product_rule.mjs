import katex from "katex";
import {link_io_pair} from "io_pair";


document.querySelectorAll(".inode").forEach(
  inode => {
    let inode_out = document.querySelector("#" + inode.name + "_out");
    let inode_errors = document.querySelector("#" + inode.name + "_errors");

    link_io_pair(inode, inode_out, inode_errors);
  }
);


// Product rule with values for u, v, etc.
let ux = document.querySelector("#ux");
let vx = document.querySelector("#vx");
let dux = document.querySelector("#dux");
let dvx = document.querySelector("#dvx");

[ ux, vx, dux, dvx ].forEach(
  oNode => {
    oNode.addEventListener("change",
      change_event => { // Update product rule expanded
        if ( ux.value && vx.value && dux.value && dvx.value ) {
          let chainrule = document.querySelector("#chainrule");
          let chainrule_TeX = String.raw`
            d(u \cdot v) =  d(${ux.value} \cdot ${vx.value})=
            ${dux.value} \cdot ${vx.value} + ${ux.value} \cdot ${dvx.value}
          `;
          chainrule.setHTML(katex.renderToString(chainrule_TeX));
        };
      }
    );
  }
);
