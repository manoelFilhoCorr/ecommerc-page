// function menu
const conteinerMenu = document.querySelector('.section-conteiner-menu');
conteinerMenu.style.display = 'none';
const activeMenu = () => {
    if(conteinerMenu.style.display === 'none'){
        conteinerMenu.style.display = 'flex'
    }else{
        conteinerMenu.style.display = 'none'
    }

};
// Function active Cart Lembret
const activCart = () =>{
    const conteiner__cart = document.querySelector(".cardCart-conteiner-head-01");
    const span = document.getElementById('quntProdAddCart');
    span.style.display = 'none';
    quantProdSpan = 0;
    if(conteiner__cart.style.display === 'none'){
        conteiner__cart.style.display = 'flex'
    }else{
        conteiner__cart.style.display = 'none'
    }
}
// fim function active Cart

// function Active troc imagem
const activeImg = () =>{
    const section__imgTroc = document.querySelector(".section-img");
    if(section__imgTroc.style.display === 'none'){
        section__imgTroc.style.display = 'flex'
    }else{
        section__imgTroc.style.display = 'none'
    }
}
// fim function Active troc imagem

// inicio function translateimg
document.getElementById(`button-conteiner-imgs-pcoes-product-0`).style.border = '3px solid hsl(220, 13%, 13%)';
const tralateImg = (button) =>{
    const buttonImg = document.getElementById("button-conteiner-imgs-pcoes-product");
    const img = document.getElementById("img-product");
    for (let index = 0; index < listProduct.length; index++){
        if(button === index){
            img.src = listProduct[index].url;
            document.getElementById(`button-conteiner-imgs-pcoes-product-${index}`).style.border = '3px solid hsl(220, 13%, 13%)';
        }else{
            document.getElementById(`button-conteiner-imgs-pcoes-product-${index}`).style.border = 'hidden';
        }
    }
}
// inicio function translateimg

// incio function tocImgClickButton
let valorImgAQtual = 1;
const translateImgClick = (typeButton) =>{
    const img = document.getElementById("img-product-02");
    const imgD = document.getElementById("img-product");
    if(typeButton === 'progress'){
        if(valorImgAQtual === 4){
            valorImgAQtual = 4;
            img.src = `images/image-product-${valorImgAQtual}.jpg`;
            imgD.src = `images/image-product-${valorImgAQtual}.jpg`;
        }else{
            valorImgAQtual += 1;
            img.src = `images/image-product-${valorImgAQtual}.jpg`;
            imgD.src = `images/image-product-${valorImgAQtual}.jpg`;
        }
    }else{
        if(valorImgAQtual === 1){
            valorImgAQtual = 1;
            img.src = `images/image-product-${valorImgAQtual}.jpg`;
            imgD.src = `images/image-product-${valorImgAQtual}.jpg`
        }else{
            valorImgAQtual -= 1;
            img.src = `images/image-product-${valorImgAQtual}.jpg`;
            imgD.src = `images/image-product-${valorImgAQtual}.jpg`
        }
    };

}
// Fim function tocImgClickButton

// inicio function quantProduct
let quantProd = 0;
const quantProduct = (typButton) =>{
    const quantP = document.querySelector(".quantProduct-conteiner-03-conteiner-03-section-02-section-01");
    if(typButton === 'p'){
        quantProd += 1;
        quantP.innerHTML = quantProd;
    }else{
        if(quantProd === 1){
            quantProd = 1
            quantP.innerHTML = quantProd;
        }else{
            quantProd -= 1;
            quantP.innerHTML = quantProd;
        }
    }
    
}
// fim function quantProduct

// inicio function addProductListCart
let quantProdSpan = 0;
document.querySelector(".cardCart-conteiner-head-01").style.display = 'none';
const addProductListCart = () =>{
    const span = document.getElementById('quntProdAddCart');
    const conteiner__cart = document.querySelector(".cardCart-conteiner-head-01");
    if(conteiner__cart.style.display === 'none'){
        span.style.display = 'flex';
        quantProdSpan += 1;
    }else{
        span.style.display = 'none';
        quantProdSpan = 0;
    }
    span.innerHTML = quantProdSpan;

    const quantP = document.querySelector(".quantProduct-conteiner-03-conteiner-03-section-02-section-01");
    listProductCart.push(
        {
           url: 'images/image-product-1.jpg',
           nameProduct: 'Fall limited edition snakers',
           valorProduct: 125.00,
           quantProductL: parseInt(quantP.innerHTML),
           valorTotalProduct: parseInt(quantP.innerHTML) * 125,
        }
    );
    loopAddProductard();
}
// fim function addProductListCart

// inicio function loopAddProductListCart
const loopAddProductard = () =>{
    const articleCart = document.querySelector(".cardCart-conteiner-head-01");
    const conteiner__cart = document.querySelector(".cardCart-conteiner-head-01");
    articleCart.innerHTML = '';
    for (let index = 0; index < listProductCart.length; index++) {
        articleCart.innerHTML += 
        `<div class="conteiner-dados-product">
            <h2 class="title-cart">
                Cart
            </h2>
            <hr class="hrCart">
            <div class="conteinerInformCart">
                <img src="${listProductCart[index].url}" alt="imgProduct-cart" class="imgProduct-cart">
                <div class="conteiner-conteinerInformCart">
                <h2 class="name-product-cart">
                        ${listProductCart[index].nameProduct}
                    </h2>
                    <div class="conteiner-conteiner-conteinerInformCart">
                        <span class="quntValor-product">
                        ${listProductCart[index].valorProduct} x ${listProductCart[index].quantProductL}
                        </span>
                        <span class="valorTotal-product">
                            $${listProductCart[index].valorTotalProduct}
                        </span>
                    </div>
                </div>
                <button onclick="dellProductListCart(${index})" class="deletInforCart">
                    <img src="images/icon-delete.svg" alt="img-lixo-Delet" class="img-lixDelet">
                </button>
            </div>
            <button class="button-conteinerInformCart">
                Checkout
            </button>
        </div>`;
        
    }
}
// fim function loopAddProductListCart

// inicio function dellProductListCart
const dellProductListCart = (parmButton) =>{
    const conteiner__cart = document.querySelector(".cardCart-conteiner-head-01");
    listProductCart.splice(parmButton, 1);
    loopAddProductard();
    if(conteiner__cart.innerHTML === ''){
        conteiner__cart.innerHTML = 
        `<h2 class="menssageCartVaz">
            Your cart is empty
        </h2>`;
    }
}
// fim function dellProductListCart
