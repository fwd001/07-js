var smallBox = document.getElementById('smallBox');
var mask = document.getElementById('mask');
var bigBox = document.getElementById('bigBox');
var bigImg = bigBox.children[0];

smallBox.onmouseenter = function () {
  mask.style.display = 'block';
  bigBox.style.display = 'block';
}
smallBox.onmouseleave = function () {
  mask.style.display = 'none';
  bigBox.style.display = 'none';
}

mask.onmousemove = function (e) {
  e = e || event;
  var x = getPage(e).pageX - smallBox.offsetLeft;
  var y = getPage(e).pageY - smallBox.offsetTop;

  x -= mask.offsetWidth / 2;
  y -= mask.offsetHeight / 2;
  x = x < 0 ? 0 : x;
  y = y < 0 ? 0 : y;

  var maxX = smallBox.offsetWidth - mask.offsetWidth;
  var maxY = smallBox.offsetHeight - mask.offsetHeight;
  x = x > maxX ? maxX : x;
  y = y > maxY ? maxY : y;
  mask.style.left = x + 'px';
  mask.style.top = y + 'px';

  var imgMaxX = bigImg.offsetWidth - bigBox.offsetWidth;
  var imgMaxY = bigImg.offsetHeight - bigBox.offsetHeight;

  var bigImgX = x * imgMaxX / maxX;
  var bigimgY = y * imgMaxY / maxY;

  bigImg.style.left = -bigImgX + 'px';
  bigImg.style.top = - bigimgY + 'px';
}