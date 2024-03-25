const card_um = document.querySelector("#card_um");
const lugar_correto = document.querySelector("#lugar_correto");
const text_select_element = document.querySelector(".element-selected");
let positionX
let positionY
let elemento_selecionado


const LC_position = lugar_correto.getBoundingClientRect();


const capturarElemento = (e) => {
    const touch = e.touches ? e.touches[0] : e
    elemento_selecionado = document.querySelector(`.${touch.target.className}`)
    positionX = touch.clientX - elemento_selecionado.getBoundingClientRect().left
    positionY = touch.clientY - elemento_selecionado.getBoundingClientRect().top
    elemento_selecionado.style.boxShadow = "0px 0px 20px 4px #00000040"
    elemento_selecionado.style.scale = "1.1"
    elemento_selecionado.style.backgroundColor = "#FFA000"

    text_select_element.innerHTML = "Elemento selecionado: " + elemento_selecionado.dataset.nome;
}

const moverElemento = (e) => {
    const touch = e.touches ? e.touches[0] : e
    if (elemento_selecionado !== undefined) {
        elemento_selecionado.style.transition = "0s"
        elemento_selecionado.style.left = (touch.clientX - positionX) + "px"
        elemento_selecionado.style.top = (touch.clientY - positionY) + "px"
    }
}

const inserirElemento = () => {
    elemento_selecionado.style.transition = "0.2s"
    elemento_selecionado.style.boxShadow = "none"
    elemento_selecionado.style.scale = "1"
    elemento_selecionado.style.backgroundColor = "#FF0000"

    elemento_selecionado.style.left = elemento_selecionado.style.left
    elemento_selecionado.style.top = elemento_selecionado.style.top
    text_select_element.innerHTML = "Nenhum elemento selecionado";
    
    if (LC_position.left < elemento_selecionado.getBoundingClientRect().left && LC_position.top < elemento_selecionado.getBoundingClientRect().top ){
    text_select_element.innerHTML = `Elemento ${elemento_selecionado.dataset.nome} está dentro do local`;
    }
    elemento_selecionado = undefined
}


// Eventos de cursor ----
card_um.addEventListener('mousedown', capturarElemento);
card_um.addEventListener('mouseup', inserirElemento);
document.addEventListener('mousemove', moverElemento)
// Eventos de touch ----
card_um.addEventListener('touchstart', capturarElemento);
card_um.addEventListener('touchend', inserirElemento);
document.addEventListener('touchmove', moverElemento)

