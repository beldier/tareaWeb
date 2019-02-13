var i = 0;
var images = [];
var time = 3000;

//Image List
images[0] = "https://i.imgur.com/S6y7PLz.jpg";
images[1] = "https://pics.me.me/thumb_communist-dog-say-bark-bark-communism-is-awesome-bark-bark-1712176.png";
images[2] = "http://www.hwcanwait.com/images/post/133.jpg ";

//change image
function changeImg(){
  document.slide.src = images[i];

  if( i < images.length - 1){
    i++;
  }
  else{
    i = 0;
  }

  setTimeout("changeImg()", time);
}
window.onload=changeImg;
