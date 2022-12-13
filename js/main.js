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
