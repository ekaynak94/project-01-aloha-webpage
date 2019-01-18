$('.featured-list').flickity({
    // options
    cellAlign: 'center',
    contain: true
  });

$(function() {
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