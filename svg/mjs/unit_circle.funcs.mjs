// svg/funcs
// Created to experiment with javascript modules


function offsetToGraph(x, y) {
    return [(x - 150), -(y - 150)];
}


function vecLength(x, y) {
    return Math.sqrt(x**2 + y**2);
}

export { offsetToGraph, vecLength };
