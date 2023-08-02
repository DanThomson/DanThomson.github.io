// Top level turtle graphics module

import controls from 'controls';
import movement from 'movement';


function rewrite_commands(turtle_commands, replacements) {

  // Rewrite is done in two steps.
  // First: Replace uppercase letters with lowercase strings.
  // Second: Make all letters uppercase.
  // This two step process allows us to use multiple replaceAll.
  // If this wasn't done in two steps we'd mistakenly replace
  // newly written portions of our string.

  replacements.forEach(
    rep => turtle_commands = turtle_commands.replaceAll(...rep)
  );
  return turtle_commands.toUpperCase()
}


const reF = /F/g;
const reR = /R/g;
const reL = /L/g;
const get_replacement = () => [
  [reF, controls.get_f_replacement()],
  [reR, controls.get_r_replacement()],
  [reL, controls.get_l_replacement()],
];


function drawPath(turtle_path, path, x, y) {
  let path_d = `M ${x} ${y} l `;  // Start at x, y, then lineto releative coordinate pairs
  path_d += path;
  turtle_path.setAttribute('d', path_d);
}


// Add listener to update button to perform the update when the button is 'clicked'
controls.update_c.addEventListener(
  'click',
  e => {
    const replacements = get_replacement();
    const step_length = controls.get_step_length();
    const turn_angle = controls.get_turn_angle();

    let turtle_commands = controls.get_initial_phrase();
    controls.get_figures().forEach(
      figure => {
        turtle_commands = rewrite_commands(turtle_commands, replacements);

        // TODO: Update the following so text wraps
        // figure.querySelector('.turtle_commands').textContent = turtle_commands;

        const turtle_path = figure.querySelector('.turtle_path');
        let path = movement.createPath(turtle_commands, step_length, turn_angle);

        let path_s = '';
        let sum_x = 0;
        let sum_y = 0;
        path.forEach(
          point => {
            sum_x += point[0];
            sum_y += point[1];
            path_s += `${point[0]} ${point[1]} `;
          }
        );

        // console.log(sum_x, sum_y);
        // console.log(figure.width.baseVal.value);
        // console.log(figure.height.baseVal.value);
        // console.log(figure.viewBox);
        // console.log(figure.viewBox.baseVal);
        // console.log(figure.viewBox.baseVal.height);
        // console.log(figure.viewBox.baseVal.width);

        let x = turtle_commands[0] === 'R' ? 10 : 1190;
        let y = Math.abs(Math.round(sum_y)) * 2 + 20;

        figure.height.baseVal.value = y;
        figure.viewBox.baseVal.height = y;

        y -= 10;
        drawPath(turtle_path, path_s, x, y);
      }
    );
  }
);


// Force a change event on gen_count_c, so the number of figures will be updated.
var event = new Event('change');
controls.gen_count_c.dispatchEvent(event);
