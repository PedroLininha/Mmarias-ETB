const iconX = document.querySelector('.fa-bars')
const menu = document.querySelector('#menu-icon')
const containerCenter = document.querySelector('.container-center')
const containerLeft = document.querySelector('.container-right')

menu.onclick = () => {

    iconX.classList.toggle('fa-xmark')
    containerCenter.classList.toggle('open')
    containerLeft.classList.toggle('open')
}