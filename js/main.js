//RESPONSIVE NAVBAR
function responsiveNavBar(){
    
    const navButton = document.
    getElementById('navBarButton');

    navButton.addEventListener('click', function(){
        
        toggleNavBar();
        filterBackground();
        //Button animations for navBar
        navButton.classList.toggle('toggledNavButton');
        
    })
    
    function toggleNavBar(){
        
        const navBarToggled = navButton.
        nextElementSibling.classList.
        contains('toggle');
    
        if(navBarToggled){
            //Checks IF it's toggled or not.
            navButton.nextElementSibling.
            classList.toggle('toggle')
            //Fades in the navBar after been toggled.
            setTimeout(function(){
                
                navButton.nextElementSibling.
                classList.toggle('navLinksFade')
    
                setTimeout(function(){
                    //Fades links with some delay
                    navButton.nextElementSibling.
                    firstElementChild.classList.
                    toggle('ulFade');
                }, 400)
            })
        
        } else {
            
            //Fade the links first
            navButton.nextElementSibling.
            firstElementChild.classList.
            toggle('ulFade');
            
            setTimeout(function(){
                navButton.nextElementSibling.
                classList.toggle('navLinksFade')
                
                setTimeout(function(){
                    //Fades links with some delay
                    navButton.nextElementSibling.
                    firstElementChild.classList.
                    toggle('fadeOut');
                    navButton.nextElementSibling.
                    classList.toggle('toggle');
                }, 400)
            }, 300)

        }
    }
    
    function filterBackground(){
        
         const main = navButton.parentElement.
         parentElement.parentElement.
         nextElementSibling
         
         const footer = navButton.parentElement.
         parentElement.parentElement.nextElementSibling.
         nextElementSibling
         
         main.classList.toggle('backgroundFilter');
         footer.classList.toggle('backgroundFilter');
        
    }
    
}
responsiveNavBar()

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

//FOLD DOWN ANIMATION
function viewFoldDown(){
    
    const displayFoldDown = document.
    getElementById('displayFoldDown');
    
    const foldDownArr = ["firstly", "secondly", "thirdly", "lastly", "et cetera"];
    
    let divs = ""
    
    for(i = 0; i < foldDownArr.length; i++){
        divs +=`
            <div class="foldDownDiv fadeOut">${foldDownArr[i]}</div>
        `;   
    }
    
    displayFoldDown.innerHTML=divs 
    
    const foldDownDiv = document.getElementsByClassName('foldDownDiv');
    

    function runfoldDown(){
        
        setTimeout(function(){
            
            displayFoldDown.children[x].
            classList.remove('fadeOut')
            x++
        
            if(x < foldDownArr.length){
                runfoldDown();
            }
        },150)
    }
    x = 0;
    runfoldDown();
}

const startFoldDownAnimation = document.getElementById('startFoldDown');

startFoldDownAnimation.addEventListener('click', viewFoldDown)