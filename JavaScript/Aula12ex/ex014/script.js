//AULA-12-EX014.js
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 11
    if (hora >= 0 && hora < 12){
        // Bom dia
        msg.innerHTML = `Bom dia, agora são ${hora} Horas`
        img.src = 'amanhecer.jpg'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18){
        // Boa Tarde
        msg.innerHTML = `Boa Tarde, agora são ${hora} Horas`
        img.src = 'entardecer.jpg'
        document.body.style.background = '#b9846f'
    }else{
        // Boa Noite
        msg.innerHTML = `Boa noite, agora são ${hora} Horas`
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
    
    }