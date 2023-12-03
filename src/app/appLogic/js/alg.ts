import { second_solve, sissolve, solve, solve_even } from "./eval.js";

export const integrate_left = (a: number, b: number, equation: string, n: number) => {
    let sum = 0;
    let step = (b - a) / n;
    let x = a;
    while (x <= b) {
        let sol = solve(x, equation);
        sum += sol;
        x += step
    }
    return sum * step
}

export const integrate_right = (a: number, b: number, equation: string, n: number) => {
    let sum = 0
    let step = (b - a) / n
    let x = b
    while (x >= a) {
        sum += solve(x, equation)
        x -= step
    }
    return sum * step
}

export const integrate_trapec = (a: number, b: number, equation: string, n: number) => {
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

export const integrate_parabol = (a: number, b: number, equation: string, n: number) => {
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

export const double_step = (a: number, b: number, e: number, equation: string) => {
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

export const triple_step = (a: number, b: number, e: number, equation: string) => {
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

export const even_alg = (a: number, b: number, c: number, d: number, equation: string, n: number) => {
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

export const Ailer_first_order = (a: number, b: number, y0: number, equation: string, n: number) => {

    let h = Math.abs(a - b) / n
    let x = a;
    let y = y0;

    let answers = [];

    while (x - x % 0.00000000000001 <= b) {
        answers.push({ x: x, y: y });
        y += h * solve_even(x, y, equation);
        x += h;
    }
    return answers;
}

export const Ailer_second_order = (a: number, b: number, y0: number, dy: number, equation: string, n: number) => {
    let h = Math.abs(a - b) / n
    let x = a;
    let y = y0;
    let z = dy;

    let answers = [];

    while (x - x % 0.00000000000001 < b) {
        y += h * z;
        z += h * second_solve(x, y, z, equation) * -1;
        x += h;
        answers.push({ x: x, y: y });
    }
    return answers;
}

export const Ruk_first_order = (a: number, b: number, y0: number, equation: string, n: number) => {

    let h = Math.abs(a - b) / n
    let x = a;
    let y = y0;

    let answers = [];

    while (x - x % 0.00000000000001 < b) {
        let k1 = h * solve_even(x, y, equation);
        let k2 = h * solve_even(x + h / 2, y + k1 / 2, equation);
        let k3 = h * solve_even(x + h / 2, y + k2 / 2, equation);
        let k4 = h * solve_even(x + h, y + k3, equation);
        let F = (k1 + 2 * k2 + 2 * k3 + k4) / 6;
        x += h;
        y += F;
        answers.push({ x: x, y: y });
    }
    return answers;
}

export const Ruk_second_order = (x0: number, b: number, y0: number, dy0: number, equation: string, n: number) => {
    let h = Math.abs(x0 - b) / n
    let x = x0;
    let y = y0;
    let z = dy0;

    let answers = [];

    while (x - x % 0.00000000000001 < b) {
        let k1 = h * z;
        let k2 = h * (z + k1 / 2);
        let k3 = h * (z + k2 / 2);;
        let k4 = h * (z + k3);
        let F = (k1 + 2 * k2 + 2 * k3 + k4) / 6;
        y += F;
        k1 = h * second_solve(x, y, z, equation) * -1;
        k2 = h * second_solve(x + h / 2, y + k1 / 2, z + k1 / 2, equation) * -1;
        k3 = h * second_solve(x + h / 2, y + k2 / 2, z + k2 / 2, equation) * -1;
        k4 = h * second_solve(x + h, y + k3, z + k3, equation) * -1;
        F = (k1 + 2 * k2 + 2 * k3 + k4) / 6;
        z += F
        x += h;
        answers.push({ x: x, y: y });
    }
    return answers;
}



export const defur_sistem_third = (x0: number, b: number, fy1: number, fy2: number, fy3: number, n: number, eq1: string, eq2: string, eq3: string) => {

    let h = Math.abs(x0 - b) / n
    let x = x0;
    let y1 = fy1;
    let y2 = fy2;
    let y3 = fy3;

    let answers: number[][] = [];

    while (x - x % 0.00000000000001 <= b) {
        answers.push([x, y1, y2, y3]);
        let oldy1 = y1; let oldy2 = y2; let oldy3 = y3;
        y1 += h * sissolve(x, oldy1, oldy2, oldy3, eq1);
        y2 += h * sissolve(x, oldy1, oldy2, oldy3, eq2);
        y3 += h * sissolve(x, oldy1, oldy2, oldy3, eq3);
        x += h;

    }
    return answers;
}