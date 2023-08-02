// Top level turtle graphics module

import controls from 'controls';
// import movement from 'movement';

const reF = /F/g;
const reR = /R/g;
const reL = /L/g;

function step_forward(path_d, turtle_direction, step_length) {
  let dy, dx;

  dy = Math.round(step_length * Math.sin(turtle_direction));
  dx = Math.round(step_length * Math.cos(turtle_direction));

  return `${dx} ${dy} `;
}


function drawPath (turtle_path, commands) {
  const step_length = controls.get_step_length();
  const turn_angle = controls.get_turn_angle();

  // TODO: create controls for x & y parameters
  let x = 600;  // const x = controls.get_x();
  let y = 300;  // const y = controls.get_y();
  let path_d = `M ${x} ${y} l `;  // Start in top left corner
  let turtle_direction = Math.PI / 2;  // Start facing down

  for (let c of commands) {
    if (c === '-') {
      // - -> turn right
      turtle_direction -= turn_angle;
    } else if (c === '+') {
      // + -> turn left
      turtle_direction += turn_angle;
    } else if (c === 'F') {
      // F -> step_forward
      path_d += step_forward(path_d, turtle_direction, step_length);
    } else if (c === 'R') {
      // R -> Right -> step_forward
      path_d += step_forward(path_d, turtle_direction, step_length);
    } else if (c === 'L') {
      // L -> Left -> step_forward
      path_d += step_forward(path_d, turtle_direction, step_length);
    } else {
      // Report bad character!
      console.log('Unknown character in commands string:');
      console.log(c);
      console.log('Found in:');
      console.log(commands);
    }
  }

  turtle_path.setAttribute('d', path_d);
}


function rewrite_commands (commands, f_replacement, r_replacement, l_replacement) {
  if (commands === '') {
    return controls.get_initial_phrase();
  }
  // Rewrite is done in two steps
  // First step replaces uppercase letters with lowercase strings
  // Second step is to make all letters uppercase.
  // This two step process allows us to use multiple replaceAll.
  // If this wasn't done in two steps we'd mistakenly replace
  // newly written portions of our string.
  commands = commands.replaceAll(reF, f_replacement)
  commands = commands.replaceAll(reR, r_replacement)
  commands = commands.replaceAll(reL, l_replacement)
  return commands.toUpperCase()
}


// Add listener to update button to perform the update when the button is 'clicked'
controls.update_c.addEventListener(
  'click',
  e => {
    const f_replacement = controls.get_f_replacement();
    const r_replacement = controls.get_r_replacement();
    const l_replacement = controls.get_l_replacement();
    let commands = '';
    controls.get_figures().forEach(
      (figure) => {
        const turtle_path = figure.querySelector('.turtle_path');
        commands = rewrite_commands(commands, f_replacement, r_replacement, l_replacement);
        drawPath(turtle_path, commands);
      }
    );
  }
);
