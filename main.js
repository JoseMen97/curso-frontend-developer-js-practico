const menuEmail = document.querySelector('.navbar-email')
const deployMenu = document.querySelector('#deploy-menu')
const carrito = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarrito = document.querySelector('.product-detail')

menuEmail.addEventListener('click',toggleDesktopMenu)
deployMenu.addEventListener('click',togglemobileMenu)
carrito.addEventListener('click',toggleMenuCarrito)

function toggleDesktopMenu(){
    if (!menuCarrito.classList.contains('inactive')){
        menuCarrito.classList.toggle('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}
function togglemobileMenu(){
    if (!menuCarrito.classList.contains('inactive')){
        menuCarrito.classList.toggle('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}
function toggleMenuCarrito(){
    if (!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.toggle('inactive')
    }
    if (!desktopMenu.classList.toggle('inactive')){
        desktopMenu.classList.toggle('inactive')
    }
    menuCarrito.classList.toggle('inactive')
}

