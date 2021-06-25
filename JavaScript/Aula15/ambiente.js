//AULA-15-EXambiente.js
let num = [5,8,2,9,3]
num.push(1) // Comando adiciona um valor a ultima posição
num.sort() // Comando ordena os valores em ordem crescente
let n = 8
let pos = num.indexOf(n) // Comando procura um valor dentro da variavel e informa a posição dele
console.log(num)
if (pos == -1){
    console.log('Valor não encontrado')
} else {
    console.log(`O valor ${n} esta na posição ${pos}`)
}

console.log(`O vetor tem ${num.length} posições`)
console.log(`Nosso vetor é o ${num[0]}`)

// Forma de exibir os vetores
/*for (let pos=0 ; pos<num.length ; pos++){
    console.log(`A posiçõa ${pos} tem o valor ${num[pos]}`)
}*/


//Forma simplificada de exibir os vetores
/*for(let pos in num){
    console.log(`A posiçõa ${pos} tem o valor ${num[pos]}`)
}*/