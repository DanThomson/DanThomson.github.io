// svg/funcs
// Created to experiment with javascript modules


// degrees * Math.PI / 180 = radians
// radians * 180  / Math.PI = degrees

const rtod = 180  / Math.PI;
const dtor = Math.PI / 180;


function offsetToGraph(x, y) {
  return [(x - 150), -(y - 150)];
}


export { offsetToGraph, rtod, dtor };
