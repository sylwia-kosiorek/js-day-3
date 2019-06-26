const carElement = document.createElement('div')
const body = document.querySelector('body')
const tickDuration = 100 // Interwał
const velocity = 10 // co ile pixeli sie rusza

let accelerate = false
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
    const displacementPerTick = velocity + (tickDuration / 1000)
    position = position + displacementPerTick
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
            accelerate = true
        } 
    }
)
// Odwolanie do przycisku z klawiatury