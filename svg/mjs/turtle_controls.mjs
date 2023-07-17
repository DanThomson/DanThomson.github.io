// Get controls
// Set listeners



const controls_node = document.querySelector('#controls');
const gen_count = controls_node.querySelector('#gen_count');
gen_count.focus();  // for debugging / testing I want the focus there

const step_length = controls_node.querySelector('#step_length');
const initial_phrase = controls_node.querySelector('#initial_phrase');
const f_replacement = controls_node.querySelector('#f_replacement');
// let x = controls_node.querySelector('x')


const figures = document.querySelector('#figures');
document.figures = figures;

gen_count.addEventListener('change',
  change_event => {
    const count = change_event.srcElement.value;
    // TODO: validation

    // Adjust generation count
    if (figures.childElementCount < count) {
      // We need more figures
      const first = figures.children[0];
      for (let i=figures.childElementCount; i<count; i++) {
        let clone = first.cloneNode(true);
        // update clone or something
        // New elements will need their path.d updated
        figures.appendChild(clone);
      }
    } else if (figures.childElementCount > count) {
      // We have too many figures
      let remove_these = Array.prototype.slice.call(
        figures.children,
        count,
        figures.childElementCount,
      );
      remove_these.forEach(el => { figures.removeChild(el); });
    }
  },
);



const name_space = {  };
export default name_space;
