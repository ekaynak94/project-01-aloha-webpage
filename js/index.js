

$(function() {
    $("a[href^='#']").not("a[href='#']").click(function() {
        $("#"+$(this).attr("href").slice(1)+"").focus();
     });
//  smooth scrolling source @ https://css-tricks.com/snippets/jquery/smooth-scrolling/
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
        $('html, body').animate({
        scrollTop: target.offset().top-offSet()
        }, 1000);
        return false;
    }
    }
    });
//Featured Items
$('.featured-list').flickity({
    cellAlign: 'center',
    contain: true
    });
//Subscription form
  $(".sign-up-form").on("click", ".sub-button", function() {
    const text = $("input[name='email_address']").val();
    if( checkEmailValidity(text)===true){
        alert("Thank you for subscrıbıng!");
    }else{
        alert("Not a valid email address!");
    }
    $("input[name='email_address']").val()="";
  });
  //Cart Icon stretch goal 
  let cartItems=0;
  $(".featured-list").on("click", ".cart-button", function() {
    cartItems++;
    if(cartItems===1){
        $(".cart").append("<button class='cart-indicator'>"+cartItems+"</button>");
    }else{
        $(".cart").children("button").html( cartItems);
    }
  });
  //The code below empties the cart after clicking on the button that is on top of cart logo
  $(".header").on("click", ".cart-indicator", function() {
      cartItems=0;
    $(".cart").children("button").remove();
  });
});

// email validity checker source @https://stackoverflow.com/a/2507043
function checkEmailValidity(email){
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

//Determines the offset for the scroll depending on the screen size
function offSet(){
    if($(window).width() < 600){
        return 150;
    }else{
        return 100;
    }
}