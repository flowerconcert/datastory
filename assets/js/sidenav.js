let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");
let wireimg = document.getElementById("coverwire");

let lastId;
let cur = [];

window.onload = function() {
  window.scrollTo(0,0);
}

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop-350 <= fromTop &&
      section.offsetTop-350 + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
  if(fromTop>450){
    wireimg.classList.add("fadeout");
  }
  else{
    wireimg.classList.remove("fadeout");
  }
});
