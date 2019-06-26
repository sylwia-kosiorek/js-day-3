const carElement = document.createElement ('div')
// Stworzenie elementu w HTML

carElement.style.width = '100px'
carElement.style.height = '100px'
carElement.style.backgroundColor = 'red'
// Nadanie elementowi wysokosci, szerokosci oraz koloru

const body = document.querySelector('body')
// Do zmiennej zapisuje referencje, ktora odpowiada utworzonemu elementowi

body.appendChild(carElement)
// Utworzony child - element wyswietla sie na naszej stronie



