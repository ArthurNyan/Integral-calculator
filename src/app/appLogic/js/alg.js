import { solve, solve_even } from "./eval.js";

const n = 100;

export const integrate_left = (a, b, equation) => {
    let s = 0;
    let t = (b - a) / n;
    let x = a;
    while (x <= b) {
        s = s + solve(x, equation)
        x = x + t
    }
    return s * t
}

export const integrate_right = (a, b, equation) => {
    let s = 0
    let t = (b - a) / n
    let x = a
    while (x <= b) {
        s = s + solve(x, equation)
        x = x + t
    }
    return s * t
}

export const integrate_trapec = (a, b, equation) => {
    let s = 0;
    let t = (b - a) / n;
    let x1 = a;
    let x2;
    while (x1 <= (b - t)) {
        x2 = x1 + t
        s = s + (solve(x1, equation) + solve(x2, equation)) / 2
        x1 = x1 + t
    }
    return s * t
}

export const integrate_parabol = (a, b, equation) => {
    let s = 0;
    let t = (b - a) / n;
    let x1 = a;
    let x2, x3;
    while (x1 <= (b - 2 * t)) {
        x2 = x1 + t
        x3 = x1 + 2 * t
        s = s + solve(x1, equation) + 4 * solve(x2, equation) + solve(x3, equation)
        x1 = x1 + 2 * t
    }
    return s * (t / 3)
}

export const var_alg1 = (a, b, e, equation) => {
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

export const var_alg2 = (a, b, e, equation) => {
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

export const even_alg = (a, b, c, d, nx, ny, equation) => {
    let hx = (b - a) / nx
    let hy = (d - c) / ny
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