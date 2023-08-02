function step_forward(turtle_direction, step_length) {
  let dy = step_length * Math.sin(turtle_direction);
  let dx = step_length * Math.cos(turtle_direction);

  return [dx, dy];
}


function createPath(turtle_commands, step_length, turn_angle) {
  let path = [];
  let turtle_direction = -Math.PI / 2;  // Start facing up

  // F -> step_forward
  // R -> Right -> step_forward. In the book this is F_r
  // L -> Left -> step_forward. In the book this is F_l
  const forward = ['F', 'R', 'L'];

  for (let c of turtle_commands) {
    if (c === '-') {
      // - -> turn right
      turtle_direction -= turn_angle;
    } else if (c === '+') {
      // + -> turn left
      turtle_direction += turn_angle;
    } else if (forward.includes(c)) {
      path.push(step_forward(turtle_direction, step_length));
    } else {
      // Report bad character!
      console.log('Unknown character in turtle_commands string:');
      console.log(c);
      console.log('Found in:');
      console.log(turtle_commands);
    }
  }

  return path;
}


const name_space = { createPath };
export default name_space;
