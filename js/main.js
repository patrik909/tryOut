//CLOCK

function printCurrentDate(){
    
    let date = document.getElementById('date');
    
    let today = new Date();
    let day = today.getDate();
    let month = today.getUTCMonth()+1;
    let year = today.getFullYear();
    
    date.innerHTML=`${day} / ${month} / ${year}`
    setTimeout(printCurrentDate, 1000);
    
}

function printCurrentTime(){
    
    let time = document.getElementById('time');
    
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let secounds = today.getSeconds();
    
    if(hours < 10){
        hours = "0" + hours;
    }
    
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    
    if(secounds < 10){
        secounds = "0" + secounds;
    }
    
    time.innerHTML=`${hours}:${minutes}:${secounds}`  
    setTimeout(printCurrentTime, 1000);
    
}

printCurrentDate();
printCurrentTime();

const obj = ["patrik", "patrik", "patrik", "patrik", "patrik"]


const output = document.getElementById('output');

let objex = ""
for(i = 0; i < obj.length; i++){
    //console.log(obj[i])
    //setTimeout(function(){
       objex += obj[i] 
    //}, 1000)
    
}
    output.innerHTML=`<div class="fadeOut">${objex}</div>`;