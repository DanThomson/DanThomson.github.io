
// right_turn
// turtle_direction += Math.PI / 2;  // Later on we will generalize turns with a variable direction
// left_turn
// turtle_direction -= Math.PI / 2;


function step_forward(turtle_path, turtle_direction, forward_increment){
  // One step forward

  let path_d = turtle_path.getAttribute('d');
  let dy, dx;

  dy = forward_increment * Math.sin(turtle_direction);
  dx = forward_increment * Math.cos(turtle_direction);

  path_d += `l ${dx} ${dy} `;
  turtle_path.setAttribute('d', path_d);
}


const movement_ns = { step_forward };
export default movement_ns;
