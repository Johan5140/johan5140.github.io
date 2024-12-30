function openmenu() {
  var x = document.getElementById("menu");
  if (x.className === "menulinks") {
    x.className += " responsive";
  } else {
    x.className = "menulinks";
  }
}