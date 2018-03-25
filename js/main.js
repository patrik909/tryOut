//RESPONSIVE NAVBAR
function responsiveNavBar(){
    
    const navButton = document.
    getElementById('navBarButton');

    navButton.addEventListener('click', function(){
        
        toggleNavBar();
        filterBackground();
        //Button animations for navBar
        navButton.classList.
        toggle('toggledNavButton');
        
    })
    
    function toggleNavBar(){
        
        const navBarToggled = navButton.nextElementSibling.
        classList.contains('toggle');
       

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
                    
                }, 300)
            },100)
        
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
                    classList.toggle('toggle')
                }, 300)
            }, 100)

        }
        
    }
    
    function filterBackground(){
        
         const banner = navButton.parentElement.parentElement.
         parentElement.nextElementSibling
         
         const main = navButton.parentElement.
         parentElement.parentElement.parentElement.
         nextElementSibling
         
         const footer = navButton.parentElement.
         parentElement.parentElement.parentElement.
         nextElementSibling.nextElementSibling
        
         banner.classList.toggle('backgroundFilter');
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

//SLIDE SHOW ANIMATION
function slideShowBanner(i){
    
    const slideShowBannerDiv = document.
    getElementById('slideShow');
    
    const bannerImages = [
        "cafeInterior.jpg", 
        "perestrianStreet.jpg",
        "masseHall.jpg"
    ];
    
    const dotWrapper = document.
    getElementById('slideDotsWrapper')
        
    let dots = "";
    for(i = 0; i < bannerImages.length; i++){
        dots +=`<div class="slideDot"></div>`;
    }
        
    dotWrapper.innerHTML=dots;

    function startSlide(i){
        if(i <= bannerImages.length-1){
             addSlide = `
                <div class="slideWrapper fadeSlide">
                    <img src="images/${bannerImages[i]}">
                </div>
            `;
            const dot = `<div id="slideDotsWrapper"></div>`

            slideShowBannerDiv.innerHTML=addSlide+dot

            slideShowBannerDiv.
            nextElementSibling.children[i].
            classList.add('activeDot');
            
            setTimeout(function(){
            slideShowBannerDiv.
            nextElementSibling.children[i].
            classList.remove('activeDot'); 
            }, 2500)
            
            setTimeout(function(){
                slideShowBannerDiv.firstElementChild.
                classList.remove('fadeSlide');
            })
            
            setTimeout(function(){
                
                if(i === bannerImages.length-1){ 
                    i = 0;
                } else {
                    i++
                }
                
                startSlide(i) 
            }, 2500)
        }
    }
    
    i = 0;
    startSlide(i)
}
slideShowBanner()

//FOLD DOWN ANIMATION
function foldDownAnimtion(){
    
    const startFoldDownAnimation = document.getElementById('startFoldDown');
    startFoldDownAnimation.
    addEventListener('click', startFoldDown);
    
    function startFoldDown(){
    
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

}
foldDownAnimtion();