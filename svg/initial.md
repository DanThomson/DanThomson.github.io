---
title: Sample of svg
permalink: /svg/initial
---
{% include math.html %}


#### Matrix transformations
* Current coordinates are treated as a column vector $$\left[\begin{matrix} x \\ y \\ 1\end{matrix}\right]$$

* The transform attribute string can contain `matrix(a b c d e f)`

* New coordinate is
<!-- $$\begin{equation}$$ -->
$$\left[\begin{matrix} a & c & e \\ b & d & f \\ 0 & 0 & 1\end{matrix}\right]\cdot$$
$$\left[\begin{matrix} x \\ y \\ 1\end{matrix}\right] = $$
$$\left[\begin{matrix} ax + cy + e \\ bx + dy + f \\ 1\end{matrix}\right]$$
<!-- $$\end{equation}$$ -->


<!-- Do not use xlink; Do not use DTD -->
<!-- <svg xmlns="http://www.w3.org/2000/svg" xmlns:ev="http://www.w3.org/2001/xml-events"> -->
<!--                a x's effect on x              -->
<!--                b x's effect on y              -->
<!--                c y's effect on x              -->
<!--                d y's effect on y              -->
<!--                e constant effect on x         -->
<!--                f constant effect on y         -->



<svg width="300" height="200" style="background-color:#acc;">
    <circle cx="0" cy="0" r="2" fill="red" />
    <g fill="white" stroke="green" transform="matrix(1 0 0 1 150 100) matrix(1 0 0 -1 0 0)">
        <circle cx="0" cy="0" r="2" fill="green" />
        <line x1="0" x2="150" y1="0" y2="0" stroke="orange" stroke-width="2"/>
        <line x1="0" x2="0" y1="0" y2="100" stroke="orange" stroke-width="2"/>
        <circle cx="0" cy="0" r="100" fill="none" stroke="black"/>
    </g>
</svg>


<!-- <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> -->
<!--   <rect width="100%" height="100%" fill="#404040" /> -->
<!--   <circle cx="150" cy="100" r="80" fill="green" /> -->
<!--   <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text> -->
<!--   <rect x="0" y="0" width="100" height="100" /> -->
<!-- </svg> -->
<!-- <div style="padding:32"><hr></div> -->

<!-- <svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg"> -->
<!--   <rect width="100%" height="100%" fill="#404040" /> -->
<!-- </svg> -->


<svg width="200" height="250" version="2" xmlns="http://www.w3.org/2000/svg">
  <!-- rect -->
  <rect x="10" y="10" width="30" height="30" fill="transparent" stroke="black" stroke-width="5"/>
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="transparent" stroke="black" stroke-width="5"/>

  <!-- circle -->
  <circle cx="25" cy="75" r="20" fill="transparent" stroke="red" stroke-width="5"/>

  <!-- ellipse -->
  <ellipse cx="75" cy="75" rx="20" ry="5" fill="transparent" stroke="red" stroke-width="5"/>

  <!-- line -->
  <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>

  <!-- polyline -->
  <polyline
      points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      fill="transparent" stroke="orange" stroke-width="5"
  />

  <!-- polygon -->
  <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      fill="transparent" stroke="green" stroke-width="5"/>

  <!-- path -->
  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg>


<hr>


<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <!-- M moves the path to desired point -->
  <!-- m moves relative current location -->
  <!-- L line to -->
  <!-- l relative line to -->
  <!-- H draws a horizontal line -->
  <!-- V drawas a vertical line -->

  <path d="M 10 10 H 90 V 90 H 10 L 10 10"/>

  <!-- Use Z to close the path by "line to" starting point -->
  <!-- <path d="M 10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/> -->

  <!-- Points -->
  <circle cx="10" cy="10" r="2" fill="red"/>
  <circle cx="90" cy="90" r="2" fill="red"/>
  <circle cx="90" cy="10" r="2" fill="red"/>
  <circle cx="10" cy="90" r="2" fill="red"/>
</svg>


<hr>


<!-- Two types of bezier curves: -->
<!-- Cubic and Quadratic -->

