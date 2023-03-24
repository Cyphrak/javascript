function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    
    if (hora >= 0 && hora < 12){
        image.src = 'image/manha.png'
        msg.innerHTML = 'Bom Dia!'
        document.body.style.background = '#82aa42'
    } else if (hora >= 12 && hora < 18){
        image.src = 'image/tarde.png'
        msg.innerHTML = 'Boa Tarde!'
        document.body.style.background = '#ffbb00'
    } else {
        image.src = 'image/noite.png'
        msg.innerHTML = 'Boa Noite!'
        document.body.style.background = '#2d3346'
    }

}