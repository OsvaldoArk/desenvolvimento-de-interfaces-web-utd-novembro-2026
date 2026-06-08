let a = 2, b = 4, c = -6

//const delta = Math.pow(b,2) - 4 * a * c
const delta = b**2 - 4 * a * c

const x1 = (-b + Math.sqrt(delta)) / (2 * a)
const x2 = (-b - Math.sqrt(delta)) / (2 * a)

console.log("delta: %f",delta)

console.log("x': %d, x'': %d",x1,x2)