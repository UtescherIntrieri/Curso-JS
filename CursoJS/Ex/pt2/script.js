function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'CM.png')
            }
            else if (idade <21) {
                //jovem
                img.setAttribute('src', 'YM.png')

            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'AM.png')

            }
            else {
                //idoso
                img.setAttribute('src', 'OM.png')

            }
        }
        else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'CF.png')

            }
            else if (idade <21) {
                //jovem
                img.setAttribute('src', 'YF.png')

            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'AF.png')

            }
            else {
                //idoso
                img.setAttribute('src', 'OF.png')

            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos. `
        res.appendChild(img)
    }
}
