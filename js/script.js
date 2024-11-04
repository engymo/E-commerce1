/* ____________________check user name_____________________*/
let links = document.getElementById('link');
let userInfo = document.getElementById('user_info');
let users = document.getElementById('users');

if (localStorage.getItem('username')) {
    links.remove();
    userInfo.style.display = "block";
    users.innerHTML = localStorage.getItem("username");
}

/*-------------------draw prouduct in page -------------------*/

let allProuduct = document.querySelector(".products");
let count = document.querySelector('.counter');
let cartProuducts = document.querySelector('.cart-product div');
let shoppingCart = document.querySelector('.bi-bag-heart-fill');
let cartProuduct = document.querySelector('.cart-product');

/*-------------------draw prouduct in page -------------------*/

let product = [
    {
        id: 1,
        tittle: "couch",
        discription: "modern furinture",
        ImageUrl: "image/download (1).jpg"

    }
    , {
        id: 3,
        tittle: "bookcase",
        discription: "modern furinture",
        ImageUrl: "image/download (4).jpg"

    }
    , {
        id: 4,
        tittle: "table",
        discription: "modern furinture",
        ImageUrl: "image/Decorating 101_ Interior Design Basics.jpg"

    }
    , {
        id: 5,
        tittle: "chair table",
        discription: "modern furinture",
        ImageUrl: "image/9 Stylish Coffee Tables With Nested Ottomans.jpg"

    }

]
function drawItem() {
    let y = product.map((item) => {
        return `
       
        <div class="products d-flex justify-content-between align-items-center flex-nowrap">
        <div class="product-items h-100 ">
            <img src ="${item.ImageUrl}">
            <h4>${item.tittle}</h4>
            <p>${item.discription} </p>
            <button class="add-to-cart" onClick="add(${item.id})" >add to cart</button>
            <i class="bi bi-heart-fill"></i>
        </div>
    </div>

        `
    })
    allProuduct.innerHTML = y;
}
drawItem()

// to put all item in cart icon
// mean if we have old product /*? (check if it ):if not do that */
let itemPage = JSON.parse(localStorage.getItem("productInCart")) ?JSON.parse(localStorage.getItem("productInCart")):[];
function add(id) {
    if(localStorage.getItem('username')){
        let selectedItems = product.find((item) => item.id === id);
        cartProuducts.innerHTML += `<p>${selectedItems.tittle}</p>`
    // to put all item in cart page
        itemPage = [...itemPage , selectedItems]
        localStorage.setItem("productInCart",JSON.stringify(itemPage));
    
        let cartProuductsLenght = document.querySelectorAll('.cart-product div p');
        count.style.display = "block";
        count.innerHTML = cartProuductsLenght.length;
    }else{
        window.location = "login.html";
    }
}

/*_________________bag-heart-fill___________________*/

shoppingCart.addEventListener("click", function () {
    if (cartProuducts.innerHTML != "") {
        if (cartProuduct.style.display == "block") {
            cartProuduct.style.display = "none"
        } else {
            cartProuduct.style.display = "block"
        }
    }
});

/*________________________logout________________________________ */
let logOut = document.getElementById('log_out');
logOut.addEventListener('click', function(){
    localStorage.clear();
    setTimeout(() => {
        window.location = "register.html"
    }, 1000);

})