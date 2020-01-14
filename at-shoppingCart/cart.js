// var saveQuantity;
// if (localStorage.getItem('saveQuantity') === null) {
//   localStorage.setItem('saveQuantity', JSON.stringify(saveQuantity));
// } else {
//   saveQuantity = JSON.parse(localStorage.getItem('saveQuantity'));
//   for (var i = 0; i < getData.length; i++) {
//     saveQuantity.push({
//       id: getData[i].id,
//       number: 1,
//       total: getData[i].price * 1,
//     })
//   }
// }
var getData = JSON.parse(localStorage.getItem('add-cart'));
for (var i = 0; i < getData.length; i++) {
  var box = document.getElementById('bodyTable');
  box.innerHTML +=
    "<tr id='remove" + (i + 1) + "'>" +
    "<td class='stt'>" + (i + 1) + "</td>" +
    // "<td class='name-product'> <img src='./images/" + getData[i].image + "'/>" + getData[i].name + "</td>" +
    "<td class='name-product'>" + getData[i].name + "</td>" +
    "<td class='quantity'><input value='1' id='" + (i + 1) + "' onchange='changeFunction(" + (i + 1) + ")' class='quatity-detail' type='number' min='1'/></td>" +
    "<td class='price'>$ <input disabled='disabled' class='input-price' id='price" + (i + 1) + "' value='" + getData[i].price + "' /></td>" +
    "<td class='total' id='total" + (i + 1) + "'>$ " + getData[i].price + "</td>" +
    "<td class='delete' id='delete" + (i + 1) + "' onclick='deleteItem(" + (i + 1) + ")'><i class='fa fa-times'></i></td>" +
    "</tr>";
}
function changeFunction(id) {
  var quantity = document.getElementById("" + id).value;
  var price = document.getElementById("price" + id).value;
  var total = quantity * price;
  document.getElementById("total" + id).innerHTML = "$ " + total;
}
function deleteItem(id) {
  var remove = document.getElementById("remove" + id);
  remove.remove();
  getData.splice(id - 1, 1);
  localStorage.setItem('add-cart', JSON.stringify(getData));
}