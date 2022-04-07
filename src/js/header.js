const ref = {
    login: document.querySelector('.jsback'),
    form: document.querySelector('.login-container'),
    body: document.querySelector('body'),
    header: document.querySelector('.container')
}

ref.login.addEventListener('click', clickNav)
ref.body.addEventListener('keydown', closeNav)

function clickNav(e) {
    e.preventDefault()
    ref.form.classList.remove('display-none')
    ref.header.classList.add('overlay')
}
function closeNav(e) {
    if (e.keyCode === 27) {
        ref.form.classList.add('display-none')
        ref.header.classList.remove('overlay')
    }
}