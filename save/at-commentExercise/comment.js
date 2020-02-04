function btnAddcmt() {
  var btnAdd = document.getElementById('button-add');
  btnAdd.addEventListener('click', addComment);
  render();
}
btnAddcmt();
function addComment() {
  var comment = localStorage.getItem('comment');
  comment = comment ? JSON.parse(comment) : [];
  comment.push(document.getElementById('comment-input').value);
  localStorage.setItem('comment', JSON.stringify(comment));
}
function render() {
  var comment = JSON.parse(localStorage.getItem('comment'));
  var row = document.getElementById('commented');
  for (var i = 0; i < comment.length; i++) {
    var text = document.createElement('div');
    text.classList = 'comment-row';
    row.appendChild(text);
    
    
    //img
    var img = document.createElement('img');
    img.src = 'img/dieu.jpg';
    text.appendChild(img);  
    img.classList = 'img-avt';
    //name
 
    //name
    var name = document.createElement('p');
    name.innerHTML = 'Diệu: ';
    name.classList = 'text-name';
    text.appendChild(name);
    //comment
    var p = document.createElement('p');
    p.innerHTML = comment[i];
    p.classList = 'text-comment';
    text.appendChild(p);
    //button
    var btn = document.createElement('button');
    btn.innerHTML = 'Remove';
    btn.classList = 'btn-remove';
    btn.setAttribute('data-id', 'index');
    text.appendChild(btn);
    // btn.addEventListener('click', deleteCmt);
  }
}
function deleteCmt() {
  var comment = localStorage.getItem('comment');
  var btnDel = document.getElementsByClassName('btn-remove');
  for (var i = 0; i < btnDel.length; i++) {
    btnDel[index].addEventListener('click', function () {
      //comment = comment ? JSON.parse(comment) : [];
        comment.splice(i, 1);
        console.log(comment[index]);
    })
  }
}
deleteCmt();
