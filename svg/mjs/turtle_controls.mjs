// Get controls
// Set listeners

// Radians * (180 / Math.PI) = degrees
const rtod = 180 / Math.PI;  // Not currently used
// Degrees * (Math.PI / 180) = radians
const dtor = Math.PI / 180;


const controls_node = document.querySelector('#controls');
const update_c = controls_node.querySelector('#update');


const gen_count_c = controls_node.querySelector('#gen_count');
function get_gen_count () {
  return Number(gen_count_c.value);
}


const step_length_c = controls_node.querySelector('#step_length');
function get_step_length () {
  return Number(step_length_c.value);
}


const turn_angle_c = controls_node.querySelector('#turn_angle');
function get_turn_angle () {
  return Number(turn_angle_c.value) * dtor;
}


const initial_phrase_c = controls_node.querySelector('#initial_phrase');
function get_initial_phrase () {
  return initial_phrase_c.value;
}


const f_replacement_c = controls_node.querySelector('#f_replacement');
function get_f_replacement () {
  return f_replacement_c.value;
}


const figures = document.querySelector('#figures');
function get_figures () {
  return Array.prototype.slice.call( figures.children );
}


gen_count_c.addEventListener('change',
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


// Generic update event. This must come after the update for
// gen_count because that event creates and destroys html elements
// which will be the target of code that reacts to a control's
// update. When a control is updated we simulate update_c.click,
// so dependent code can react to any control's change by adding a
// click event handler to update_c.
function onEvent (e) {
  update_c.click();
}
const controls = [gen_count_c, step_length_c, turn_angle_c, initial_phrase_c, f_replacement_c];
controls.forEach(
  control => {
    control.addEventListener('change', onEvent);
  }
);


const name_space = {
  update_c,
  get_figures,
  get_gen_count,
  get_step_length,
  get_turn_angle,
  get_initial_phrase,
  get_f_replacement,
};
export default name_space;
