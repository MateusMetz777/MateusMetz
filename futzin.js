const ask = require("readline-sync")


let nome = ask.question("Qual e o seu nome? ")
let tipo = ask.question("Qual o tipo de jogo voce quer assistir? ") 
let etapa = ask.question("Qual etapa de jogo voce quer assistir? ")
let categoria = Number(ask.question("Qual categoria voce quer assistir? "))
let quantidadeDeIngressos = Number(ask.question("Quantos ingressos voce quer comprar?"))
let valorDeCadaIngresso 
let valorTotal 

switch(categoria){
    case 1:
    if(etapa === "FI"){
        valorDeCadaIngresso = 1.980
    } else if (etapa === "DT"){
        valorDeCadaIngresso = 660
    } else {
        valorDeCadaIngresso = 1320
    } 
    break
case 2: 
if(etapa === "FI"){
    valorDeCadaIngresso = 1320
}else if (etapa === "DT"){
    valorDeCadaIngresso = 440
} else {
    valorDeCadaIngresso = 880
}
break
case 3:
    if(etapa === "FI"){
    valorDeCadaIngresso = 880
} else if (etapa === "DT"){
    valorDeCadaIngresso = 330
} else {
    valorDeCadaIngresso = 550
}
break
case 4:
    if(etapa === "FI"){
    valorDeCadaIngresso = 330
} else if(etapa ==="DT"){
    valorDeCadaIngresso = 170
}else {
    valorDeCadaIngresso = 220
}
}

if (tipo === "IN"){
    valorDeCadaIngresso = valorDeCadaIngresso * 4.10
}

valorTotal = valorDeCadaIngresso * quantidadeDeIngressos

console.log(`${nome} comprou ${quantidadeDeIngressos} ingressos para assistir um jogo ${tipo} de categoria ${categoria} da etapa ${etapa}. Cada ingresso saiu por ${valorDeCadaIngresso.toFixed(2)}, e o total saiu por ${valorTotal}`)


    
    
