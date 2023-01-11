let degrees = 0;
$(document).ready(function(){

    setTimeout(()=>{
        $(".scrollReminder").css("color","rgba(0,0,0,0.4)");
    },1000
    )

    addEventListener("scroll", (event) => {
        // When the page has been scrolled, stop displaying scroll reminder (don't turn it back on)
        $(".scrollReminder").css("color","rgba(0,0,0,0)");
        console.log("we are scrolling")
        degrees ++
        $("#rect01").css("transform",`rotate(${degrees/2}deg)`)
        $("#rect02").css("transform",`rotate(${degrees/3}deg)`)

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
            $(this).parent().find(".collapsibleWorks").css("height","40vh")
        }else{
            $(this).parent().find(".collapsibleWorks").removeClass("Opened")
            $(this).parent().find(".collapsibleWorks").css("height","0vh")
        }
    })
})

