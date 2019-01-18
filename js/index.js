

$(function() {
//  smooth scrolling source @ https://css-tricks.com/snippets/jquery/smooth-scrolling/
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
        $('html, body').animate({
        scrollTop: target.offset().top
        }, 1000);
        return false;
    }
    }
    });

$('.featured-list').flickity({
    cellAlign: 'center',
    contain: true
    });
    
  $(".sign-up-form").on("click", ".sub-button", function() {
    const text = $("input[name='first_name']").val();
    
    if( checkMailValidity(text)===true){
        alert("Thank you for subscrıbıng! Your Mail Address is:"+ text);
    }else{
        alert("Not a valid email address!");
    }
    $("input[name='first_name']").val()="";
  });
});

function checkMailValidity(text){
    if(text.indexOf("@")>=0){
        return true;
    }
    return false;
}