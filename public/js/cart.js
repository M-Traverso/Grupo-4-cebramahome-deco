
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

    const itemId = item.querySelector('#pid').textContent.trim();

    const itemIdUser = item.querySelector('#userid').textContent.trim();

    let productstitle = JSON.parse(localStorage.getItem('title')) || [];

    productstitle.push(itemTitle);

    localStorage.setItem('title', JSON.stringify(productstitle));

    let productsimage = JSON.parse(localStorage.getItem('image')) || [];

    productsimage.push(itemImage);


    localStorage.setItem('image', JSON.stringify(productsimage));

    let productsprice = JSON.parse(localStorage.getItem('price')) || [];

    productsprice.push(itemPrice);

    localStorage.setItem('price', JSON.stringify(productsprice));

    let productsid = JSON.parse(localStorage.getItem('id')) || [];

    productsid.push(itemId);

    localStorage.setItem('id', JSON.stringify(productsid));

    let userid = JSON.parse(localStorage.getItem('iduser')) || [];

    userid.push(itemIdUser);

    localStorage.setItem('iduser', JSON.stringify(userid));

    addItemToShoppingCart(itemTitle, itemPrice, itemImage, itemId, itemIdUser);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage, itemId, itemIdUser) {
    let titleparse = localStorage.getItem('title');
    const title = JSON.parse(titleparse);
    for (let i = 0; i < title.length; i++) {
        if (title[i] === itemTitle) {
            titlep = title[i];

        }

    }

    let imageparse = localStorage.getItem('image');
    const image = JSON.parse(imageparse);
    for (let i = 0; i < image.length; i++) {
        if (image[i] === itemImage) {
            imagep = image[i]
        }

    }

    let priceparse = localStorage.getItem('price');
    const price = JSON.parse(priceparse);
    for (let i = 0; i < price.length; i++) {
        if (price[i] === itemPrice) {
            pricep = price[i]
        }

    }

    let idparse = localStorage.getItem('id');
    const id = JSON.parse(idparse);
    for (let i = 0; i < id.length; i++) {
        if (id[i] === itemId) {
            idp = id[i]
        }

    }

    let iduserparse = localStorage.getItem('iduser');
    const iduser = JSON.parse(iduserparse);
    for (let i = 0; i < iduser.length; i++) {
        if (iduser[i] === itemIdUser) {
            iduserp = iduser[i]
        }

    }

    const shoppinCartRow = document.createElement('li');
    const shoppingCartContent = `
   
          
               <div class="todo" >
                  <div class="div-img">
                     <img id="imgsrc" src=${imagep} alt="">
                  </div>
                  <div class="div-x3">
                        <p class="pid" id="idpro">${idp} </p>
                        <p class="pid" id="iduserpro">${iduserp} </p>
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

    let titlep = document.querySelector('#title-carttt').textContent.trim();

    let pricep = document.querySelector('#pricep').textContent.trim();

    let idp = document.querySelector('#idpro').textContent.trim();

    let iduserp = document.querySelector('#iduserpro').textContent.trim();

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

    if (buttonClicked) {
        let idparse = localStorage.getItem('id');
        const id = JSON.parse(idparse);
        const idfilter = id.filter(e => e != idp)

        localStorage.setItem('id', JSON.stringify(idfilter));
        console.log(localStorage);
    }

    if (buttonClicked) {
        let iduserparse = localStorage.getItem('iduser');
        console.log(iduserparse);
        const iduser = JSON.parse(iduserparse);
        console.log(iduser);
        const iduserfilter = iduser.filter(e => e != iduserp)

        localStorage.setItem('iduser', JSON.stringify(iduserfilter));
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





let displayCart = document.querySelector('.container');

function buyButtonclick() {
    const listli = document.querySelectorAll('.list li');
    const data = new URLSearchParams();
    listli.forEach(item => {
      const idProducts = item.querySelector('#idpro').textContent.trim();
      const idUser = item.querySelector('#iduserpro').textContent.trim();
      data.append('product_id', idProducts);
      data.append('user_id', idUser);
    });
    console.log(data.toString());
    let settings = {
      "method": "POST",
      "headers": {
        "content-type": "application/x-www-form-urlencoded"
      },
      "body": data.toString()
    };
    fetch('http://localhost:8080/api/sales/create', settings)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al enviar los datos al servidor');
        }
         return response.json();
      })
      .then(() => {
        shoppingCartsItemsContainer.innerHTML ="";
        updateShoppingCartTotal();
        displayCart.style.display = 'none';
        alert('Gracias por su compra');
        localStorage.removeItem('image');
        localStorage.removeItem('price');
        localStorage.removeItem('title');
        localStorage.removeItem('id');
       
      })
      .catch(error => {
        console.log(error);
      });
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
    const itemId = document.querySelector('#pid').textContent.trim();
    const itemIdUser = document.querySelector('#userid').textContent.trim();

    let productstitle = JSON.parse(localStorage.getItem('title')) || [];
    productstitle.push(itemTitle);
    localStorage.setItem('title', JSON.stringify(productstitle));

    let productsimage = JSON.parse(localStorage.getItem('image')) || [];
    productsimage.push(itemImage);
    localStorage.setItem('image', JSON.stringify(productsimage));


    let productsprice = JSON.parse(localStorage.getItem('price')) || [];
    productsprice.push(itemPrice);
    localStorage.setItem('price', JSON.stringify(productsprice));

    let productsid = JSON.parse(localStorage.getItem('id')) || [];
    productsid.push(itemId);
    localStorage.setItem('id', JSON.stringify(productsid));

    let userid = JSON.parse(localStorage.getItem('iduser')) || [];
    userid.push(itemIdUser);
    localStorage.setItem('iduser', JSON.stringify(userid));

    addItemToShoppingCart(itemTitle, itemPrice, itemImage, itemId,itemIdUser);


}

document.addEventListener('DOMContentLoaded', () => {
    let titleparse = localStorage.getItem('title');
    let imageparse = localStorage.getItem('image');
    let priceparse = localStorage.getItem('price');
    let idparse = localStorage.getItem('id');
    let useridparse = localStorage.getItem('iduser')

    if (titleparse && imageparse && priceparse) {
        let titles = JSON.parse(titleparse);
        let images = JSON.parse(imageparse);
        let prices = JSON.parse(priceparse);
        let idp=JSON.parse(idparse);
        let userid = JSON.parse(useridparse);
        

        for (let i = 0; i < titles.length; i++) {
            addItemToShoppingCart(titles[i], prices[i], images[i],idp[i],userid[i]);
        }
    }
});


