resisePageMobile();//run once on page load
function openmenu() {
  /*var x = document.getElementById("menu");
 if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }*/
    window.addEventListener('resize',resisePageMobile);
 var mw = document.getElementsByClassName("menubox")[0].style.width;
 if (mw === "250px"){
  closeNav();
 }
 else{
  openNav();
 }
}
function openNav() {
  document.getElementsByClassName("menubox")[0].style.width = "250px";
  document.getElementById("dropdown").style.width = "250px";
}

function closeNav() {
  document.getElementsByClassName("menubox")[0].style.width = "0px";
  document.getElementById("dropdown").style.width = "130px";
}
function resisePageMobile(){

  if (window.innerWidth <= 1200) { //Detect mobile 
    closeNav();
  }else{ //Detect other higher resolution screens
    openNav();
  }

}
