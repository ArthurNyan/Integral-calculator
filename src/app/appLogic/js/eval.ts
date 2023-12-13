const abs = (x: number) => {
    return Math.abs(x)
}
const acos = (x: number) => {
    return Math.acos(x)
}
const acosh = (x: number) => {
    return Math.acosh(x)
}
const asin = (x: number) => {
    return Math.asin(x)
}
const asinh = (x: number) => {
    return Math.asinh(x)
}
const atan = (x: number) => {
    return Math.atan(x)
}
const atanh = (x: number) => {
    return Math.atanh(x)
}
const cbrt = (x: number) => {
    return Math.cbrt(x)
}
const ceil = (x: number) => {
    return Math.ceil(x)
}
const clz32 = (x: number) => {
    return Math.clz32(x)
}
const cosh = (x: number) => {
    return Math.cosh(x)
}
const exp = (x: number) => {
    return Math.exp(x)
}
const expm1 = (x: number) => {
    return Math.expm1(x)
}
const floor = (x: number) => {
    return Math.floor(x)
}
const fround = (x: number) => {
    return Math.fround(x)
}
const hypot = (x: number) => {
    return Math.hypot(x)
}
const log = (x: number) => {
    return Math.log(x)
}
const log10 = (x: number) => {
    return Math.log10(x)
}
const log1p = (x: number) => {
    return Math.log1p(x)
}
const log2 = (x: number) => {
    return Math.log2(x)
}
const max = (x: number) => {
    return Math.max(x)
}
const min = (x: number) => {
    return Math.min(x)
}
const pow = (x: number, y: number) => {
    return Math.pow(x, y)
}
const round = (x: number) => {
    return Math.round(x)
}
const sign = (x: number) => {
    return Math.sign(x)
}
const sinh = (x: number) => {
    return Math.sinh(x)
}
const sqrt = (x: number) => {
    return Math.sqrt(x)
}
const tan = (x: number) => {
    return Math.tan(x)
}
const tanh = (x: number) => {
    return Math.tanh(x)
}
const trunc = (x: number) => {
    return Math.trunc(x)
}
const sin = (x: number) => {
    return Math.sin(x)
}
const cos = (x: number) => {
    return Math.cos(x)
}


export const solve = (x: number, input: string) => {
    try {
        return Math.abs(eval(input))
    } catch (err) {
        return 0
    }
}

export const solve_even = (x: number, y: number, input: string) => {
    try {
        return Math.abs(eval(input))
    } catch (err) {
        return 0
    }
}

export const second_solve = (x: number, y: number, dy: number, input: string) => {
    try {
        return Math.abs(eval(input))
    } catch (err) {
        return 0
    }
}

export const sissolve = (t: number, x: string | number, y: string | number, z: string | number, input: string) => {
    try {
        return eval(input)
    } catch (err) {
        return 0
    }
}

export const solveNoAbs = (x: number, input: string) => {
    try {
        return eval(input)
    } catch (err) {
        return 0
    }
}