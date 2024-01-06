$(".card1").click(function(){

    // $(".second").css("height","200vh").append("div").addClass("intro");
    // $(".intro").add("div").addClass("trailer");   
    $(".second .intro").css("display","block");
    $(".main").css("height","570vh");
    $("iframe").attr("src","https://www.youtube.com/embed/dmtK7RiIz1A?si=-5qLLmdgJx2qpQKG");

});

$(".card2").click(function(){
    
    $(".second .intro").css("display","block");
    $(".main").css("height","590vh");
    $("iframe").attr("src","https://www.youtube.com/embed/5yb2N3pnztU?si=o2Cu11NASlx5deQ5");

});

$(".card3").click(function(){

    $(".second .intro").css("display","block");
    $(".main").css("height","590vh");
    $("iframe").attr("src","https://www.youtube.com/embed/8OkpRK2_gVs?si=E6JIWbSN1d1IdGUu");

});
