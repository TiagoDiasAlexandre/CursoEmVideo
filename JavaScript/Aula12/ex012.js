//AULA-12-EX012.js
var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} Horas.`)
if (hora > 0 && hora < 12){
    console.log('Bom dia')
}else{
    if (hora > 12 && hora < 18){
        console.log('Boa tarde')
    }else{
        console.log('Boa noite')
    }
}