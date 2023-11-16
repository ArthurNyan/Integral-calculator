import { solve, solve_even } from "./eval.js";

export const integrate_left = (a, b, equation, n) => {
    let sum = 0;
    let step = (b - a) / n;
    let x = a;
    while (x <= b) {
        sum += solve(x, equation)
        x += step
    }
    return sum * step
}

export const integrate_right = (a, b, equation, n) => {
    let sum = 0
    let step = (b - a) / n
    let x = b
    while (x >= a) {
        sum += solve(x, equation)
        x -= step
    }
    return sum * step
}

export const integrate_trapec = (a, b, equation, n) => {
    let sum = 0;
    let step = (b - a) / n;
    let x1 = a;
    let x2;
    while (x1 <= (b - step)) {
        x2 = x1 + step
        sum = sum + (solve(x1, equation) + solve(x2, equation)) / 2
        x1 = x1 + step
    }
    return sum * step
}

export const integrate_parabol = (a, b, equation, n) => {
    let sum = 0;
    let step = (b - a) / n;
    let x1 = a;
    let x2, x3;
    while (x1 <= (b - 2 * step)) {
        x2 = x1 + step
        x3 = x1 + 2 * step
        sum = sum + solve(x1, equation) + 4 * solve(x2, equation) + solve(x3, equation)
        x1 = x1 + 2 * step
    }
    return sum * (step / 3)
}

export const double_step = (a, b, e, equation) => {
    let h = Math.sqrt(e)
    let i1 = 0
    let i2 = 0
    let r = e + 1

    while (r > e) {
        let s2 = 0
        let x = a
        while (x < b - h) {
            s2 += solve(x, equation)
            x += h
        }
        i2 = h * s2
        r = Math.abs(i2 - i1)
        i1 = i2
        h /= 2
    }
    return (i2)
}

export const triple_step = (a, b, e, equation, n) => {
    let hv = Math.sqrt(e)
    let hd = hv
    let hs = 0
    let i1 = 0
    let i2 = 0
    let r = e + 1
    let i = 0

    while (r > e || i < 3) {
        let s2 = 0
        let x = a + hs
        while (x < b - hv) {
            s2 += solve(x, equation)
            x += hd
        }
        i2 = hd * s2
        r = Math.abs(i2 - i1)
        i1 = i2
        hd = hv
        hv /= 2
        i += 1
    }
    return (i2)
}

export const even_alg = (a, b, c, d, equation, n) => {
    let hx = (b - a) / n
    let hy = (d - c) / n
    let sx = 0
    let x = a
    while (x < b - hx) {
        let sy = 0
        let y = c
        while (y < d - hy) {
            sy += Math.abs(solve_even(x, y, equation))
            y += hy
        }
        let iy = hy * sy
        sx = sx + iy
        x += hx
    }
    return hx * sx
}

const Ailer_first_order = (x, y, equation) => {
    const h = (b - a) / n;
    for (let i = 0; i < n; i++) {
        y += h * equation;
        x += h;
        console.log(`#${i} -- ${[x, y]}`);
    }
    return [x, y];
};