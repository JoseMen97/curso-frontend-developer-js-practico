const menuEmail = document.querySelector('.navbar-email')
const deployMenu = document.querySelector('#deploy-menu')
const carrito = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarrito = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

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


const productList = [];

productList.push({
    name: 'Bike',
    price: '$120,00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Screen',
    price: '$220,00',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

productList.push({
    name: 'Computer',
    price: '$650,00',
    image: 'https://images.pexels.com/photos/4005569/pexels-photo-4005569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

productList.push({
    name: 'Bike',
    price: '$120,00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Screen',
    price: '$220,00',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

productList.push({
    name: 'Computer',
    price: '$650,00',
    image: 'https://images.pexels.com/photos/4005569/pexels-photo-4005569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

productList.push({
    name: 'Bike',
    price: '$120,00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Screen',
    price: '$220,00',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

productList.push({
    name: 'Computer',
    price: '$650,00',
    image: 'https://images.pexels.com/photos/4005569/pexels-photo-4005569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

function renderProducts(arr){
    for (product of arr){
        const productCart = document.createElement('div')
        productCart.classList.add('product-card')

        const productImg = document.createElement('img')
        productImg.setAttribute('src',product.image)
        
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const productInfoDiv = document.createElement('div')
        
        const productPrice = document.createElement('p')
        productPrice.innerText = product.price
        const productName = document.createElement('p')
        productName.innerText = product.name
        
        const productInfoFigure = document.createElement('figure')
        const productImgCar = document.createElement('img')
        productImgCar.setAttribute('src','./icons/bt_add_to_cart.svg')  
        
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        
        productInfoFigure.appendChild(productImgCar)

        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)

        productCart.appendChild(productImg)
        productCart.appendChild(productInfo)

        cardsContainer.appendChild(productCart)
    }
}

renderProducts(productList)