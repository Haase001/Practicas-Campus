const buttonEx1 = document.getElementById('color-ex')
const buttonEx2 = document.getElementById('password-ex')
const buttonEx3 = document.getElementById('comment-ex')

buttonEx1.addEventListener('click', () => {
    window.location.href = './Cambio-de-color/practica.html'
})

buttonEx2.addEventListener('click', () => {
    window.location.href = './Generador-de-contrasenias/password.html'
})

buttonEx3.addEventListener('click', () => {
    window.location.href = './Caja-de-comentarios/caja.html'
})