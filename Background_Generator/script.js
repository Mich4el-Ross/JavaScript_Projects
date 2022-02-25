let buttonEl = document.getElementById('buttonChanger')
let colorEl = document.querySelector('.color')
let bodyEl = document.body
let h2El = document.getElementById('h2el')

function randomColors(){
    let components = '0123456789ABCDEF'
    let color = '#'

    for (let idx = 0; idx < 6; idx++) {
        color += components[Math.floor(Math.random() * components.length)]
    }

    return color
}

buttonEl.addEventListener('click', () => {
    newColor = randomColors()
    bodyEl.style.backgroundColor = newColor
    colorEl.textContent = newColor
    colorEl.style.color = newColor
})