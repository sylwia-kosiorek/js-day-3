const carElement = document.createElement ('div')
// Stworzenie elementu w HTML
const body = document.querySelector('body')
// Do zmiennej zapisuje referencje, ktora odpowiada utworzonemu elementowi
let position = 0
// Zmienna zapisujaca pozycje

carElement.style.width = '100px'
carElement.style.height = '100px'
carElement.style.backgroundColor = 'red'
// Nadanie elementowi wysokosci, szerokosci oraz koloru

carElement.style.position ='absolute'
carElement.style.left = '0px'
// Pozycja elementu

body.appendChild(carElement)
// Utworzony child - element wyswietla sie na naszej stronie


setInterval (
    function () {
        position = position + 10
        carElement.style.left = position + 'px' // Funkcja jest tutaj anonimowac
    },
    100
)

// Wprawienie elelemntu w ruch w interwalach 100ms