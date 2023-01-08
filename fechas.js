const fecha = new Date()
console.log(fecha)

const nacimiento = new Date(1990, 7, 6)
console.log(nacimiento)

const comparacion = fecha > nacimiento
console.log(comparacion)

console.log(nacimiento.getDate())
console.log(nacimiento.getMonth()+1)
console.log(nacimiento.getFullYear())