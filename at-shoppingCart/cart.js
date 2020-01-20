var data = JSON.parse(localStorage.getItem('cart'))
var cartItem = data ? data : [];
var cart = cartItem;
var showCart = function () {
  data.forEach(getCart);
}
function getCart(item, index) {
  var product = item.products;
  //call tr element from DOM
  var table = document.getElementById("cart-item");
  var row = document.createElement('tr');
  table.appendChild(row);
  //Create td1 img
  var td1 = document.createElement('td');
  var img = document.createElement('img');
  img.src = product.img;
  row.appendChild(td1);
  td1.appendChild(img);
  //create td2 name
  var td2 = document.createElement('td');
  td2.innerHTML = product.name;
  row.appendChild(td2);
  //create td3 price
  var td3 = document.createElement('td');
  td3.innerHTML = product.price;
  row.appendChild(td3);
  //create td4 quantity
  var td4 = document.createElement('td');
  td4.innerHTML = item.count;
  row.appendChild(td4);
  //create subtotal
  var td5 = document.createElement('td');
  td5.innerHTML = product.price * item.count;
  row.appendChild(td5);
  //create button remove
  var td6 = document.createElement('td');
  var btn_rm = document.createElement('button');
  btn_rm.innerHTML = 'Remove';
  // btn_rm.setAttribute = ('class', 'btn-rm');
  btn_rm.className = 'btn-rm';
  // btn_rm.addEventListener('click', function(){
  //   deleteItem();
  // });
  row.appendChild(td6);
  td6.appendChild(btn_rm);
}
window.onload = showCart();

//delete item
function deleteItem() {
  var deleteBtn = document.getElementsByClassName('btn-rm');
  for (var i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', function (event) {
      var btnValue = event.target.dataset.id;
      var cart = localStorage.getItem('cart');
      cart = cart ? JSON.parse(cart) : [];
      for (var i = 0; i < cart.length; i++) {
        if (btnValue === cart[i]['id']) {
          cart.splice(i, 1);
        }
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      location.reload();
     // render(JSON.parse(cart));
    //  getCart(JSON.parse(cart));
    })
  }
}
deleteItem();