function vypsatnavesti () {
    var xhtmlx = "";
  var output = '';
      fetch("data/xml/navesti2.xml")
      .then((response) => response.text())
      .then((xmlString) => {
          const parser = new DOMParser();
          const xmlDoc = parser.
              parseFromString(xmlString, "text/xml");
  
          const xnavesti = xmlDoc.querySelectorAll("xn");
            xhtmlx = document.getElementById('navestilist');
                  console.log(xnavesti[i])
                  xnavesti.forEach((xstrngs) => {
                      const nazev = xstrngs.
                      querySelector("nazev").textContent;
                      const navestidlo = xstrngs.
                      querySelector("navestidlo").textContent;
                      const vzhled = xstrngs.
                      querySelector("vzhled").textContent;
                      const popis = xstrngs.
                      querySelector("popis").textContent;
                      const ico = xstrngs.
                      querySelector("ico").textContent;
                          console.log(xhtmlx);
                          output += '<li><div class="navest"><div class="imagecol"><img src="data/img/navesti/'+ico+'.png" height="35" width="100"></div><div class="desccol"><h4>'+nazev+'</h4><p>'+navestidlo+'</p><p>'+vzhled+'</p><p>'+popis+'</p></div></div></li>';
                      output += '';
                      xhtmlx.innerHTML = output;
                      
              })
      })};
function menuk(page) {
    var xa = fetch('data/stranky/'+page+'.html')
     .then(response => response.text())  
     .then(html => {
       document.getElementById('content').innerHTML = html;
     })
     var xy = document.getElementsByTagName("a");
     for (i=0;i<xy.length;i++){
         xy[i].removeAttribute('id');
     }
     var s = document.getElementsByName(page)[0];
     s.id = "aktivni";
     if(page == "neprnav"){
     vypsatnavesti();
    }
    let swidth = screen.width;
    if(swidth < "1200"){
        var mw = document.getElementsByClassName("menubox")[0].style.width;
        if (mw === "250px"){
         closeNav()
        }
    }
   }