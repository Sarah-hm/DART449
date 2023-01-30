window.onload = (event) => {
    
const btnEx02 = document.querySelector("#btn-ex2")
const ex2 = document.querySelector(".ex2")

//Open exercice 02 when ex2 button is clicked (slide from left)
btnEx02.addEventListener(`click`, function(){
    ex2.classList.toggle("ex2-opened")
})


  };