



  function homescroll(){
   window.scrollTo(0,0);
     behavior: 'smooth';
 }
  function prodscroll(){
   window.scrollTo(0,500);
     behavior: 'smooth';
 }
  function contscroll(){
   window.scrollTo(0,1300);
    behavior: 'smooth';
 }
 
 
 function GeneralClick(){
   document.getElementById("r1B").click();
 }
 function MenClick(){
   document.getElementById("r2B").click();
 }
  function WomenClick(){
  document.getElementById("r3B").click();
  
 }

function prod1Click(){
  document.getElementById("").click();
 }






var modal1 = document.getElementById("myModal1");
var btn = document.getElementById("prod1Click");
var span = document.getElementsByClassName("close1")[0]
var span1 = document.getElementsByClassName("close1A")[0];

btn.onclick = function() {
  modal1.style.display = "block";
}
span.onclick = function() {
  modal1.style.display = "none";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

var modal2 = document.getElementById("myModal2");
var btn = document.getElementById("prod2Click");
var span = document.getElementsByClassName("close2")[0]; 
btn.onclick = function() {
  modal2.style.display = "block";
}
span.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}


var modal3 = document.getElementById("myModal3");
var btn = document.getElementById("prod3Click");
var span = document.getElementsByClassName("close3")[0]; 
btn.onclick = function() {
  modal3.style.display = "block";
}
span.onclick = function() {
  modal3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

var modal4 = document.getElementById("myModal4");
var btn = document.getElementById("prod4Click");
var span = document.getElementsByClassName("close4")[0]; 
btn.onclick = function() {
  modal4.style.display = "block";
}
span.onclick = function() {
  modal4.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}

var modal5 = document.getElementById("myModal5");
var btn = document.getElementById("prod5Click");
var span = document.getElementsByClassName("close5")[0]; 
btn.onclick = function() {
  modal5.style.display = "block";
}
span.onclick = function() {
  modal5.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}

var modal6 = document.getElementById("myModal6");
var btn = document.getElementById("prod6Click");
var span = document.getElementsByClassName("close6")[0]; 
btn.onclick = function() {
  modal6.style.display = "block";
}
span.onclick = function() {
  modal6.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}

var modal7 = document.getElementById("myModal7");
var btn = document.getElementById("prod7Click");
var span = document.getElementsByClassName("close7")[0]; 
btn.onclick = function() {
  modal7.style.display = "block";
}
span.onclick = function() {
  modal7.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
}

var modal8 = document.getElementById("myModal8");
var btn = document.getElementById("prod8Click");
var span = document.getElementsByClassName("close8")[0]; 
btn.onclick = function() {
  modal8.style.display = "block";
}
span.onclick = function() {
  modal8.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal8) {
    modal8.style.display = "none";
  }
}

var modal9 = document.getElementById("myModal9");
var btn = document.getElementById("prod9Click");
var span = document.getElementsByClassName("close9")[0]; 
btn.onclick = function() {
  modal9.style.display = "block";
}
span.onclick = function() {
  modal9.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal9) {
    modal9.style.display = "none";
  }
}




var modal10 = document.getElementById("myModal10");
var btn = document.getElementById("prod10Click");
var span = document.getElementsByClassName("close10")[0]; 
btn.onclick = function() {
  modal10.style.display = "block";
}
span.onclick = function() {
  modal10.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal10) {
    modal10.style.display = "none";
  }
}




function incrementValue(e) {
  e.preventDefault();
  var fieldName = $(e.target).data('field');
  var parent = $(e.target).closest('div');
  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

  if (!isNaN(currentVal)) {
    parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
  } else {
    parent.find('input[name=' + fieldName + ']').val(0);
  }
}

function decrementValue(e) {
  e.preventDefault();
  var fieldName = $(e.target).data('field');
  var parent = $(e.target).closest('div');
  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

  if (!isNaN(currentVal) && currentVal > 0) {
    parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
  } else {
    parent.find('input[name=' + fieldName + ']').val(0);
  }
}

$('.input-group').on('click', '.button-plus', function(e) {
  incrementValue(e);
});

$('.input-group').on('click', '.button-minus', function(e) {
  decrementValue(e);
});
