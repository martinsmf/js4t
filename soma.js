function somaValores() {
    var n1 = document.getElementById("numberOne").value
    var n2 = document.getElementById("numberTow").value
    
    var result = parseInt(n1) + parseInt(n2)

    var divResultado = document.getElementById("resultado")
    divResultado.append(`O resultado da soma e: ${result}` )
    console.log(result)
}