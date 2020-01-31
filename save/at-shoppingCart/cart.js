function addToTable() {
  var cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = [];
  }
  var product = JSON.parse(localStorage.getItem("products"));
  var showcart = document.getElementById("js-body-cart");
  // showcart.innerHTML = "";
  for (var i = 0; i < cart.length; i++) {
    for (var j = 0; j < product.length; j++) {
      if (cart[i].id === product[j].id) {
        var tr = document.createElement("tr");

        var th1 = document.createElement("td");
        th1.scope = "row";
        th1.textContent = i + 1;
        tr.appendChild(th1);

        var td1 = document.createElement("td");
        tr.appendChild(td1);

        var img1 = document.createElement("img");
        img1.src = product[j].img;
        td1.appendChild(img1);

        var td2 = document.createElement("td");
        td2.textContent = product[j].name;
        tr.appendChild(td2);

        var td3 = document.createElement("td");
        tr.appendChild(td3);

        var btn1 = document.createElement("button");
        btn1.className = "btn btn-primary";
        btn1.textContent = "-";
        btn1.dataset.id = cart[i].id;
        btn1.addEventListener("click", reduce);
        td3.appendChild(btn1);

        var input = document.createElement("input");
        input.type = "number";
        input.value = cart[i].count;
        // input.addEventListener("change", changeQuantity);
        td3.appendChild(input);

        var btn2 = document.createElement("button");
        btn2.className = "btn btn-primary";
        btn2.textContent = "+";
        btn2.dataset.id = cart[i].id;
        btn2.addEventListener("click", increase);
        td3.appendChild(btn2);

        var td4 = document.createElement("td");
        td4.textContent = product[j].price;
        tr.appendChild(td4);

        var td6 = document.createElement("td");
        td6.className = "td6";
        td6.textContent = product[j].price * cart[i].count;
        tr.appendChild(td6);

        var td5 = document.createElement("td");
        tr.appendChild(td5);

        var btn3 = document.createElement("button");
        btn3.className = "btn btn-remove";
        btn3.textContent = "X";
        btn3.dataset.id = cart[i].id;
        btn3.addEventListener("click", remove);
        td5.appendChild(btn3);

        showcart.appendChild(tr);
      }
    }
  }

  var totalCart = document.getElementById("js-total-cart");
  // totalCart.innerHTML = "";

  var tr2 = document.createElement("tr");

  var td9 = document.createElement("td");
  td9.setAttribute("colspan", "4");
  tr2.appendChild(td9);

  var td10 = document.createElement("td");
  td10.textContent = "Total";
  tr2.appendChild(td10);

  var td11 = document.createElement("td");
  td11.innerText = total();
  // td11.innerText = sum;
  tr2.appendChild(td11);

  var td12 = document.createElement("td");
  tr2.appendChild(td12);

  totalCart.appendChild(tr2);
}

addToTable();
numberCart();
function total() {
  var cart = JSON.parse(localStorage.getItem("cart"));
  var product = JSON.parse(localStorage.getItem("product"));
  var finalTotal = 0;
  for (var j = 0; j < product.length; j++) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id === product[j].id) {
        finalTotal += product[j].price * cart[i].count;
      }
    }
  }
  return finalTotal;
}
//remove product
function remove(brm) {
  var cart = JSON.parse(localStorage.getItem("cart"));
  var brmove = +brm.target.dataset.id;

  console.log(brmove);
  for (var i = 0; i < cart.length; i++) {
    if (brmove === cart[i].id) {
      cart.splice(i, 1);
    }
    var del = this.parentNode.parentNode;
    del.remove();
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  addToTable();
  numberCart();
}

//increase quantity of product
function increase(bIncre) {
  var inc = +bIncre.target.dataset.id;
  var cart = JSON.parse(localStorage.getItem("cart"));
  for (var i = 0; i < cart.length; i++) {
    if (inc === cart[i].id) {
      if (cart[i].count >= 1) {
        cart[i].count = cart[i].count + 1;
      }
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  addToTable();
}

//reduce quantity of product
function reduce(bRedu) {
  var redu = +bRedu.target.dataset.id;
  var cart = JSON.parse(localStorage.getItem("cart"));
  for (var i = 0; i < cart.length; i++) {
    if (redu === cart[i].id) {
      if (cart[i].count > 0) {
        cart[i].count = cart[i].count - 1;
      } else if (cart[i].count === 0) {
        cart.splice(i, 1);
      }
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  addToTable();
}