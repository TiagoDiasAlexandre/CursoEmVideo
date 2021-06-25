//AULA-12-EX015.js
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Erro. Verificar os dados e tente novamente!')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = "Homem"
            if (idade >=0 && idade < 10){
                // Criança
                img.setAttribute('src', 'bebe-h.jpg')
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'jovem-h.jpg')
            }else if(idade <50){
                // Adulto
                img.setAttribute('src', 'adulto-h.jpg')
            }else{
                // Idoso
                img.setAttribute('src', 'idoso-h.jpg')
            }
        }else if(fsex[1].checked){
            genero = "Mulher"
            if (idade >=0 && idade < 10){
                // Criança
                img.setAttribute('src', 'bebe-m.jpg')
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'jovem-m.jpg')
            }else if(idade <50){
                // Adulto
                img.setAttribute('src', 'adulta-m.jpg')
            }else{
                // Idoso
                img.setAttribute('src', 'idosa-m.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
