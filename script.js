const card_div = document.querySelector(".card_div");
let positionX
let positionY
let elemento_selecionado


const capturarElemento = (e) => {
    const touch = e.touches ? e.touches[0] : e
    positionX = touch.clientX - card_div.getBoundingClientRect().left
    positionY = touch.clientY - card_div.getBoundingClientRect().top
    elemento_selecionado = card_div
}

const moverElemento = (e) => {
    const touch = e.touches ? e.touches[0] : e
    if (elemento_selecionado !== undefined) {
        elemento_selecionado.style.left = (touch.clientX - positionX) + "px"
        elemento_selecionado.style.top = (touch.clientY - positionY) + "px"
    }
}

const inserirElemento = () => {
    elemento_selecionado.style.left = card_div.style.left
    elemento_selecionado.style.top = card_div.style.top
    elemento_selecionado = undefined
}


// Eventos de cursor ----
card_div.addEventListener('mousedown', capturarElemento);
card_div.addEventListener('mouseup', inserirElemento);
document.addEventListener('mousemove', moverElemento)
// Eventos de touch ----
card_div.addEventListener('touchstart', capturarElemento);
card_div.addEventListener('touchend', inserirElemento);
document.addEventListener('touchmove', moverElemento)