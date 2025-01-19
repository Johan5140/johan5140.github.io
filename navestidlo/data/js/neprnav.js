var xhtmlx;
var output = '';
function vypsatnavesti () {
    /*parser = new DOMParser();
    doc = parser.parseFromString(text,"text/xml");
    docx = parser.parseFromString()*/

    //const xml = "/navestidlo/data/xml/data.xml"
    fetch("data/xml/navesti2.xml")
    .then((response) => response.text())
    .then((xmlString) => {
        const parser = new DOMParser();
        const xmlDoc = parser.
            parseFromString(xmlString, "text/xml");

        const xnavesti = xmlDoc.
        querySelectorAll("all");
        xnavesti.forEach((xstrngs) => {
        const strngs = xstrngs.
            querySelector("strngs").textContent;
            const ystrngs = strngs.split(";");
            xhtmlx = document.getElementById('navestilist');
            for (i=0;i<ystrngs.length;i++){
                //console.log(ystrngs[i])
                const xnavesti = xmlDoc.
                querySelectorAll(ystrngs[i]);
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
            
            /*const ystrngs = nazev.split(";");
              for (var m = 0, len = ystrngs.length; m < len; m++) {
                console.log(ystrngs[m])*/
                    
                    
                
                /*const xu = document.getElementsByClassName(myArray[m]);
                xu[0].style.visibility="Visible"; 
                var names = '';
              }

            for (i=0;i<strngs.length;i++){

            }
            
            
            
            
            
            
            
            
            if (idcd != "3"){
              if (xn != ""){
              const myArray = xn.split(";");
              for (var m = 0, len = myArray.length; m < len; m++) {
                const xu = document.getElementsByClassName(myArray[m]);
                xu[0].style.visibility="Visible"; 
                var names = '';
              }
            }
              if (xblik == "pomalu"){
                var blink_speed = 900; // every 1000 == 1 second, adjust to suit
                t = setInterval(function () {
                  var yy = document.getElementsByClassName(xblik2);
                  var ele = yy[0];
                  ele.style.visibility = (ele.style.visibility == 'visible' ? '' : 'visible');
                  }, blink_speed);
              } 
              if (xblik == "rychle"){
                var blink_speed = 450; // every 1000 == 1 second, adjust to suit
                t = setInterval(function () {
                  var yy = document.getElementsByClassName(xblik2);
                  var ele = yy[0];
                  ele.style.visibility = (ele.style.visibility == 'visible' ? '' : 'visible');
                  }, blink_speed);
              }
              if (xlinka1 == "6"){
                xx[0].style.visibility="Visible";
                document.getElementById("1line").style.backgroundColor = "#f1f50a";
              }
              if (xlinka1 == "8"){
                xx[0].style.visibility="Visible";
                document.getElementById("1line").style.backgroundColor = "#16cc47";             
              }
              if (xlinka2 == "10"){
                xx[0].style.visibility="Visible";
                xx[1].style.visibility="Visible";
                document.getElementById("1line").style.backgroundColor = "#16cc47";
                document.getElementById("2line").style.backgroundColor = "#16cc47";             
              }
              xy7[0].textContent=xr



            }
            if (idcd == "3"){
              xy[0].style.visibility="Visible";
              const myArray = xn.split(";");
              for (var m = 0, len = myArray.length; m < len; m++) {
                const xu = document.getElementsByClassName(myArray[m]); 
                var names = '';
                for(var i=0; i<xu.length; i++) {
                  xu[i].style.visibility="Visible";
                }
                if (xblik == "pomalu"){
                  var blink_speed = 900; // every 1000 == 1 second, adjust to suit
                  t = setInterval(function () {
                    var yy = document.getElementsByClassName(xblik2);
                    var ele = yy[0];
                    var ele1 = yy[1];
                    //var ele = yy[0];
                    ele.style.visibility = (ele.style.visibility == 'visible' ? '' : 'visible');
                    ele1.style.visibility = (ele1.style.visibility == 'visible' ? '' : 'visible');
                    }, blink_speed);
                } 
                if (xblik == "rychle"){
                  var blink_speed = 450; // every 1000 == 1 second, adjust to suit
                  t = setInterval(function () {
                    var yy = document.getElementsByClassName(xblik2);
                    var ele = yy[0];
                    var ele1 = yy[1];
                    //var ele = yy[0];
                    ele.style.visibility = (ele.style.visibility == 'visible' ? '' : 'visible');
                    ele1.style.visibility = (ele1.style.visibility == 'visible' ? '' : 'visible');
                    }, blink_speed);
                }
                for (var y=0;y<xy7.length;y++){
                  xy7[y].textContent=xr;
          
                }
            }
              

            }
            //document.getElementById("horniidc").textContent=xr;
            document.getElementById("dolniidc").textContent=idcd;
            
            document.getElementById("nazev").innerHTML = nazev;
            document.getElementById("popisnavesti").innerHTML = xpopis;*/
    }});
    });
    }