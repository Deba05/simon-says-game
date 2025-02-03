
let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game has started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    
        btn.classList.add("flash");
        setTimeout(function () {
            btn.classList.remove("flash");
        }, 250);
    
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4); // Changed to *4 to include 0,1,2,3
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`); // Now can get all the elements.

    console.log(randIdx);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
    
    
}
function checkAns(idx){
    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerText=`Game over! Press any key to restart`;
    }
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}
function btnPress(){
    console.log(this);
    let btn=this;
    const color = btn.classList[1]; // Assume the second class is the color
    userSeq.push(color);
    console.log(`User sequence: ${userSeq}`);
    userFlash(btn);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}



