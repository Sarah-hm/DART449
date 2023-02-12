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




  };    



// Not my code, copied from another personal project of mine. Can't remember where I took it. Codepen? aaaaaaah.
  function generateLightColorRgb() {
    const red = Math.floor((1 + Math.random()) * 256/2);
     const green = Math.floor((1 + Math.random()) * 256/2);
     const blue = Math.floor((1 + Math.random()) * 256/2);
     return "rgba(" + red + ", " + green + ", " + blue ;
} 