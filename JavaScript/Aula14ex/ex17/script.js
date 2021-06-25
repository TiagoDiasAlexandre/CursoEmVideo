//AULA-14-EX017.js
function gerar(){
    var num = window.document.getElementById('txtnum')
    var tab = window.document.getElementById('seltab')
   
    if (num.value.length == 0){
        window.alert('ERRO, faltando dados')
    } else {
        var n = Number(num.value)
        var c = 1
        //tab.innerHTML = ''//limpa a tabela
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

    /*if (num.value.length == 0){
        window.alert('ERRO, faltando dados')
    } else {
        var n = Number(num.value)
        var c = 1
        
        tab.innerHTML = ''
        for (c = 1 ; c <= 10 ;c++){
            tab.innerHTML += `<option>${n} x ${c} = ${n*c}</option>`
            
        }
    }*/
}
/*function reset(){
    var tab = window.document.getElementById('seltab')
    tab.innerHTML = 'Digite um número!'//limpa a tabela
    
}*/