<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <!-- Cubic C/c -->
  <!-- C x1 y1, x2 y2, x y -->
  <!-- (or) -->
  <!-- c dx1 dy1, dx2 dy2, dx dy -->

  <path d="M 10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent"/>
  <path d="M 70 10 C 70 20, 110 20, 110 10" stroke="black" fill="transparent"/>
  <path d="M 130 10 C 120 20, 180 20, 170 10" stroke="black" fill="transparent"/>
  <path d="M 10 60 C 20 80, 40 80, 50 60" stroke="black" fill="transparent"/>
  <path d="M 70 60 C 70 80, 110 80, 110 60" stroke="black" fill="transparent"/>
  <path d="M 130 60 C 120 80, 180 80, 170 60" stroke="black" fill="transparent"/>
  <path d="M 10 110 C 20 140, 40 140, 50 110" stroke="black" fill="transparent"/>
  <path d="M 70 110 C 70 140, 110 140, 110 110" stroke="black" fill="transparent"/>
  <path d="M 130 110 C 120 140, 180 140, 170 110" stroke="black" fill="transparent"/>
</svg>


<hr>


<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <!-- Smooth shapes are created by stringing together several cubic -->
  <!-- beziers with S/s -->
  <!-- S x2 y2, x y -->
  <!-- (or) -->
  <!-- s dx2 dy2, dx dy -->
  <!-- Example: -->
  <path d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
</svg>


<hr>


<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <!-- Quadratic Q -->
  <!-- Q, requires two points, a control point and an end point -->
  <!-- The control point determines the slope at the start point and -->
  <!-- the endpoint -->
  <!-- With q both points are relative to the implicit start point -->
  <path d="M 10 80 Q 95 10 180 80" stroke="black" fill="transparent"/>
</svg>


<hr>


<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <!-- As with the cubic Bézier curve, there is a shortcut for stringing -->
  <!-- together multiple quadratic Béziers, called with T. -->
  <!-- T x y -->
  <!-- (or) -->
  <!-- t dx dy -->
  <path d="M 10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent"/>
</svg>



<hr>


<svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">
  <!-- Arcs -->
  <!-- A rx ry x-axis-rotation large-arc-flag sweep-flag x y -->
  <!-- a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy -->
  <!-- x-axis-rotation positive is clockwise -->
  <path
      d="
          M 10 315
          L 110 215
          A 30 50 -90 0 1 162.55 162.45
          L 172.55 152.45
          A 30 50 -45 0 1 215.1 109.9
          L 315 10
      "
      stroke="black"
      stroke-width="2"
      fill="green"
      fill-opacity="0.5"
  />
  <ellipse cx="136.275" cy="188.725" rx="50" ry="30" stroke="red" stroke-width="5" fill="transparent" />
</svg>


<hr>


<svg width="325" height="325" xmlns="http://www.w3.org/2000/svg">

  <!-- large-arc-flag: 0 == smaller arc, 1 == large arc -->
  <!-- Sweep: 0 == counter-clockwise, 1 == clockwise -->
  <!--     A rx ry x-axis-rotation large-arc-flag sweep-flag x   y -->
  <path d="M 80 80
           A 45 45, 0,             0,             0,         125 125
           L 125 80 Z" fill="green"/>
  <path d="M 230 80
           A 45 45, 0,             1,             0,         275 125
           L 275 80 Z" fill="red"/>
  <path d="M 80 230
           A 45 45, 0,             0,             1,         125 275
           L 125 230 Z" fill="purple"/>
  <path d="M 230 230
           A 45 45, 0,             1,             1,         275 275
           L 275 230 Z" fill="blue"/>
</svg>


<hr>


<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
  <path id="my_path" d="M 20,20 C 80,60 100,40 120,20" fill="transparent" stroke="black"/>
  <text>
    <textPath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#my_path">
      A curve.
    </textPath>
  </text>
  <!-- dominant-baseline can be auto, middle or hanging -->
  <style>
    <![CDATA[
      text{
        dominant-baseline: middle;
        font: 28px Verdana, Helvetica, Arial, sans-serif;
      }
    ]]>
  </style>
</svg>


<hr>

### Transformations!
All set with the `transform` presentation attribute

#### Translate$(x, y)$

<svg width="40" height="50" style="background-color:#bff;">
  <rect x="0" y="0" width="10" height="10" transform="translate(20,30)" />
</svg>

<hr>

#### Rotate$(\theta)$

<svg width="31" height="31">
  <rect x="12" y="-10" width="20" height="20" transform="rotate(45)" />
</svg>

<hr>


<svg width="40" height="50" style="background-color:#bff;">
  <rect
    x="0"
    y="0"
    width="10"
    height="10"
    transform="rotate(45) translate(30,40)"
  />
</svg>


<hr>


#### Scaling$(sx\ sy)$
Two numbers between 0 and 1. If only one number is given, it is
used for both scaling factors.
