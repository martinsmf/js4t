var idade = prompt('Qual a sua idade?')

if(idade >= 18){
    console.log('Posso jogar GTA V')
} else if (idade >= 16) {
    console.log('Posso jogar Bully')
} else {
    console.log('Posso jogar Minicrafit')
}

var ingresso = prompt('Qual o tipo de ingreço?')

switch (ingresso) {
    case 'vip':
        console.log('Irei ficar no camarote.')
        break;
    case 'premium':
        console.log('Irei ficar na Pista premium.')
    case 'comum':
        console.log('Irei ficar na arquibancada.')
    default:
        console.log('Tipo de ingresso invalido')
        break;
}