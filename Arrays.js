// var avengers = new Array()

var avengers = ['Homem de Ferro', 'Capião América', 'Thor']

avengers.push('Matheus')

avengers.push('Homem Arranha')

// avengers.pop() // pop remove o ultimo registro do array
// avengers.shift() // shft remove o primeiro registro do array

var indice = avengers.indexOf('Homem Aranha')
avengers.splice(indice)

avengers.push('Viúva Negra')
avengers.push('Gavão Arqueiro')

console.log(avengers)


var newAvengers = ['Homem Aranha', 'Capitã Marvel', 'Miss Marvel', 'Pantera Negra']

var result = avengers.concat(newAvengers)
console.log(result)