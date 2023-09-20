const sideBar = document.querySelector(".mobile-nav-btn");
const sideBarMenu = document.querySelector(".mobile-nav");
const navBtn1 = document.querySelector("#nav-btn")
const navBtn2 = document.querySelector("#nav-btn-cancel")


navBtn1.onclick = function(){
    sideBarMenu.style.height = "310px";
    sideBarMenu.style.transition = "height 0.5s ease";
    navBtn1.style.display = "none";
    navBtn2.style.display = "block";
}

navBtn2.onclick = function(){
    sideBarMenu.style.height = "0";
    navBtn1.style.display = "block";
    navBtn2.style.display = "none";
}


