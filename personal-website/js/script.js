let degrees = 0;
$(document).ready(function(){


    setTimeout(()=>{
        $(".scrollReminder").css("color","rgba(0,0,0,0.4)");
    },1000
    )

    //Make name shake a little bit if it hasn't been clicked in a few seconds
    //.. here ..

    let nameShake = setInterval(()=>{
    $("#name").addClass("tilt-shaking")
    setTimeout(()=>{
        $("#name").removeClass("tilt-shaking");
    },700)
    },5000)

    addEventListener("scroll", (event) => {
        // When the page has been scrolled, stop displaying scroll reminder (don't turn it back on)
        $(".scrollReminder").css("color","rgba(0,0,0,0)");
        degrees ++
        $("#rect01").css("transform",`rotate(${degrees/2}deg)`)
        $("#rect02").css("transform",`rotate(-${degrees/3}deg)`)
        $("#rect03").css("transform",`rotate(${degrees/4}deg)`)
    })

    //When hover over a button, all the stripes turn grey ? or like they're all randomly generated colors, but they all turn one specific of three colors   
    $(".worksButton").hover(
        function() {
        console.log("hovering")
        $(".rectangle").css("background-color","rgba(150,150,150,0.4)");
      }, function() {
        $(".rectangle").css("background-color", "")
      })

    //when you click on a section's button, it opens the list of files and translates everything up to center the content on the page

    $(".worksButton").click(function(){
        if(!$(this).parent().find(".collapsibleWorks").hasClass("Opened")){
            $(this).parent().find(".collapsibleWorks").addClass("Opened")
            $(this).parent().find(".collapsibleWorks").css("height","20vh")
        }else{
            $(this).parent().find(".collapsibleWorks").removeClass("Opened")
            $(this).parent().find(".collapsibleWorks").css("height","0vh")
        }
    })


    $("#name").click(function(){
        if (!$(this).hasClass("rotated")){
            $(this).css("transform","rotate(90deg)");
            $("#picture").css("transform","rotate(0deg) scale(2) translate(5%)")
            $(this).addClass("rotated");
            clearInterval(nameShake);
        } else {
            $(this).css("transform","rotate(0deg)");
            $("#picture").css("transform","rotate(-90deg) scale(2) translate(30px)")
            $(this).removeClass("rotated");
        }
    })

    $("#websiteName").click(function(){
        if (!$(this).hasClass("rotated")){
            $(this).css("transform","rotate(90deg)");
            $(this).addClass("rotated");
        } else {
            $(this).css("transform","rotate(0deg)");
            $(this).removeClass("rotated");
        }

    
    })

  
//   ======= Exercice 1 =======

//Clicking on ex1 button will make the window slide in from the right
$("#btn-ex1").on("click", function(){
$(".ex1").toggleClass("ex1-opened");    
})

//when user clicks on circle, circle 'drops', and goes back up after 3 seconds (using css)
// text about having to click circle changes and disappears with css animation
$(".circle").on("click",function(){
    //remember the original height position of the specific circle
    let cirHeight = $(this).css("top")
    // drop the circle and wait 3 seconds to put it back to its original positin
    $(this).css("top","65vh")
    setTimeout(()=>{
    $(this).css("top",`${cirHeight}`)
    },3000
    )
    if(!$("#ex01-text").hasClass("ex01-text-closed")){
        $("#ex01-text").addClass("ex01-text-closed")
        $("#ex01-text").text("Great Job!")
        $("#ex01-text").css("color","rgba(0,0,0,0)")
        //Wait 2 seconds and stop displaying the text entirely
        setTimeout(function(){
            $("#ex01-text").css("display","none")
        },4000)
    }
})

// Clicking on 'go back' will closed the window by sliding it out
$("#goBack-ex1").on("click",function(){
$(".ex1").toggleClass("ex1-opened");   
})

})



