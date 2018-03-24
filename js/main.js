const navToggleButton = document.getElementById('navBarButton');

navToggleButton.addEventListener('click', function(){
    navToggleButton.nextElementSibling.
    classList.toggle('toggle')
    setTimeout(function(){
        navToggleButton.nextElementSibling.
        classList.toggle('toggleFade')
    })
})

//DATE
function printCurrentDate(){
    
    let date = document.getElementById('date');
    
    let today = new Date();
    let day = today.getDate();
    let month = today.getUTCMonth()+1;
    let year = today.getFullYear();
    
    date.innerHTML=`${day} / ${month} / ${year}`
    setTimeout(printCurrentDate, 1000);
    
}
printCurrentDate();
//CLOCK
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
printCurrentTime();
//Display one at a time animation
function viewDivAnimation(){
    
    const divAnimationWrapper = document.
    getElementById('divAnimationWrapper');
    
    const divAnimationArr = ["firstly", "secondly", "thirdly", "lastly", "et cetera"];
    
    let divs = ""
    
    for(i = 0; i < divAnimationArr.length; i++){
        divs +=`
            <div class="animationDiv fadeOut">${divAnimationArr[i]}</div>
        `;   
    }
    
    divAnimationWrapper.innerHTML=divs 
    
    const animationDiv = document.getElementsByClassName('animationDiv');
    

    function runAnimation(){
        
        setTimeout(function(){
            
            divAnimationWrapper.children[x].
            classList.remove('fadeOut')
            x++
        
            if(x < divAnimationArr.length){
                runAnimation();
            }
        },150)
    }
    x = 0;
    runAnimation();
}

const startDivAnimation = document.getElementById('startDivAnimation');

startDivAnimation.addEventListener('click', viewDivAnimation)
