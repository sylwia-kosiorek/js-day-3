const carElement = document.createElement('div')
const body = document.querySelector('body')
const tickDuration = 10 // Interwał
const maxAcceleration = 10

let velocity = 0
let acceleration = 0
let position = 0


function applyStylesToCar() {
    carElement.style.width = '100px'
    carElement.style.height = '100px'
    carElement.style.backgroundColor = 'red'

    carElement.style.position = 'absolute'
    carElement.style.left = position + 'px'

    body.appendChild(carElement)
}

function move() {
    const time = tickDuration / 1000
    position = position + velocity * time + (acceleration * time * time) / 2
    velocity = velocity + acceleration * time
    carElement.style.left = position + 'px'
}

applyStylesToCar()

setInterval(
    move,
    tickDuration
)

window.addEventListener (
    'keydown',
    function(event) {
        if(event.key === 'a'){
            acceleration = maxAcceleration
        } 
    }
)

window.addEventListener (
    'keyup',
    function(event) {
        if(event.key === 'a'){
            acceleration = 0
        } 
    }
)
// Odwolanie do przycisku z klawiatury