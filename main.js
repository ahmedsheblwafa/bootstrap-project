var x = document.querySelectorAll("#progrssSection")[0]
var animated = false;
window.addEventListener("scroll",()=>{
    if(scrollY>heroSection.offsetHeight){
        myNav.classList.remove("test")
        myNav.classList.add("test2")
    }
    else if(scrollY>heroCaption.offsetTop-heroCaption.offsetHeight){ 
        myNav.classList.add("test")
        myNav.classList.remove("test2")
    }
    else{
        myNav.classList.remove("test")
        myNav.classList.remove("test2")
    }

    if(scrollY>x.offsetTop-500){
        if(!animated){
        animateProgress()}
    }else{
        if(animated){
        unAnimateProgress()}
    }
})    


var counterInterval = {}
var progressArr = [...document.querySelectorAll(".progress-bar")]
var animatedCounterArr = [...document.querySelectorAll(".animatedCounter")]
function animateProgress(){
    
    progressArr.forEach(element=>{
        element.style.transition = `all ${element.dataset.width/50}s`
        element.style.width =  element.dataset.width + "%"
    })
    animatedCounterArr.forEach((element,i)=>{  
        clearInterval(counterInterval[`INRETVAL${i}`])      
        counterInterval[`INRETVAL${i}`] = setInterval(
            function(){
                if(parseInt(element.textContent)<parseInt(element.dataset.target)){
                        
                                    element.textContent=parseInt(element.textContent)+1
                                }
                                else{
                                    clearInterval(counterInterval[`INRETVAL${i}`])
                                }
            }
            ,1000/element.dataset.target)
    })
    animated=true

    
}

function unAnimateProgress(){
    
    progressArr.forEach(element=>{
        element.style.width =  0 + "%"
    })
    animatedCounterArr.forEach((element)=>{    
            console.log(element,"up");   
    })
    animatedCounterArr.forEach((element,i)=>{    
        clearInterval(counterInterval[`INRETVAL${i}`])    
        counterInterval[`INRETVAL${i}`] = setInterval(
            function(){
                if(element.textContent>0){
                    element.textContent--
                }
                else{
                    clearInterval(counterInterval[`INRETVAL${i}`])
                }
            }
            ,1000/element.dataset.target)
        })
        
        animated=false
}

var caption = "join our team"
var i = 0;

setInterval(function(){
    heroCaption.innerHTML +=  caption[i++];
    heroCaption.innerHTML=(i==caption.length+1)?"":heroCaption.innerHTML
    i=(i==caption.length+1)?0:i
},600)
