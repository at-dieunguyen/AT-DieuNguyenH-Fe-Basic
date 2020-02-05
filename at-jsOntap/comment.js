function addComment() {
  var btnAdd = document.getElementsByClassName('btn-input')[0];
  btnAdd.addEventListener('click', function() {
  var comment = localStorage.getItem('comment');
  comment = comment ? JSON.parse(comment) : [];
  comment.push(document.getElementById('comment-input').value);
  localStorage.setItem('comment', JSON.stringify(comment));
  render();
})
}
function render() {
  var comment = JSON.parse(localStorage.getItem('comment'));
  var div1 = document.getElementById('commented');
  div1.innerHTML ='';
  document.getElementById('comment-input').value = '';
  for (var i = 0; i < comment.length; i++) {
    var div2 = document.createElement('div');
    div2.classList = 'div2';
    div1.appendChild(div2);
    //div3
    var div3 = document.createElement('div');
    div3.classList = 'div3';
    div2.appendChild(div3);
    //img
    var img = document.createElement('img');
    img.src = 'img/dieu.jpg';
    img.classList = 'img-avatar';
    div3.appendChild(img);
    //div4
    var div4 = document.createElement('div');
    div4.classList = 'div4';
    div3.appendChild(div4);
    //name
    var name = document.createElement('p');
    name.innerHTML = 'Dieu: ';
    div4.appendChild(name);
    //comment
    var cmt = document.createElement('p');
    cmt.innerHTML = comment[i];
    div4.appendChild(cmt);
    //button
    var btn = document.createElement('button');
    btn.setAttribute('data-id',i);
    div2.appendChild(btn);
    btn.innerHTML = 'remove';
    btn.classList = 'btn-remove';
  }
  deleteCmt();
}
function deleteCmt() {
  var comment = localStorage.getItem('comment');
  var btnDel = document.getElementsByClassName('btn-remove');
  comment = comment ? JSON.parse(comment) : [];
  for (var i = 0; i < btnDel.length; i++) {
    btnDel[i].addEventListener('click', function (event) {
      var remove = event.target.dataset.id;
      comment.splice(remove, 1);
      localStorage.setItem('comment', JSON.stringify(comment));
      render();
    });
  }
}
addComment();
render();
