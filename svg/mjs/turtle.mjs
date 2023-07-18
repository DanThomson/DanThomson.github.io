// Top level turtle graphics module

import controls from 'controls';
// import movement from 'movement';


function step_forward(path_d, turtle_direction, step_length){
  let dy, dx;

  dy = Math.round(step_length * Math.sin(turtle_direction));
  dx = Math.round(step_length * Math.cos(turtle_direction));

  return `${dx} ${dy} `;
}


function drawPath (turtle_path, commands) {
  const step_length = controls.get_step_length();
  const turn_angle = controls.get_turn_angle();
  let path_d = 'M 5 5 l ';  // Start in top left corner
  let turtle_direction = Math.PI / 2;  // Start facing down

  for (let c of commands) {
    if (c === 'F') {
      // F -> step_forward
      path_d += step_forward(path_d, turtle_direction, step_length);
    } else if (c === '-') {
      // - -> turn right
      turtle_direction -= turn_angle;
    } else if (c === '+') {
      // + -> turn left
      turtle_direction += turn_angle;
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


function rewrite_commands (commands, f_replacement) {
  if (commands === '') {
    return controls.get_initial_phrase();
  }
  const re = /F/g;
  return commands.replaceAll(re, f_replacement)
}


// Add listener to update button to perform the update when the button is 'clicked'
controls.update_c.addEventListener(
  'click',
  e => {
    const f_replacement = controls.get_f_replacement();
    let commands = '';
    controls.get_figures().forEach(
      (figure) => {
        const turtle_path = figure.querySelector('.turtle_path');
        commands = rewrite_commands(commands, f_replacement);
        drawPath(turtle_path, commands);
      }
    );
  }
);
