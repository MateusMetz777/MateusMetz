const ask = require("readline-sync")

let numero1 = ask.question("Digite um numero: ")
let numero2 = ask.question("Digite um numero: ")


numero1 = Number(numero1)
numero2 = Number(numero2) 


let calculadoraFuncionando = true

while(calculadoraFuncionando){
    console.log(`\nSeus numeros sao: \n${numero1}\n${numero2}`)
    let operacao = ask.question("\n___________________________________ \nQual eh o tipo da sua conta?\n SOMA - (1)\n SUBTRACAO - (2)\n MULTIPLICACAO - (3)\n DIVISAO - (4)\n MOD(RESTO) - (5)\n REINICIAR THE FUCK SYSTEM - (0)\n REINSERIR NUMEROS - (6)\n : ")
    operacao = Number(operacao)
    console.clear()
    switch(operacao){
        case 1:
           
            console.log(numero1 + numero2)
             break
        case 2:
           
            console.log(numero1 - numero2)
             break
        case 3:
            
            console.log(numero1 * numero2)
             break
        case 4:
           
            console.log(numero1 / numero2)
             break 
        case 5:
           
            console.log(numero1 % numero2)
             break
        case 0:
            calculadoraFuncionando = false
             break
        case 6: 
            numero1 = Number(ask.question("Digite um numero: "))
            numero2 = Number(ask.question("Digite um numero: "))
            break      
            }
            ask.question(`
^ RESPOSTA ^

Tecla ENTER para continuar...`)
    console.clear()
}


