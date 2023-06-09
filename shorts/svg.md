---
title: Sample of svg
permalink: /shorts/svg
---


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


<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
  <ellipse
      cx="136.275" cy="188.725"
      rx="50" ry="30"
      stroke="red" stroke-width="5"
      fill="transparent"
  />
</svg>
