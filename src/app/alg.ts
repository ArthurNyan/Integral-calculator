const funct = (x) => {
    return Math.sin(x)
}

export const integrate_left = (a, b, n) => {
    let s = 0;
    let t = (b - a) / n;
    let x = a;
    while (x <= b) {
        s = s + funct(x)
        x = x + t
    }
    return s * t
}

export const integrate_right = (a, b, n) => {
    let s = 0
    let t = (b - a) / n
    let x = a
    while (x <= b) {
        s = s + funct(x)
        x = x + t
    }
    return s * t
}

export const integrate_trapec = (a, b, n) => {
    let s = 0;
    let t = (b - a) / n;
    let x1 = a;
    let x2;
    while (x1 <= (b - t)) {
        x2 = x1 + t
        s = s + (funct(x1) + funct(x2)) / 2
        x1 = x1 + t
    }
    return s * t
}

export const integrate_parabol = (a, b, n) => {
    let s = 0;
    let t = (b - a) / n;
    let x1 = a;
    let x2, x3;
    while (x1 <= (b - 2 * t)){
        x2 = x1 + t
        x3 = x1 + 2 * t
        s = s + funct(x1) + 4 * funct(x2) + funct(x3)
        x1 = x1 + 2 * t
    }
    return s * (t / 3)
}