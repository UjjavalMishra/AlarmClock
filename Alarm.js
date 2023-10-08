// function timeNow shows the current time 
function timeNow(){
let day = new Date();
let hour = day.getHours();
let minute = day.getMinutes();
let second = day.getSeconds();
let AP =  hour>=12?"AM":"PM";
hour = hour>=12?hour-12:hour;
hour = hour<10?("0"+hour):hour;
minute = minute<10?("0"+minute):minute;
second = second<10?("0"+second):second;
let time = hour+":"+minute+":"+second+" "+AP;
document.getElementById("clc").innerHTML = time;

let inputH = parseInt(document.getElementById("h").value);
let inputM = parseInt(document.getElementById("m").value);
let inputS = parseInt(document.getElementById("s").value);



if(hour===inputH && minute===inputM &&second === inputS){
    playSound;
}

function playSound(){
    let sound = new Audio("https://www.fesliyanstudios.com/play-mp3/4391");
    sound.play();
}

let set = document.getElementById("btn");

set.addEventListener("click",playSound);
}
setInterval(timeNow,1000);

