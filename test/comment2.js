var comment;
function getComment() {
  comment = localStorage.getItem('comment')
  comment = comment ? JSON.parse(comment) : [];
}
function setComment() {
  localStorage.setItem('comment', JSON.stringify(comment));
}
//function add comment to local storage
function addComment() {
  var btnAdd = document.getElementsByClassName('btn-input')[0];
  btnAdd.addEventListener('click', function () {
    getComment();
    var inputComment = document.getElementById('comment-input').value;
    if (inputComment === '') {
      alert('Ban phai nhap comment');
    }
    else {
      var object = {
        id: 1,
        text: inputComment,
        isDeleted: false,
        user: {
          id: 1,
          name: 'Dieu Nguyen H.',
          avatar: 'img/dieu.jpg'
        }
      }
      comment.push(object);
      setComment();
      renderComment();
      document.getElementById('comment-input').value = '';
    }
  });
}
//function render comment
function renderComment() {
  getComment();
  var div1 = document.getElementById('commented');
  div1.innerHTML = '';
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
    img.src = comment[i].user.avatar;
    img.classList = 'img-avatar';
    div3.appendChild(img);
    //div4
    var div4 = document.createElement('div');
    div4.classList = 'div4';
    div3.appendChild(div4);
    //name
    var name = document.createElement('p');
    name.innerHTML = comment[i].user.name;
    name.classList = 'p-name';
    div4.appendChild(name);
    //comment
    var cmt = document.createElement('p');
    cmt.innerHTML = comment[i].text;
    div4.appendChild(cmt);
    //button
    var btn = document.createElement('button');
    btn.setAttribute('data-id', i);
    div2.appendChild(btn);
    btn.innerHTML = 'remove';
    btn.classList = 'btn-remove';
  }
  deleteComment();
}
//function button remove
function deleteComment() {
  getComment();
  var btnDel = document.getElementsByClassName('btn-remove');
  for (var i = 0; i < btnDel.length; i++) {
    btnDel[i].addEventListener('click', function (event) {
      var id = event.target.dataset.id;
      var test = confirm('Bạn chắc muốn xóa cmt ?');
      if (test == true) {
        comment.splice(id, 1);
        setComment();
        renderComment();
      }
      else {
      }
    });
  }
}
addComment();
renderComment();