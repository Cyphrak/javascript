function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] - Verifique os dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'image/criança-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'image/adolescente-m.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'image/adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'image/idoso-m.png')
            }
        }
        if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'image/criança-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'image/adolescente-f.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'image/adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'image/idoso-f.png')
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}