var products = [
  {
    id: 1,
    name: "oppo a5",
    img: 'img/phone1.jpg',
    price: 165,
    description: "oppo a5 hien tai, tre trung",
  },
  {
    id: 2,
    name: "iphone 11",
    img: 'img/phone2.jpg',
    price: 165,
    description: "iphone 11 pro max",
  },
  {
    id: 3,
    name: "xiaomi n12",
    img: 'img/phone3.jpg',
    price: 165,
    description: "xiaomi n12 sieu dinh",
  },
  {
    id: 4,
    name: "sam sung a50",
    img: 'img/phone4.jpg',
    price: 165,
    description: "samsung a 50 thiet ke sang trong",
  }
]
//loop and get object from array products
products.forEach(getItem);

function getItem(item, index) {
  var render = document.getElementById("cart-products");
  //style div parent
  var div1 = document.createElement('div');
  div1.setAttribute('class', 'content');
  //style img
  var img = document.createElement('img');
  img.setAttribute('src', item.img)
  //style div-content
  var div2 = document.createElement('div');
  div2.setAttribute('class', 'content_item');
  var h3 = document.createElement('h3');
  h3.innerHTML = item.name;
  var p = document.createElement('p');
  p.innerHTML = item.description;
  //button
  var button = document.createElement('button');
  button.setAttribute('class', 'js-button-addtocart btn-addtocart');
  button.innerHTML = 'Add to Cart';
  button.onclick = function () { addCart(item); }

  //structure content
  div2.appendChild(h3);
  div2.appendChild(p);
  div1.appendChild(img);
  div1.appendChild(div2);
  div1.appendChild(button);
  render.appendChild(div1);
}
//Add to cart
function addCart(products) {
  console.log(products);
  var data = JSON.parse(localStorage.getItem('CART'))
  var cartItem = data ? data : [];
  var cart = cartItem;
  var count = 1;
  var index = findProductInCart(cart, products);
  if (index !== -1) {
    cart[index].count += count;
  } else {
    cart.push({
      products,
      count
    });
  }
  // item.disabled = true;
  localStorage.setItem('CART', JSON.stringify(cart));
}
function findProductInCart(cart, products) {
  var index = -1;
  // console.log(cart)
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].products.id === products.id) {
        index = i;
        break;
      }
    }
  }
  return index;
}



//----------------------------
function clickCart(){
    var btnClick = document.getElementsByClassName('btn-click');
    var count = 1;
    var cart = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < btnClick.length; i++) {
  
      var indexBtn = btnClick[i];
      indexBtn.addEventListener('click', function (event) {
        var row = event.target.dataset.id;
        if (cart) //neu trong cart co roi thi xu li
        //nghia la rang
         {
          for (var i = 0; i < cart.length; i++) {
            if (row === cart[i]['id']) {
              cart[i]['count']++;
              break;
            }
            else if (i === (cart.length - 1)) {
              cart.push({ id: row, count: count });
              break;
            }
          }
        } else //trong cart rong thi cung gan vo mang 
         {
          cart = [];
          cart.push({ id: row, count: count });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        numberCart();
      });
    }
  }


  //---------------------
  function render(products) {
    var result = document.getElementById('cart-products');
    for (var i = 0; i < products.length; i++) {
      item = document.createElement('div');
      item.classList.add('content-item');
      border_content = document.createElement('div');
      border_content.classList.add('border-content');
      item.appendChild(border_content);
      content_img_top = document.createElement('div');
      content_img_top.classList.add('content-img-top');
      border_content.appendChild(content_img_top);
      // Product Image
      part = document.createElement('img');
      part.src = products[i].img;
      content_img_top.appendChild(part);
      content_item_body = document.createElement('div');
      content_item_body.classList.add('content-item-body');
      border_content.appendChild(content_item_body);
      // Product Name
      part = document.createElement('p');
      part.innerHTML = products[i].name;
      part.classList.add('content-item-title');
      content_item_body.appendChild(part);
      // Product Description
      part = document.createElement('p');
      part.innerHTML = products[i].des;
      part.classList.add('content-item-des');
      content_item_body.appendChild(part);
      // Product Price
      part = document.createElement("p");
      part.innerHTML = 'Price: ' + products[i].price + 'VND';
      part.classList.add("content-item-price");
      content_item_body.appendChild(part);
      // Add to cart
      part = document.createElement('input');
      part.type = 'button';
      part.value = 'Add to Cart';
      part.classList.add('btn-click');
      // part.onClick = cart.data;
      part.dataset.id = products[i].id;
      content_item_body.appendChild(part);
      result.appendChild(item);
    }
  }