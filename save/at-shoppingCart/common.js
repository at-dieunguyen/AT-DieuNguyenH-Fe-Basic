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
];
localStorage.setItem('products', JSON.stringify(products));

// function countCart(){
//   var countCart = document.getElementsByClassName('cart-products');
//   var cart = JSON.parse(localStorage.getItem('cart'));
//   var count = 0;
//   for (var i = 0; i < cart.length; i++){
//     console.log(cart[i].count);
//     count += cart[i].count;
//    }
//   countCart.innerHTML = count;
// };
function numberCart() {
  var resultCart = document.getElementById("js-cart-count");
  localStorage.setItem("products", JSON.stringify(products));
  var cart = JSON.parse(localStorage.getItem("cart"));
  var number = 0;
  for (var i = 0; i < cart.length; i++) {
    number += Number(cart[i]["count"]);
  }
  resultCart.innerHTML = number;
}
numberCart();