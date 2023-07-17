// Top level turtle graphics module

import movement from 'movement';
import controls from 'controls';


// Radians * (180 / Math.PI) = degrees
const rtod = 180 / Math.PI;
// Degrees * (Math.PI / 180) = radians
const dtor = Math.PI / 180;


let turtle_path = document.querySelector('#turtle_path');


// Inital state
let forward_increment = 10;
let turtle_direction = Math.PI / 2;  // Start facing up


movement.step_forward(turtle_path, turtle_direction, forward_increment);
