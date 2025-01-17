var t = null;
var navests;
var ynavest;
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
        document.getElementById("x1").style.visibility="hidden";
        document.getElementById("x2").style.visibility="hidden";
        document.getElementById("x3").style.visibility="hidden";
        document.getElementById("x4").style.visibility="hidden";
        document.getElementById("x5").style.visibility="hidden";
        document.getElementById("x6").style.visibility="hidden";
        document.getElementById("nazev").textContent="---";
        document.getElementById("popisnavesti").textContent="---";
        document.getElementById("1line").style.backgroundColor = "#000000";
        document.getElementById("2line").style.backgroundColor = "#000000";
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
            if (xn != ""){
              let k = xn;
            const myArray = xn.split(";");
            for (var m = 0, len = myArray.length; m < len; m++) {
               document.getElementById(myArray[m]).style.visibility="visible"; 
            }
            }
            if (xblik == "pomalu"){
              var blink_speed = 900; // every 1000 == 1 second, adjust to suit
         t = setInterval(function () {
          var ele = document.getElementById(xblik2);
          ele.style.visibility = (ele.style.visibility == 'visible' ? '' : 'visible');
          }, blink_speed);
            } 
            if (xblik == "rychle"){
              var blink_speed = 450; // every 1000 == 1 second, adjust to suit
         t = setInterval(function () {
          var ele = document.getElementById(xblik2);
          ele.style.visibility = (ele.style.visibility == 'visible' ? '' : 'visible');
          }, blink_speed);
            }
            
            
            document.getElementById("nazev").innerHTML = nazev;
            document.getElementById("popisnavesti").innerHTML = xpopis;
        console.log(
            `Tutorial ID: Title: ${nazev}, Title: ${xblik}, Title: ${xblik2}`);
    });
    });

/*    var request = new XMLHttpRequest();
    request.open("GET", "/navestidlo/data/xml/data.xml", false);
    request.send();
    var xml = request.responseXML;
    var xn = xml.getElementsByTagName(kodnavesti);
    for(var i = 0; i < xn.length; i++) {
        var xnn = xn[i];
        var xna = xnn.getElementsByTagName("xa");
        var xnaz = xnn.getElementsByTagName("nazev");
        var xpop = xnn.getElementsByTagName("popis");
        //var xpop = xnn.getElementsByTagName("popis");
        */
       /* for(var k = 0; k < xnaz.length; k++) {
            document.getElementById("nazev").innerHTML = "" + xnaz[k].childNodes[0].nodeValue
        }*/
       /* for(var n = 0; n < xpop.length; n++) {
            //document.getElementById("popisnavesti").innerHTML = "" + xpop[n].childNodes[0].nodeValue
        }*/
    }

