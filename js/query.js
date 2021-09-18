$(document).ready(function(){

    $('.input-daterange').datepicker({
    format: 'dd-mm-yyyy',
    autoclose: true
    });
    
    });



let tabHeader = document.querySelector(".mappas");
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];
 
let tabsPane = tabHeader.getElementsByTagName("a");
 
for(let i=0;i<tabsPane.length;i++){
  tabsPane[i].addEventListener("click",function(e){
    e.preventDefault();
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    tabsPane[i].classList.add("active");
    tabBody.querySelector(".active").classList.remove("active");
    tabBody.querySelectorAll(".statbox")[i].classList.add("active");
    
    // tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`;
  });
}