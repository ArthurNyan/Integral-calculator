const abs = (x) => {
    return Math.abs(x)
}
const acos = (x) => {
    return Math.acos(x)
}
const acosh = (x) => {
    return Math.acosh(x)
}
const asin = (x) => {
    return Math.asin(x)
}
const asinh = (x) => {
    return Math.asinh(x)
}
const atan = (x) => {
    return Math.atan(x)
}
const atanh = (x) => {
    return Math.atanh(x)
}
const cbrt = (x) => {
    return Math.cbrt(x)
}
const ceil = (x) => {
    return Math.ceil(x)
}
const clz32 = (x) => {
    return Math.clz32(x)
}
const cosh = (x) => {
    return Math.cosh(x)
}
const exp = (x) => {
    return Math.exp(x)
}
const expm1 = (x) => {
    return Math.expm1(x)
}
const floor = (x) => {
    return Math.floor(x)
}
const fround = (x) => {
    return Math.fround(x)
}
const hypot = (x) => {
    return Math.hypot(x)
}
const log = (x) => {
    return Math.log(x)
}
const log10 = (x) => {
    return Math.log10(x)
}
const log1p = (x) => {
    return Math.log1p(x)
}
const log2 = (x) => {
    return Math.log2(x)
}
const max = (x) => {
    return Math.max(x)
}
const min = (x) => {
    return Math.min(x)
}
const pow = (x, y) => {
    return Math.pow(x, y)
}
const round = (x) => {
    return Math.round(x)
}
const sign = (x) => {
    return Math.sign(x)
}
const sinh = (x) => {
    return Math.sinh(x)
}
const sqrt = (x) => {
    return Math.sqrt(x)
}
const tan = (x) => {
    return Math.tan(x)
}
const tanh = (x) => {
    return Math.tanh(x)
}
const trunc = (x) => {
    return Math.trunc(x)
}
const sin = (x) => {
    return Math.sin(x)
}
const cos = (x) => {
    return Math.cos(x)
}


export const solve = (x, input) => {
    try {
        return Math.abs(eval(input))
    } catch (err) {
        return "error"
    }
}

export const solve_even = (x, y, input) => {
    try {
        return Math.abs(eval(input))
    } catch (err) {
        return "error"
    }
}

