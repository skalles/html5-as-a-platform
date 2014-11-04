window.addEventListener("DOMContentLoaded", function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    video = document.getElementById("video"),
    videoObj = { "video" : true },
    errBack = function(error) {
      console.log("Video capture error: ", error.code);
    };

  document.getElementById("snap").addEventListener("click", function() {
    context.drawImage(video, 0, 0, 150, 150);
  });

  if(navigator.getUserMedia) {
    navigator.getUserMedia(videoObj, function(stream) {
      video.src = stream;
      video.play();
    }, errBack);
  } else if(navigator.webkitGetUserMedia) {
    navigator.webkitGetUserMedia(videoObj, function(stream){
      video.src = window.webkitURL.createObjectURL(stream);
      video.play();
    }, errBack);
  }
  else if(navigator.mozGetUserMedia) {
    navigator.mozGetUserMedia(videoObj, function(stream){
      video.src = window.URL.createObjectURL(stream);
      video.play();
    }, errBack);
  }

}, false);

window.onload = function(){
  name.value = localStorage.getItem(name.id);
  password.value = localStorage.getItem(password.id);
  radio1.value = localStorage.getItem(radio1.id);
  radio2.value = localStorage.getItem(radio2.id);
  select2.value = localStorage.getItem(select2.id);
  textarea.value = localStorage.getItem(textarea.id);
  check.value = localStorage.getItem(check.id);
};

var fname = document.getElementById("name");
var password = document.getElementById("password");
var radio1 = document.getElementById("radio-choice-1");
var radio2 = document.getElementById("radio-choice-2");
var select2 = document.getElementById("select-choice-2");
var textarea = document.getElementById("textarea");
var check = document.getElementById("check");

name.onblur = function(){
  storeData(this.id, this.value);
};
password.onblur = function(){
  storeData(this.id, this.value);
};
radio1.onblur = function(){
  storeData(this.id, this.value);
};
radio2.onblur = function(){
  storeData(this.id, this.value);
};
select2.onblur = function(){
  storeData(this.id, this.value);
};
textarea.onblur = function(){
  storeData(this.id, this.value);
};
check.onblur = function(){
  storeData(this.id, this.value);
};

function storeData(name, value){
  localStorage.setItem(name, value);
};

var audio = document.getElementById("page_audio");
 audio.onClick = function(){
  audio.play();
 };
