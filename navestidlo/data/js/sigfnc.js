var t = null;
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
function reload () {
        document.getElementById("cervena").style.visibility="hidden";
        document.getElementById("zelena").style.visibility="hidden";
        document.getElementById("bila").style.visibility="hidden";
        document.getElementById("zluta1").style.visibility="hidden";
        document.getElementById("zluta2").style.visibility="hidden";
        document.getElementById("nazev").textContent="---";
        document.getElementById("vzhlednavesti").textContent="---";
        document.getElementById("popisnavesti").textContent="---";
        clearInterval(t);
}
function signal () {
        var navest = document.getElementById("navesti").value;
        if (navest == "stuj")
        {
          reload();
          document.getElementById("cervena").style.visibility="visible";
          document.getElementById("nazev").textContent="Stůj";
          document.getElementById("vzhlednavesti").textContent="Červené klidné světlo";
          document.getElementById("popisnavesti").textContent="Zakazuje jízdu vlaku (PMD). Čelo vlaku musí zastavit před hlavním návěstidlem nebo před návěstidlem s návěstí Konec vlakové cesty.";
          
        }
        if (navest == "volno")
        {
          reload();
          document.getElementById("zelena").style.visibility="visible";
          document.getElementById("nazev").textContent="Volno";
        document.getElementById("vzhlednavesti").textContent="Zelené klidné světlo";
        document.getElementById("popisnavesti").textContent="---";
        }
        if (navest == "vystraha")
        {
          reload();
          document.getElementById("zluta1").style.visibility="visible";
        }
        if (navest == "pn")
        {
          reload();
          blink("bila");
        }
        if (navest == "a40avystraha")
        {
          reload();
          document.getElementById("zluta1").style.visibility="visible";
          document.getElementById("zluta2").style.visibility="visible";
        }
        if (navest == "a40a40")
        {
          reload();
          blink("zluta1");
          document.getElementById("zluta2").style.visibility="visible";
        }
        if (navest == "a40avolno")
        {
          reload();
          document.getElementById("zelena").style.visibility="visible";
          document.getElementById("zluta2").style.visibility="visible";
        }
}
