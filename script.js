const carElement = document.createElement('div')
const body = document.querySelector('body')
let position = 0


function applyStylesToCar() {
    carElement.style.width = '100px'
    carElement.style.height = '100px'
    carElement.style.backgroundColor = 'red'

    carElement.style.position = 'absolute'
    carElement.style.left = '0px'

    body.appendChild(carElement)
}

function move() {
    position = position + 10
    carElement.style.left = position + 'px'
}

applyStylesToCar()

setInterval(
    move,
    100
)

