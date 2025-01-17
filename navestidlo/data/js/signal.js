var t = null;
var navests;
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
        document.getElementById("vzhlednavesti").textContent="---";
        document.getElementById("popisnavesti").textContent="---";
        document.getElementById("1line").style.backgroundColor = "#000000";
        document.getElementById("2line").style.backgroundColor = "#000000";
        clearInterval(t);
}
function navest (kodnavesti) {

    var request = new XMLHttpRequest();
    request.open("GET", "/data/xml/data.xml", true);
    request.send();
    var xml = request.responseXML;
    var ynavest = xml.getElementsByTagName(kodnavesti);
    if(ynavest != null){
        var xa = ynavest.getElementsByTagName("xa")[0].childNodes[0].nodeValue;
        /*var xr = ynavest.getElementsByTagName("xr");
        var blik = ynavest.getElementsByTagName("blik");
        var blikx = ynavest.getElementsByTagName("blikx");
        var blikx2 = ynavest.getElementsByTagName("blikx2");
        var nazev = ynavest.getElementsByTagName("nazev");
        var indikatordole = ynavest.getElementsByTagName("indikatordole");
        var linka1 = ynavest.getElementsByTagName("linka1");
        var linka2 = ynavest.getElementsByTagName("linka2");
        var svetla = ynavest.getElementsByTagName("svetla");
        var popis = ynavest.getElementsByTagName("popis");*/
    }
    getElementsByTagName(xa).style.visibility="visible";

    document.getElementById("nazev").innerHTML= kodnavesti;
//document.getElementById("demo").innerHTML = txt;

}

