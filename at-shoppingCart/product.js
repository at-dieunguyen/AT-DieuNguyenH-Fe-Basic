var products = [{
  id: '1', 
  img: 'img/phone1.jpg', 
  name: 'OPPO A5', 
  des: 'OPPO A5 2020 64GB', 
  price: '4290000' 
},
  {id: '2', 
  img: 'img/phone2.jpg', 
  name: 'GALAXY A10', 
  des: 'Samsung Galaxy A10s', 
  price: '3390000' 
},
  {id: '3', 
  img: 'img/phone3.jpg', 
  name: 'iPhone 11', 
  des: 'iPhone 11 64GB Red', 
  price: '218000000' 
},
  {id: '4', 
  img: 'img/phone4.jpg', 
  name: 'Vivo U10', 
  des: 'Vivo U10 64GB thời trang', 
  price: '3990000' 
},
  {id: '5', 
  img: 'img/phone5.jpg', 
  name: 'Redmi 8', 
  des: 'Xiaomi Redmi 8 4GB/ 64GB ', 
  price: '3290000' 
},
 { id: '6', 
  img: 'img/phone6.jpg',
  name: 'Redmi 5i', 
  des: 'Redmi 5i 3GB/ 32GB', 
  price: '3690000' 
},
 { id: '7', 
  img: 'img/phone7.jpg', 
  name: 'Galaxy Fold', 
  des: 'Samsung Galaxy Fold 64GB', 
  price: '50000000' },
{ id: '8', 
  img: 'img/phone8.jpg', 
  name: 'iPhone 11 Pro max', 
  des: 'iPhone 11 Pro Max 256GB', 
  price: '2300004389000' }
]

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
    part.classList.add('btn-primary');
    part.dataset.id = products[i].id;
    content_item_body.appendChild(part);
    result.appendChild(item);
  }
}
render(products)