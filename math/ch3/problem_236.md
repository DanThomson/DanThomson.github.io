---
title:  Problem 236
permalink: /math/ch3/problem_236
---
{% include MathJax %}

$$\begin{array}{llcr}
    y &=& \sqrt{6 + \sec \left(\pi \cdot x^2\right)} \\
 &=& \left(6 + \sec \left(\pi \cdot x^2\right)\right)^{1 \over 2} \\[2ex]
  &=& \left(\underbrace{6 + \sec \left(\pi \cdot x^2\right)}_{=u}\right)^{1 \over 2} & = u^{1 \over 2} \\[2ex]
  &=& ( \underbrace{6 + \sec (\pi \cdot x^2)}_{=u} )^{1 \over 2} & = u^{1 \over 2} \\[2ex]
    {dy \over du} &= & {1 \over 2} u^{-{1 \over 2}}
\end{array}$$

<hr>

$$\begin{array}{c}
    u & = & 6 & + & \sec &\underbrace{\left(\pi \cdot x^2 \right)}_{=v} \\
    u & = & 6 & + & \sec & (v)
\end{array}$$

<hr>

$$\begin{array}{c}
            v &= & &\pi &\cdot& x^2 \\
{dv \over dx} &= &2&\pi &\cdot& x \\
\end{array}$$

<hr>

$${du \over dx} = (2\pi \cdot x)\tan(\pi \cdot x^2) \cdot \sec(\pi \cdot x^2)$$


$${dy \over du} = {1 \over 2}(u)^{-1/2}$$

$$\begin{align}
{dy \over dx} &= ((2\pi \cdot x)\tan(\pi \cdot x^2) \cdot \sec(\pi \cdot x^2))({1 \over 2}(6 + \sec(\pi\cdot x^2))^{-1/2}) \\
{dy \over dx} &= {1 \over 2}((2\pi \cdot x)\tan(\pi \cdot x^2) \cdot \sec(\pi \cdot x^2))((6 + \sec(\pi\cdot x^2))^{-1/2}) \\
{dy \over dx} &= \pi \cdot x\tan(\pi \cdot x^2) \cdot \sec(\pi \cdot x^2)(6 + \sec(\pi\cdot x^2)^{-1/2})
\end{align}$$
