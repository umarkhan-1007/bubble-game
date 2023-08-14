let timer = 30;
let hitrn = 0 ; 
let scroe = 0 ; 

function increseScore(){
  scroe += 10;
  document.getElementById('scoreVal').textContent = scroe;
}
increseScore();
// --------------------------------------------------------------------------------------------
function getNewHit() {
  hitrn = Math.floor(Math.random() * 20);
  document.getElementById("hitVal").textContent = hitrn ;
}
getNewHit();
// ---------------------------------------make Net Hit end code------------------------------------------

function makeBubble() {
  let culatter = " ";

  for (let i=1; i<=250; i++) {
    let rn = Math.floor(Math.random(1) * 20);
    culatter += `<div class="bubble">${rn}</div>`;
  }

  document.getElementsByClassName("bbox")[0].innerHTML = culatter;
}
makeBubble();
// ---------------------------------------make bubble end code------------------------------------------
function runTimer() {
  let timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.getElementById("timerVal").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.getElementById('bbox').innerHTML = `<h1>Game Is Over <br> Score - ${scroe}`;
    }
  }, 1000);
}
runTimer();
// ---------------------------------------make timer end code-------------------------------------------

document.getElementById("bbox").addEventListener('click', function(detl){
   let clickedN = Number(detl.target.textContent)

   if(clickedN === hitrn){
    increseScore();
    makeBubble();
    getNewHit();
   }
})