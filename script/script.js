const menu = document.querySelector("#menu");
const closeBtn = document.querySelector(".close");
var myNav = document.getElementById("myNav");
var count = 1;

menu.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

function openNav() {
    count++;
    if(count % 2 == 0){
    document.getElementById("main-nav").style.width = "100%";
    myNav.style.opacity = "1";
    } else{
         myNav.style.opacity = "0";
    }


}

function closeNav() {
    document.getElementById("main-nav").style.width = "0";
}




window.addEventListener("wheel", scrollFunction);
var pageList = new Array();
var currentPage = 0;
var numberPerPage = 1;
var events = Array.prototype.slice.call(document.querySelectorAll(".slide"));
var numberOfPages = pageList.length;


function scrollFunction(e) {
    if (e.deltaY >= 0) {
        currentPage += 1;
        loadList();
    } else {
        currentPage -= 1;
        loadList();
    }

};


/*
var lastScrollTop = 0;
function scrollFunction(){
    if (document.body.scrollTop > lastScrollTop || document.documentElement.scrollTop > lastScrollTop){
        currentPage += 1;
        loadList();
    }else{
        currentPage -= 1;
        loadList();
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

*/

/*
function scrollFunction(){
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
        currentPage += 1;
        loadList();
    }

    if (document.body.scrollTop < 20 || document.documentElement.scrollTop < 20){
        currentPage -= 1;
        loadList();
    }
}
*/

function loadList() {
    var begin = (currentPage - 1);
    var end = begin + numberPerPage;
    for (i = 0; i < pageList.length; i++) {
        pageList[i].classList.add("not-visible");
        // make the old list invisible
    }

    pageList = events.slice(begin, end);
    drawList();

    //check();
}

var notVisible = document.getElementsByClassName("not-visible");

function drawList() {
    for (i = 0; i < pageList.length; i++) {
        pageList[i].classList.remove("not-visible");
    }

}
/*
function check() {
  document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
  document.getElementById("previous").disabled = currentPage == 1 ? true : false;
  document.getElementById("first").disabled = currentPage == 1 ? true : false;
  document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
}*/

function load() {
    loadList();
}


/*
const slideContainer = document.getElementById("main");
const slide = document.querySelector(".slide");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      slideContainer.style.top = "-100vh";
      window.scrollTo(0, 0);
    //slide.classList.remove("active");
  }else if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){


     window.scrollTo(100, 100);
  }
}
*/

/*
const slide = document.querySelector(".slide");
const slideContainer = document.getElementById("main");
const arrow = document.querySelector(".arrow-down");



arrow.addEventListener("click", scrollFunction);

    function scrollFunction() {

                slideContainer.classList.add("moveMain");

        }
        */

// this is to get the portfolio sections when click in each quarter

var main = document.querySelector("#main");
var webs = document.querySelector(".webs");
var xd = document.querySelector(".xd");
var anime = document.querySelector(".animation");
var media = document.querySelector(".media");
var section1 = document.querySelector(".portfolio-section1");
var section2 = document.querySelector(".portfolio-section2");
var section3 = document.querySelector(".portfolio-section3");
var section4 = document.querySelector(".portfolio-section4");
var portfolioH3 = document.querySelector(".portfolio-h3");

//this is to get webs section
webs.addEventListener("click", activeWebs);
var goTop = document.getElementsByClassName(".top");

function activeWebs() {
    count++;

    webs.setAttribute("isClicked", "true");
    section1.classList.add("move");
    circleMenu.classList.add("top");
    icons.classList.remove("block");
    iconJs.classList.remove("js");
    iconHtml.classList.remove("html");
    iconGithub.classList.remove("github");
    portfolioH3.style.display = "none";
    setTimeout(function(){
        main.style.height = "100%";
    }, 2000);

}


//this is to get xd section
xd.addEventListener("click", activeXd);

function activeXd() {
    count++;
    xd.setAttribute("isClicked", "true");
    section2.classList.add("move");
    circleMenu.classList.add("top");
    icons.classList.remove("block");
    iconJs.classList.remove("js");
    iconHtml.classList.remove("html");
    iconGithub.classList.remove("github");
    portfolioH3.style.display = "none";
    setTimeout(function(){
        main.style.height = "100%";
    }, 2000);
}


//this is to get animation section
anime.addEventListener("click", activeAnimation);

function activeAnimation() {
    count++;
    anime.setAttribute("isClicked", "true");
    section3.classList.add("move");
    circleMenu.classList.add("top");
    icons.classList.remove("block");
    iconJs.classList.remove("js");
    iconHtml.classList.remove("html");
    iconGithub.classList.remove("github");
    portfolioH3.style.display = "none";
    setTimeout(function(){
        main.style.height = "100%";
    }, 2000);
}


//this is to get media section
media.addEventListener("click", activeMedia);

function activeMedia() {
    count++;
    media.setAttribute("isClicked", "true");
    section4.classList.add("move");
    circleMenu.classList.add("top");
    icons.classList.remove("block");
    iconJs.classList.remove("js");
    iconHtml.classList.remove("html");
    iconGithub.classList.remove("github");
    portfolioH3.style.display = "none";
    setTimeout(function(){
        main.style.height = "100%";
    }, 2000);
}


// this is for the circle menu on portfolio page

let circleMenu = document.querySelector(".circle-menu");
let icons = document.querySelector("#circle-wrapper");
let iconJs = document.querySelector("#js");
let iconHtml = document.querySelector("#html");
let iconGithub = document.querySelector("#github");
const menu2 = document.querySelector("#menu2");

menu2.addEventListener("click", display);
var count = 1;

function display() {
    count++;

    if (webs.hasAttribute("isClicked") || xd.hasAttribute("isClicked") || anime.hasAttribute("isClicked") || media.hasAttribute("isClicked")) {

        if (count % 2 == 0) {

        circleMenu.classList.add("center");
        circleMenu.classList.remove("top");
        section1.classList.remove("move");
        section2.classList.remove("move");
        section3.classList.remove("move");
        section4.classList.remove("move");
        main.style.height = "85vh";
        circleMenu.addEventListener("animationend", noCenter);

        setTimeout(function(){
        icons.classList.add("block");
        }, 2000);

        setTimeout(function (){
        iconJs.classList.add("js");
        iconHtml.classList.add("html");
        iconGithub.classList.add("github");}, 2000);


    } else {
        circleMenu.classList.add("top");
        icons.classList.remove("block");
        iconJs.classList.remove("js");
        iconHtml.classList.remove("html");
        iconGithub.classList.remove("github");

    }

    }else{

        if (count % 2 == 0) {
        icons.classList.add("block");
        iconJs.classList.add("js");
        iconHtml.classList.add("html");
        iconGithub.classList.add("github");
    } else {
        icons.classList.remove("block");
        iconJs.classList.remove("js");
        iconHtml.classList.remove("html");
        iconGithub.classList.remove("github");

    }
    }
}

function noCenter(){
    circleMenu.classList.remove("center");
}
