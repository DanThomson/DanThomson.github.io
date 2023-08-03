---
title: water tank optimization
permalink: /math/ch4/water_tank_optimization
---
{% include MathJax %}


A water tank with an open top and a square base designed to hold 13.5 cubic feet of water. What is the minimum exterior surface area of the aquarium.

I'm presuming the surface area the question is asking about is the four sides plus the bottom.



$$
V = s^2 \cdot h
$$

$$
13.5 = s^2 \cdot h
$$

$$
h = {13.5 \over s^2}
$$

$$
A = s^2 + 4 \cdot s\cdot h
$$

Replace h with value from above

$$
A = s^2 + 4 \cdot s\cdot {13.5 \over s^2}
$$

Cancel out one power of s

$$
A = s^2 + 4 \cdot {13.5 \over s}
$$

Multiply 4 and 13.5

$$
A = s^2 + {54 \over s}
$$

Convert to exponent notation

$$
A = s^2 + 54 \cdot s^{-1}
$$


$$
dA = 2 \cdot s \cdot ds - 54 \cdot s^{-2} \cdot ds
$$

I'm not sure if this will get you to a solution. I'll look at this again tomorrow.

$$
{dA \over ds }= 2 \cdot s - 54 \cdot s^{-2}
$$
