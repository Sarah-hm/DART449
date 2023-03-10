

window.onload = (event) => { 


const btnEx02 = document.querySelector("#btn-ex2")
const welcomeMessage = document.querySelector("#ex2-welcome-message")
const ex02CloseBtn = document.querySelector("#close-ex02")
const ex2 = document.querySelector(".ex2")
const submitBtn = document.querySelector("#ex2-submit");
const textArea = document.querySelector(`#ex2-textArea`)
let submitBtnCount = 0; 
let submittedOnce = false;
let username;


//Open exercice 02 when ex2 button is clicked (slide from left)
btnEx02.addEventListener(`click`, function(){
    ex2.classList.toggle("ex2-opened")
    console.log(textArea.value)
})

ex02CloseBtn.addEventListener(`click`,function(){
    ex2.classList.toggle("ex2-opened")
    submittedOnce = false; 
    submitBtnCount = 0; 
    setTimeout(function(){ 
      welcomeMessage.innerHTML = "You are feeling welcomed, again."
      submitBtn.innerHTML = "I am certain this is my name. Submit my answer";
      
      ex2.style.background = ` linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 15%, rgba(255,255,255,1) 30%)`;
      textArea.value = ""
    }, 1500)



})

//When submit button is clicked, register what's in the text area,  change background color, change button text
submitBtn.addEventListener(`click`, function(){

    //add 1 to the submit Btn Count
    submitBtnCount ++

    //Change the background color to a randomized light-ish color
     let newColor = generateLightColorRgb()
     ex2.style.background = `linear-gradient(270deg, ${newColor},0) 0%, ${newColor},0.7) 15%, ${newColor},1) 30%)`;


     //if user submits for first time, register their name
    if (!submittedOnce){
    submittedOnce = true;
    //Change username variable for the content of the text area
     username = textArea.value;

     submitBtn.innerHTML = `Don't like the background ${username}? Click again and change it`
     return username;
    }

    console.log(submitBtnCount)
   
    if (submitBtnCount >= 5){
        submitBtn.innerHTML = `Ok stop it now, ${username}. You'll never be satisfied anyway.`  
        ex2.style.background = ` linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 15%, rgba(255,255,255,1) 30%)`;
    }

})























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
