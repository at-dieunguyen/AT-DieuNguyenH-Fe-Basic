products.forEach(getItem);

function getItem(item, index) {
  var render = document.getElementById("cart-products");
  var div1 = document.createElement('div');
  div1.setAttribute('class', 'content');
  //style img
  var img = document.createElement('img');
  img.setAttribute('src', item.img)
  img.setAttribute('class', 'img-phone')
  //style div-content
  var div2 = document.createElement('div');
  div2.setAttribute('class', 'content_item');
  var h3 = document.createElement('h3');
  h3.innerHTML = item.name;
  var p1 = document.createElement('p');
  p1.innerHTML = item.des;
  var p2 = document.createElement('p')
  p2.innerHTML ="$" +item.price;
  //button
  var button = document.createElement('button');
  button.setAttribute('class', 'btn-addcart');
  button.innerHTML = 'Add to Cart';
  button.onclick = function () { addCart(item); }

  //structure content
  div2.appendChild(h3);
  div2.appendChild(p1);
  div2.appendChild(p2)
  div1.appendChild(img);
  div1.appendChild(div2);
  div1.appendChild(button);
  render.appendChild(div1);
}
//Add cart
function addCart(products) {
  var data = JSON.parse(localStorage.getItem('cart'))
  var cartItem = data ? data : [];
  var cart = cartItem;
  var count = 1;
  var index = findProduct(cart, products);
  if (index !== -1) {
    cart[index].count += count;
  } else {
    cart.push({ products, count });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  numberCart();
}
function findProduct(cart, products) {
  var index = -1;
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
