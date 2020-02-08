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
      alert('Không được để trống comment');
    }
    else {
      var object = {
        id: comment.length && comment ? comment.length : 0,
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
  var div1 = document.getElementById('js-commented');
  var content = comment.map(function(item) {
      return '<div class = "div2"><img class="img-avatar" src="'+item.user.avatar+'"><div class="div3"><p class="p-name">'+item.user.name+'</p><p>  '+item.text+'</p></div><button class="btn-remove" data-id="'+item.id+'">remove</button></div>';
  });
  div1.innerHTML = content.join('');
  deleteComment();
}
//function button remove
function deleteComment() {
  getComment();
  var btnDel = document.getElementsByClassName('btn-remove');
  for (var i = 0; i < btnDel.length; i++) {
    btnDel[i].addEventListener('click', function (event) {
      var remove = event.target.dataset.id;
      var test = confirm('Bạn chắc muốn xóa comment ?');
      if (test == true) {
        comment.splice(remove, 1);
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