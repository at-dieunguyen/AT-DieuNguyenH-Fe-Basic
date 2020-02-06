var news = [
  {
    content: 'this is article 1',
    id: 1,
    isArticle: 1,
    isDeleted: false,
    article: {
      id: 1,
      title: 'Phát hiện 10 trường hợp nhiễm cúm Vũ Hán trên siêu tàu du lịch chở 3.700 người bị cách ly tại Nhật',
      img: 'img/new1.jpg',
      content: "Con tàu du lịch bị nhà chức trách Nhật Bản cách ly cùng với 3.700 người, bao gồm hành khách và thủy thủ đoàn. Ít nhất 10 người được xác định dương tính với virus corona và đã được đưa tới bệnh viện. 273 người trên tàu được lấy mẫu để xét nghiệm virus.",
    }
  },
];
localStorage.setItem('news', JSON.stringify(news));

function renderNews() {
  var news = JSON.parse(localStorage.getItem('news'));
  var article = document.getElementsByClassName('article')[0];
  for (var i = 0; i < news.length; i++) {
    //title
    var title = document.createElement('p');
    title.innerHTML = news[i].article.title;
    title.classList = 'title-text';
    article.appendChild(title);
    //ing
    var img = document.createElement('img');
    img.src = news[i].article.img;
    img.classList = 'article-img';
    article.appendChild(img);
    //content
    var content = document.createElement('p');
    content.innerHTML = news[i].article.content;
    content.classList = 'content-text';
    article.appendChild(content);
  }
}
renderNews();