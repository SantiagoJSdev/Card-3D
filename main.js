console.log('hola')

let card = document.querySelector('.card')
console.log(card)

card.addEventListener('click', ()=>{
    card.classList.toggle('is-flipped')
})