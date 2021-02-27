//for é movido por declaração

for(var a = 0 ; a <= 11; a +=1){
    console.log(`Repetindo porque ${a} é menor ou igual a 10`)
}

//while é movido por condição 

var a = 0
while (a < 10) {
    console.log(`Repetindo porque ${a} é menor que 10`)
    a++
}

var avengers = ['Iromen', 'Spiderman', 'Thor', 'Captian America', 'Black Panther', 'Black Window']

avengers.forEach(function(value, key) {
    console.log(`${value} na posição ${key}`) 
})