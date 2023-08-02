
// Degrees * (Math.PI / 180) = radians
const dtor = Math.PI / 180;


const controls_node = document.querySelector('#controls');
const update_c = controls_node.querySelector('#update');


// Functions to get values from controls

const gen_count_c = controls_node.querySelector('#gen_count');
const get_gen_count = () => Number(gen_count_c.value);

const step_length_c = controls_node.querySelector('#step_length');
const get_step_length = () => Number(step_length_c.value);

const turn_angle_c = controls_node.querySelector('#turn_angle');
const get_turn_angle = () => Number(turn_angle_c.value) * dtor;

const initial_phrase_c = controls_node.querySelector('#initial_phrase');
const get_initial_phrase = () => initial_phrase_c.value;

const f_replacement_c = controls_node.querySelector('#f_replacement');
const get_f_replacement = () => f_replacement_c.value;

const r_replacement_c = controls_node.querySelector('#r_replacement');
const get_r_replacement = () => r_replacement_c.value;

const l_replacement_c = controls_node.querySelector('#l_replacement');
const get_l_replacement = () => l_replacement_c.value;

const figures = document.querySelector('#figures');
const get_figures = () => Array.prototype.slice.call(figures.children);


// Event listeners

gen_count_c.addEventListener(
  'change',
  change_event => {
    const count = change_event.srcElement.value;
    // TODO: validation

    // Adjust generation count
    if (figures.childElementCount < count) {
      // We need more figures
      const first = figures.children[0];
      for (let i=figures.childElementCount; i<count; i++) {
        let clone = first.cloneNode(true);
        figures.appendChild(clone);
      }

    } else if (figures.childElementCount > count) {
      // We have too many figures
      let remove_these = Array.prototype.slice.call(
        figures.children,
        count,  // Start of figures to be removed
        figures.childElementCount,  // End of figures
      );
      remove_these.forEach(el => figures.removeChild(el));
    }
  },
);


// Generic update event. When a control is updated we simulate
// update_c.click, so dependent code can react to any control's
// change by adding a click event handler to update_c.
//
// This must come after the update for gen_count because that
// event creates and destroys html elements which will be the
// target of code that reacts to a control's update.
function onEvent (e) { update_c.click(); }

[  // List of controls which call update_c.click when they change.
  gen_count_c,
  step_length_c,
  turn_angle_c,
  initial_phrase_c,
  f_replacement_c,
  r_replacement_c,
  l_replacement_c,
].forEach(control => control.addEventListener('change', onEvent));


const name_space = {
  update_c,
  get_figures,
  get_gen_count,
  get_step_length,
  get_turn_angle,
  get_initial_phrase,
  get_f_replacement,
  get_r_replacement,
  get_l_replacement,
  gen_count_c,
};
export default name_space;
