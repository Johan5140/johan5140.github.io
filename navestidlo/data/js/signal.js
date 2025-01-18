var t = null;
var navests;
var navestk;
var ynavest;
const xx = document.getElementsByClassName("sigline");
const xy = document.getElementsByClassName("xright");

const xy1 = document.getElementsByClassName("x1");
const xy2 = document.getElementsByClassName("x2");
const xy3 = document.getElementsByClassName("x3");
const xy4 = document.getElementsByClassName("x4");
const xy5 = document.getElementsByClassName("x5");
const xy6 = document.getElementsByClassName("x6");
const xy7 = document.getElementsByClassName("horniidc");

function cmbbxs () {
  reload();
  navests = document.getElementById("rych1").value;
  navestk = document.getElementById("rych2").value;
  if (navestk == "" && navests != ""){
    navest(navests);
  }
  if (navests == "" && navestk !=""){
    navest(navestk);
  }
  if (navests != "em" && navests != "" && navests != null && navestk != ""){
    var xaa = navests+navestk;
    navest(xaa);
  }
}

function blink (x,y)
{   
    if (y === undefined){
     var blink_speed = 900; // every 1000 == 1 second, adjust to suit
         t = setInterval(function () {
          var ele = document.getElementById(x);
          ele.style.visibility = (ele.style.visibility == 'visible' ? '' : 'visible');
          }, blink_speed);
        }   
    }
        /*var blink_speed = 900; // every 1000 == 1 second, adjust to suit
        var t = setInterval(function () {
          var ele = document.getElementById("bila");
          ele.style.visibility = (ele.style.visibility == 'visible' ? '' : 'visible');
          }, blink_speed);
        }
}*/
function submit () {
        reload();
        navests = document.getElementById("navesti").value;
        navest(navests);
}
function reload () {
       for (var y=0;y<xy1.length;y++){
          xy1[y].style.visibility="Hidden";

       }
       for (var y=0;y<xy2.length;y++){
        xy2[y].style.visibility="Hidden";

      }
      for (var y=0;y<xy3.length;y++){
        xy3[y].style.visibility="Hidden";

      }
      for (var y=0;y<xy4.length;y++){
        xy4[y].style.visibility="Hidden";

      }
      for (var y=0;y<xy5.length;y++){
        xy5[y].style.visibility="Hidden";

      }
      for (var y=0;y<xy6.length;y++){
        xy6[y].style.visibility="Hidden";

      }
      for (var y=0;y<xy7.length;y++){
        xy7[y].textContent="";

      }
        document.getElementById("dolniidc").textContent="";
        document.getElementById("nazev").textContent="---";
        document.getElementById("popisnavesti").textContent="---";
        document.getElementById("1line").style.backgroundColor = "#000000";
        document.getElementById("2line").style.backgroundColor = "#000000";
        for (var y=0;y<xx.length;y++){
          xx[y].style.visibility="Hidden";
  
        }
        xy[0].style.visibility="Hidden";
        clearInterval(t);
}
function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        navest(this,navests);
      }
    };
    xmlhttp.open("GET", "/navestidlo/data/xml/data.xml", true);
    xmlhttp.send();
  }
function navest (kodnavesti) {
    /*parser = new DOMParser();
    doc = parser.parseFromString(text,"text/xml");
    docx = parser.parseFromString()*/

    //const xml = "/navestidlo/data/xml/data.xml"

    fetch("data/xml/data.xml")
    .then((response) => response.text())
    .then((xmlString) => {
        const parser = new DOMParser();
        const xmlDoc = parser.
            parseFromString(xmlString, "text/xml");

        const xnavesti = xmlDoc.
        querySelectorAll(kodnavesti);
        xnavesti.forEach((xnavest) => {
        const xn = xnavest.
            querySelector("xa").textContent;
        const nazev = xnavest.
            querySelector("nazev").textContent;
            const xpopis = xnavest.
            querySelector("popis").textContent;
            const xblik = xnavest.
            querySelector("blik").textContent;
            const xblik2 = xnavest.
            querySelector("blikx").textContent;
            const xlinka1 = xnavest.
            querySelector("linka1").textContent;
            const xlinka2 = xnavest.
            querySelector("linka2").textContent;
            const xr = xnavest.
            querySelector("xr").textContent;
            const blikx2 = xnavest.
            querySelector("blikx2").textContent;
            const idcd = xnavest.
            querySelector("indikatordole").textContent;

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
            document.getElementById("popisnavesti").innerHTML = xpopis;
    });
    });
    }

