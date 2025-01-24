async function loadHome () {
 xxx();
}
async function xxx () {
    /*var kk = document.getElementById("pagecontent");
    kk.innerHTML = await (await fetch('neprnav.html')).text();*/

    fetch('neprnav.html')
.then(function (data) {
  return data.text();
})
.then(function (html) {
  document.getElementById('pagecontent').innerHTML = html;
  var scripts = document.getElementById("pagecontent").querySelectorAll("script");
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].innerText) {
      eval(scripts[i].innerText);
    } else {
      fetch(scripts[i].src).then(function (data) {
        data.text().then(function (r) {
          eval(r);
        })
      });

    }
    // To not repeat the element
    scripts[i].parentNode.removeChild(scripts[i]);
  }
});
}
