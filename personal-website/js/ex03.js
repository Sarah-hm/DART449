

window.onload = (event) => { 

const ex3btn = document.querySelector("#btn-ex3")
const ex3 = document.querySelector(".ex3")
const ex3title = document.querySelector("#ex03-text")
const closeBtn = document.querySelector("#ex03-close-btn")
const contentPage = document.querySelector("#ex03-content-page");
let buttons = document.querySelectorAll(".ex03-single-button");
let seenVisualizations = 0;

ex3btn.addEventListener(`click`, function(){
    ex3.classList.toggle("ex3-opened")

})

closeBtn.addEventListener('click',function(){
    ex3.classList.remove("ex3-opened");
    //Reset the exercices to 0 after it slides out of the window
    setTimeout(function(){ 
        document.querySelector("#ex03-content-page-text").style.color = "rgba(0,0,0,0)"
        seenVisualizations = 0;
        buttons.forEach(function(el){
            el.classList.remove("has-been-opened")
        })
        contentPage.style.background = "rgb(255,255,255)"
        ex3title.innerHTML = ` Click on different tabs to see different visualization of the data [ There will not be any more data than last time ]`

    },2000)
})

buttons.forEach(function(el){ 
    let btn = el.getAttribute('id')
    el.addEventListener('click',() => {
        document.querySelector("#ex03-content-page-text").style.color = "rgba(0,0,0,1)"

        if(btn == "ex03-btn01"){
            contentPage.style.background = "rgb(102,255,255)"
            if(!el.classList.contains("has-been-opened")){ 
                el.classList.add("has-been-opened")
                seenVisualizations++
            }   
        }
        else if(btn == "ex03-btn02"){ 
            contentPage.style.background = "rgb(102,255,178)"
            if(!el.classList.contains("has-been-opened")){ 
                el.classList.add("has-been-opened")
                seenVisualizations++
            }    
        }
        else if(btn == "ex03-btn03"){ 
            contentPage.style.background = "rgb(255,255,102)"
            if(!el.classList.contains("has-been-opened")){ 
                el.classList.add("has-been-opened")
                seenVisualizations++
            }    
        }
        else if(btn == "ex03-btn04"){ 
            contentPage.style.background = "rgb(255,153,255)"
            if(!el.classList.contains("has-been-opened")){ 
                el.classList.add("has-been-opened")
                seenVisualizations++
            }     
        }      
        else if(btn == "ex03-btn05"){ 
            contentPage.style.background = "rgb(255,102,102)"
            if(!el.classList.contains("has-been-opened")){ 
                el.classList.add("has-been-opened")
                seenVisualizations++
            }   
        }
        if(seenVisualizations<5){    
            //change the welcome text to how many visualization users has seen
            ex3title.innerHTML = `You have seen ${seenVisualizations} visualizations`
            } else if (seenVisualizations => 5){
            ex3title.innerHTML = `You have seen all ${seenVisualizations} data visualizations.`
            }
    }) //Clicked visualization button 
})

}
