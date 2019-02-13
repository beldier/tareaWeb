var i = 0;
var images = [];

images[0] = "https://img-9gag-fun.9cache.com/photo/aEYYwLo_700b.jpg";
images[1] = "https://pics.me.me/thumb_communist-dog-say-bark-bark-communism-is-awesome-bark-bark-1712176.png";
images[2] = "http://www.hwcanwait.com/images/post/133.jpg ";

document.slide.src = images[0];
function prev(){
  i--;
  if(i == -1){
    i=images.length - 1;
  }
  document.slide.src = images[i];
}
function next(){
  i++;
  if(i == images.length){
    i=0;
  }
  document.slide.src = images[i];
}