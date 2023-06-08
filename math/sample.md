---
title: Sample of Mathjax
permalink: /math/sample
---
{% include head.html %}

# Practice Mathjax / Latex -- starting with some basics of Calculus

## References
1. Mathjax/Latex [Primer](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)
2. Markdown [Guide](https://www.markdownguide.org/basic-syntax/)
3. Github [Emoji](https://gist.github.com/rxaviers/7360908)


## Exponential and Logarithmic Functions ([1-5](https://openstax.org/books/calculus-volume-1/pages/1-5-exponential-and-logarithmic-functions))

### Laws of Exponents ([1-5](https://openstax.org/books/calculus-volume-1/pages/1-5-exponential-and-logarithmic-functions#5)) :smirk:
1. $b^x\cdot b^y = b^{x+y}$
2. $\frac{b^x}{b^y} = b^{x\cdot y}$
3. $(b^x)^y = b^{x\cdot y}$
4. $(a\cdot b)^x = a^x\cdot b^x$
5. $\frac{a^x}{b^x} = \left(\frac{a}{b}\right)^x$

### Properties of Logarithms ([1-5](https://openstax.org/books/calculus-volume-1/pages/1-5-exponential-and-logarithmic-functions#13)) :flushed:
If $a$,$b$,$c>0$,$b\ne1$, and $r$ is any real number, then
$$
\begin{array}{lll}
\text{1.} & \log_b (a\cdot c) = \log_b (a) + \log_b (c) & \text{(Product Property)} \\
\text{2.} & \log_b\left(\frac{a}{c}\right) = \log_b(a) - \log_b(c) & \text{(Quotient property)} \\
\text{3.} & \log_b(a^r) = r\cdot \log_b(a) & \text{(Power property)}
\end{array}
$$

### Change-of-Base Formulas ([1-5](https://openstax.org/books/calculus-volume-1/pages/1-5-exponential-and-logarithmic-functions#18)) :confused:
Let $a>0$, $b>0$, and $a\ne1$, $b\ne1$.
1. $a^x = b^{x\cdot \log_b a}$ for any real number $x$.<br> If $b=e$, this equation reduces to $a^x = e^{x\cdot \log_e a} = e^{x\cdot \ln a}$
2. $\log_ax = \frac{\log_b x}{\log_b a}$ for any real number $x>0$.<br>If $b=e$, this equation reduces to $\log_a x = \frac{\ln x}{\ln a}$.

----------------------------------------------------------------

### Hyperbolic Functions ([1-5](https://openstax.org/books/calculus-volume-1/pages/1-5-exponential-and-logarithmic-functions#25))
#### Hyperbolic cosine
$$
\cosh x = {e^x + e^{-x} \over 2}
$$

#### Hyperbolic sine
$$
\sinh x = {e^x - e^{-x} \over 2}
$$

#### Hyperbolic tangent
$$
\tanh x = {\sinh x \over \cosh x} = {e^x - e^{-x} \over e^x + e^{-x}}
$$

#### Cosecant, secant, and cotangent are defined the way you'd expect. They are just the reciprocals of their respective functions.
