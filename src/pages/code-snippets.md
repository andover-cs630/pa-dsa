---
title: Inline Code Snippets
description: A demonstration on inlining code snippets in Astro, with Shiki code styling.
layout: "@main"
---

If you don't want to create separate files for code and use MDX to insert them as components, you can also inline code snippets directly in Markdown. Astro uses Shiki to automatically style code blocks. [Themes](https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes) can be configured in the `astro.config.mjs` file. The site currently uses the One Dark Pro theme and automatically formats all code for [languages supported by Shiki](https://github.com/shikijs/shiki/blob/main/docs/languages.md#all-languages).

## Python

```py
for _ in range(10):
    print("Hey!")
```

```py
class Foo:
    def __init__(self, data) -> None:
        self.data = data

    def __repr__(self) -> str:
        return f"Contains: {str(self.data)}"
```

```py
import numpy as np
from scipy.integrate import ode
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

def newton(t, Y, q, m, B):
    """Computes the derivative of the input state vector Y
    Y = (pos_x, pos_y, pos_z, v_x, v_y, v_z)
    """
    u, v, w = Y[3], Y[4], Y[5]
    alpha = q / m * B
    return np.array([u, v, w, 0, alpha * w, -alpha * v])

def get_positions(r, t1, dt):
    positions = []
    while r.successful() and r.t < t1:
        r.integrate(r.t+dt)
        positions.append(r.y[:3]) # keeping only position, not velocity
    return np.array(positions)

r = ode(newton).set_integrator('dopri5')

t0 = 0
x0 = np.array([0, 0, 0])
v0 = np.array([1, 1, 0])
init_state = np.concatenate((x0, v0))

r.set_initial_value(init_state, t0).set_f_params(1.0, 1.0, 1.0)
positions = get_positions(r, 50, 0.05)

r.set_initial_value(init_state, t0).set_f_params(1.0, 1.0, 2.0)
positions2 = get_positions(r, 50, 0.05)

r.set_initial_value(init_state, t0).set_f_params(1.0, 1.0, 4.0)
positions3 = get_positions(r, 50, 0.05)

fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

ax.plot3D(positions[:, 0], positions[:, 1], positions[:, 2])
ax.plot3D(positions2[:, 0], positions2[:, 1], positions2[:, 2])
ax.plot3D(positions3[:, 0], positions3[:, 1], positions3[:, 2])

B1 = np.array([x0[0], x0[1], -1])
B2 = np.array([60, 0, 0])
B_axis = np.vstack((B1, B1 + B2))
ax.plot3D(B_axis[:, 0], B_axis[:, 1], B_axis[:, 2])
plt.xlabel('x')
plt.ylabel('y')
ax.set_zlabel('z')
ax.text3D((B1 + B2)[0], (B1 + B2)[1], (B1 + B2)[2], "B field")
plt.show()
```

## Java

```java
public class Example {
    public static void main(String[] args) {
        System.out.println("Hello world!")
    }
}
```

```java
import java.util.concurrent.ThreadLocalRandom;

public class FruitBasket {
    /* 
    start with a random number of apples from 1 to 10
    from https://stackoverflow.com/questions/363681/how-do-i-generate-random-integers-within-a-specific-range-in-java/363692#363692
    */
    private int apples = ThreadLocalRandom.current().nextInt(1, 11);
    private int limit = 5;

    public int getApples() {
        return apples;
    }

    public void addApples(int num) {
        apples += num;
    }

    public void setLimit(int num) {
        limit = num;
    }

    public boolean tooManyApples() {
        return contrivedValidator();
    }

    private boolean contrivedValidator() {
        return apples > limit;
    }
}
```

## Rust

```rs
fn main() {
    let num: f64 = 33.5;
    let new_num = &num + 1.0;
    println!("My number was {}; now it is {}", num, new_num);
}
```

```rs
#![warn(clippy::all, clippy::pedantic)]

use std::cmp::min;

fn trial(target: usize, attempts: u32, subrate: f64) -> f64 {
    let mut probs = vec![[0f64; 100]; target+1];
    probs[0][0] = 1.0;
    let mut new_probs;
    let mut rate;

    for _ in 0..attempts {
        new_probs = vec![[0f64; 100]; target+1];
        for i in 0..99 {
            rate = if i <= 49 { 0.02 } else { 0.02 * (i-48) as f64 };
            for j in 0..=target {
                new_probs[j][i+1] += probs[j][i] * (1.0 - rate);
                new_probs[j][0] += probs[j][i] * rate * (1.0 - subrate);
                new_probs[min(j+1, target)][0] += probs[j][i] * rate * subrate;
            }
        }
        probs = new_probs;
    }
    return probs[target].iter().sum::<f64>();
}

fn main() {
    println!("Chance: {}", trial(1, 57, 0.5));
}
```