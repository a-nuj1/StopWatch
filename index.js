const timeDisplay = document.querySelector("#timedisplay");
const startBtn = document.querySelector("#startbtn");
const pauseBtn = document.querySelector("#pausebtn");
const resetBtn = document.querySelector("#resetbtn");

let startTime = 0;
// let currTime = 0;
let elaspsedTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let min = 0;
let sec = 0;
let ms = 0;


startBtn.addEventListener("click",()=>{
    if(paused){
        paused = false;
        startTime = Date.now() - elaspsedTime;
        intervalId = setInterval(updateTime, 10);
    }
})

pauseBtn.addEventListener("click",()=>{
    if(!paused){
        paused = true;
        elaspsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
})

resetBtn.addEventListener("click",()=>{
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    // currTime = 0;
    elaspsedTime = 0;
    hrs = 0;
    min = 0;
    sec = 0;

    timeDisplay.textContent = "00:00:00:000";
})

function updateTime(){
    elaspsedTime = Date.now() - startTime;
    ms = ('00' + (elaspsedTime % 1000)).slice(-3);
    sec = Math.floor((elaspsedTime/1000) % 60);
    min = Math.floor((elaspsedTime/(60 * 1000)) % 60);
    hrs = Math.floor((elaspsedTime/(60 * 60 * 1000)) % 60);

    sec = pad(sec);
    min = pad(min);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${min}:${sec}:${ms}`;

    function pad(unit){
        return (("0") + unit).slice(-2);
    }
}