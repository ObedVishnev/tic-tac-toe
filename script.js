console.log("WIIW")
window.onload = function () {

var block = document.getElementsByClassName('block');

var hod=0;

var game = document.getElementById('game').onclick = function (event) {

    console.log(event);
    
    if(event.target.className == 'block') {
        if(hod%2==0) {
            event.target.innerHTML = 'о';
            hod++;
            
            checkWinner();
        }
        else { 
            hod++;
            event.target.innerHTML = 'х';
            
            checkWinner();
        }
        
    }
  function checkWinner() {
      var allblock = document.getElementsByClassName('block');
      
if(allblock[0].innerHTML == "х" && allblock[1].innerHTML == "х" && allblock[2].innerHTML == "х") { 
alert("crosses won");

}

if(allblock[3].innerHTML == "х" && allblock[4].innerHTML == "х" && allblock[5].innerHTML == "х") alert("crosses won");

if(allblock[6].innerHTML == "х" && allblock[7].innerHTML == "х" && allblock[8].innerHTML == "х") alert("crosses won");

if(allblock[0].innerHTML == "х" && allblock[3].innerHTML == "х" && allblock[6].innerHTML == "х") alert("crosses won");

if(allblock[1].innerHTML == "х" && allblock[4].innerHTML == "х" && allblock[7].innerHTML == "х") alert("crosses won");

if(allblock[2].innerHTML == "х" && allblock[5].innerHTML == "х" && allblock[8].innerHTML == "х") alert("crosses won");

if(allblock[0].innerHTML == "х" && allblock[4].innerHTML == "х" && allblock[8].innerHTML == "х") alert("crosses won");

if(allblock[2].innerHTML == "х" && allblock[4].innerHTML == "х" && allblock[6].innerHTML == "х") alert("crosses won");

//Нолики летсноу

if(allblock[0].innerHTML == "о" && allblock[1].innerHTML == "о" && allblock[2].innerHTML == "о") { 
alert("zeros won");
}
//
if(allblock[3].innerHTML == "о" && allblock[4].innerHTML == "о" && allblock[5].innerHTML == "о") alert("zeros won");

if(allblock[6].innerHTML == "о" && allblock[7].innerHTML == "о" && allblock[8].innerHTML == "о") alert("zeros won");
//
if(allblock[0].innerHTML == "о" && allblock[3].innerHTML == "о" && allblock[6].innerHTML == "о") alert("zeros won");

if(allblock[1].innerHTML == "о" && allblock[4].innerHTML == "о" && allblock[7].innerHTML == "о") alert("zeros won");

if(allblock[2].innerHTML == "о" && allblock[5].innerHTML == "о" && allblock[8].innerHTML == "о") alert("zeros won");

if(allblock[0].innerHTML == "о" && allblock[4].innerHTML == "о" && allblock[8].innerHTML == "о") alert("zeros won");

if(allblock[2].innerHTML == "о" && allblock[4].innerHTML == "о" && allblock[6].innerHTML == "о") alert("zeros won");


console.log(allblock)
  }
};
}
