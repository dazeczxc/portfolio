//nav toggle
document.getElementById('links').onclick = function () {
  document.getElementById('nav-toggle').checked = false;
};


//custom scroll reveal about section
//myID = document.getElementById("about");

//var myScrollFunc = function () {
// var y = window.scrollY;
// if (y >= 50) {
//   myID.className = "about show";
// } else {
//   myID.className = "about hide";
// }
//};
//window.addEventListener("scroll", myScrollFunc);
//

//navbar hides on scroll down, shows on scroll up
//var lastScrollTop = 0;
//navbar = document.getElementById('navbarr');

//window.addEventListener("scroll", function () {

//  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

 // if (scrollTop > lastScrollTop) {
 //   navbar.style.top = "-80px";
 // } else {
 //   navbar.style.top = "0";
 // }

 // lastScrollTop = scrollTop;
//});


var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display= "none";
});

 


if (window.innerWidth < 769) {
  //1
  document.getElementById("close-button1").addEventListener("click", function() {
    document.getElementById("overlay1").style.display = "none";
    document.getElementById("title11").style.opacity = "1";
    document.getElementById("title22").style.opacity = "1";
  });
  
  document.getElementById("open-button1").addEventListener("click", function() {
    document.getElementById("overlay1").style.display = "flex";
    document.getElementById("title11").style.opacity = "0";
    document.getElementById("title12").style.opacity = "0";
  });

//2
  document.getElementById("close-button2").addEventListener("click", function() {
    document.getElementById("overlay2").style.display = "none";
    document.getElementById("title21").style.opacity = "1";
    document.getElementById("title22").style.opacity = "1";
  });
  
  document.getElementById("open-button2").addEventListener("click", function() {
    document.getElementById("overlay2").style.display = "flex";
    document.getElementById("title21").style.opacity = "0";
    document.getElementById("title22").style.opacity = "0";
  });


//3
  document.getElementById("close-button3").addEventListener("click", function() {
    document.getElementById("overlay3").style.display = "none";
    document.getElementById("title31").style.opacity = "1";
    document.getElementById("title32").style.opacity = "1";
  });
  
  document.getElementById("open-button3").addEventListener("click", function() {
    document.getElementById("overlay3").style.display = "flex";
    document.getElementById("title31").style.opacity = "0";
    document.getElementById("title32").style.opacity = "0";
  });

  //4
  document.getElementById("close-button4").addEventListener("click", function() {
    document.getElementById("overlay4").style.display = "none";
    document.getElementById("title41").style.opacity = "1";
    document.getElementById("title42").style.opacity = "1";
  });
  
  document.getElementById("open-button4").addEventListener("click", function() {
    document.getElementById("overlay4").style.display = "flex";
    document.getElementById("title41").style.opacity = "0";
    document.getElementById("title42").style.opacity = "0";
  });
}





