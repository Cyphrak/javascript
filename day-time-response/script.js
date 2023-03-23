function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    
    if (hora >= 0 && hora <12){
        img.src = 'image/manha.png'
        msg.innerHTML = 'Bom Dia!'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        img.src = 'image/tarde.png'
        msg.innerHTML = 'Boa Tarde!'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'image/noite.png'
        msg.innerHTML = 'Boa Noite!'
        document.body.style.background = '#515154'
    }

}