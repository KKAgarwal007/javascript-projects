let timer = 60;
let score = 0;
var hitran = 0;


    
function increaseScore(){
    score+=10;
    document.querySelector("#score").textContent = score;
}
function hitinterval(){
    hitran = Math.floor(Math.random() * 10);
    document.querySelector("#hitinterval").textContent = `${hitran}`;
}
function Bubble(){
    var cluster = "";
    for(let i = 1; i<=152; i++){
        var random = Math.floor(Math.random() * 10);
        cluster += `<div class="bubble">
                    ${random}
                </div>`
    }

    document.querySelector(".pbtm").innerHTML = cluster;
}

function SetTimer(){
    setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer").innerHTML = `${timer}`;
        }
        else{
           clearInterval(timer)
            document.querySelector(".pbtm").innerHTML = `<h1>Game Over</h1>`;
        } 
        
    
    }, 1000);
}

document.querySelector(".pbtm").addEventListener("click", function(e){
    if(hitran === Number(e.target.textContent)){
        increaseScore();
        Bubble();
        hitinterval();
    }
})
hitinterval();
Bubble();
SetTimer();

