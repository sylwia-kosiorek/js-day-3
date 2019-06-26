const carElement = document.createElement ('div')
// Stworzenie elementu w HTML

carElement.style.width = '100px'
carElement.style.height = '100px'
carElement.style.backgroundColor = 'red'
// Nadanie elementowi wysokosci, szerokosci oraz koloru

carElement.style.position ='absolute'
carElement.style.left = '0px'
// Pozycja elementu

const body = document.querySelector('body')
// Do zmiennej zapisuje referencje, ktora odpowiada utworzonemu elementowi

body.appendChild(carElement)
// Utworzony child - element wyswietla sie na naszej stronie

let position = 0
// Zmienna zapisujaca pozycje

setInterval (
    function () {
        position = position + 10
        carElement.style.left = position + 'px'
    },
    100
)

// Wprawienie elelemntu w ruch w interwalach 100ms