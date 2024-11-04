let allProuduct = document.querySelector(".products");

function drawProducts(product = []) {
    let products = 
    JSON.parse(localStorage.getItem("productInCart"))|| product;
  
    let y = products.map((item) => {
        return `
        <div class="products d-flex justify-content-between align-items-center flex-nowrap">
        <div class="product-items h-100 ">
            <img
                src ="${item.ImageUrl}">
            <h4>${item.tittle}</h4>
            <p>${item.discription} </p>
            <button class="add-to-cart" onclick="remove(${item.id})" >remove from cart</button>
        </div>
    </div>`
    });
    allProuduct.innerHTML = y;
}
drawProducts();

function removeitemfromcart(id) {
    if (productInCart) {
        let items = JSON.parse(productInCart)
        let filteredItem = items.filter((item) => item.id !== id);
        localStorage.setItem('productInCart', JSON.stringify(filteredItem));
    }

}