
    const buttoncart = document.querySelectorAll('#button-cartt');
    buttoncart.forEach(e => {
        e.addEventListener('click', addtocartclick)
    });

    const buyButton = document.querySelector('#button-buy');
    buyButton.addEventListener('click', buyButtonclick);

    const shoppingCartsItemsContainer = document.querySelector('.list');





    function addtocartclick(event) {
        const button = event.target;

        const item = button.closest('.article-productos')


        const itemTitle = item.querySelector('.titledescription').textContent.trim();

        const itemPrice = item.querySelector('#price').textContent.trim();

        const itemImage = item.querySelector('#img-src').src;


        let productstitle = JSON.parse(localStorage.getItem('title')) || [];

        productstitle.push(itemTitle);

        localStorage.setItem('title', JSON.stringify(productstitle));

        let productsimage = JSON.parse(localStorage.getItem('image')) || [];

        productsimage.push(itemImage);


        localStorage.setItem('image', JSON.stringify(productsimage));

        let productsprice = JSON.parse(localStorage.getItem('price')) || [];

        productsprice.push(itemPrice);

        localStorage.setItem('price', JSON.stringify(productsprice));


        addItemToShoppingCart(itemTitle, itemPrice, itemImage);
    }

    function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
        let titleparse = localStorage.getItem('title');
        const title = JSON.parse(titleparse);
        for (let i = 0; i < title.length; i++) {
            if (title[i] === itemTitle ) {
                titlep = title[i];

            }

        }

        let imageparse = localStorage.getItem('image');
        const image = JSON.parse(imageparse);
        for (let i = 0; i < image.length; i++) {
            if (image[i] === itemImage ) {
                imagep = image[i]
            }

        }

        let priceparse = localStorage.getItem('price');
        const price = JSON.parse(priceparse);
        for (let i = 0; i < price.length; i++) {
            if (price[i] === itemPrice ) {
                pricep = price[i]
            }

        }

        const shoppinCartRow = document.createElement('li');
        const shoppingCartContent = `
   
          
               <div class="todo" >
                  <div class="div-img">
                     <img id="imgsrc" src=${imagep} alt="">
                  </div>
                  <div class="div-x3">
                      <div class="div-title">
                          <p id="title-carttt"class="title-cart">
                             ${titlep}
                          </p>
                      </div>
                      <div class="div-price">
                          <p id="pricep">
                             ${pricep}
                          </p>
                      </div>
                       <div class="div-length">
                         <input type="number" value="1">
                         <button type="button"><i class="fa-solid fa-trash-can"></i></button>
                       </div>

                   </div>
                
               
               
              </div>`;

        shoppinCartRow.innerHTML = shoppingCartContent;
        shoppingCartsItemsContainer.append(shoppinCartRow);
        shoppinCartRow.querySelector('.div-length button ').addEventListener('click', removeShoppingCartItem);
        shoppinCartRow.querySelector('.div-length input').addEventListener('change', quantityChange);
        updateShoppingCartTotal()
    }

    function updateShoppingCartTotal() {
        let total = 0;

        const shoppingCarttotal = document.querySelector('.total-p');

        const shoppingCartItems = document.querySelectorAll('.list li');

        shoppingCartItems.forEach(e => {
            const shoppingCartItemPriceElement = e.querySelector('.div-price p');

            const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace("$", ""));

            const shoppingCartItemQuantityElement = e.querySelector('.div-length input');
            const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);
            total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
        })
        shoppingCarttotal.innerHTML = `$${total.toFixed(2)}`;
        let span = document.querySelector('span');
        span.innerText = shoppingCartItems.length;


    }

    function removeShoppingCartItem(event) {
        const buttonClicked = event.target

        let img = document.querySelector("#imgsrc").src;
        console.log(img);
        let titlep = document.querySelector('#title-carttt').textContent.trim();
        console.log(titlep);
        let pricep = document.querySelector('#pricep').textContent.trim();
        console.log(pricep);

        if (buttonClicked) {
            let titleparse = localStorage.getItem('title');
            const title = JSON.parse(titleparse);
            const titlefilter = title.filter(e => e != titlep)
            localStorage.setItem('title', JSON.stringify(titlefilter));

        }
        if (buttonClicked) {
            let imageparse = localStorage.getItem('image');
            const image = JSON.parse(imageparse);
            const imagefilter = image.filter(e => e != img)

            localStorage.setItem('image', JSON.stringify(imagefilter));

        }
        if (buttonClicked) {
            let priceparse = localStorage.getItem('price');
            const prices = JSON.parse(priceparse);
            const pricefilter = prices.filter(e => e != pricep)

            localStorage.setItem('price', JSON.stringify(pricefilter));
            console.log(localStorage);
        }






        buttonClicked.closest('.list li').remove();

        updateShoppingCartTotal();

    };

    function quantityChange(event) {
        const input = event.target
        if (input.value <= 0) {
            input.value = 1
        }
        updateShoppingCartTotal();
    }

    const listli = document.querySelector('.list')



    let displayCart = document.querySelector('.container');
    function buyButtonclick() {
        shoppingCartsItemsContainer.innerHTML = "";
        updateShoppingCartTotal();
        displayCart.style.display = 'none';
        alert('Gracias por su compra');
        localStorage.removeItem('image');
        localStorage.removeItem('price');
        localStorage.removeItem('title');

    }
    let buttonCart = document.querySelector('#button-cart');


    buttonCart.addEventListener('click', function (event) {

        if (displayCart.style.display === 'none') {
            displayCart.style.display = 'block';
        } else {
            displayCart.style.display = 'none';
        }
    })

    let logout = document.querySelector('#logout');

    logout.addEventListener('click', function (event) {
        localStorage.clear();
    });

    const buttoncarts = document.querySelectorAll('#button-cartts');
    buttoncarts.forEach(e => {
        e.addEventListener('click', addtocartclicks)
    });

    function addtocartclicks() {

        const itemTitle = document.querySelector('#namedetail').textContent.trim();
        const itemPrice = document.querySelector('#pricedetail').textContent.trim();
        const itemImage = document.querySelector('#imgdetail').src;

        let productstitle = JSON.parse(localStorage.getItem('title')) || [];
        productstitle.push(itemTitle);
        localStorage.setItem('title', JSON.stringify(productstitle));

        let productsimage = JSON.parse(localStorage.getItem('image')) || [];
        productsimage.push(itemImage);
        localStorage.setItem('image', JSON.stringify(productsimage));


        let productsprice = JSON.parse(localStorage.getItem('price')) || [];
        productsprice.push(itemPrice);
        localStorage.setItem('price', JSON.stringify(productsprice));

        addItemToShoppingCart(itemTitle, itemPrice, itemImage);


    }

    document.addEventListener('DOMContentLoaded', () => {
        let titleparse = localStorage.getItem('title');
        let imageparse = localStorage.getItem('image');
        let priceparse = localStorage.getItem('price');

        if (titleparse && imageparse && priceparse) {
            let titles = JSON.parse(titleparse);
            let images = JSON.parse(imageparse);
            let prices = JSON.parse(priceparse);

            for (let i = 0; i < titles.length; i++) {
                addItemToShoppingCart(titles[i], prices[i], images[i]);
            }
        }
    });



