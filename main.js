let timer = 0;

let timerclock = setInterval(function() {
  timer +=1;
  document.querySelector("#timer").textContent = timer+"%";
  $(".bar").css("width", timer);
    if (timer === 100) {
     clearInterval(timerclock);
     $(".progress").css("display", "none");
     $(".bar").css("display", "none");
     $(".line2").css("display", "none");
     $(".line3").css("display", "none");
     $(".line4").css("display", "none");
     $("#timer").css("display", "none");
     $(".loginfirstlabel").css("display", "inline");
     $(".first").css("display", "inline");
    }
}, 60);



 function enter(event) {
 
 if (event.keyCode = 13) {
 
  if ($(".first").val() === 'login' || $(".first").val() === 'Login' ) {
     $(".loginemaillabel").css("display", "inline");
     $(".login-email").css("display", "inline");
     $(".first").attr("disabled", "disabled");
    
    
   } 
   else if  ($(".first").val() === 'register' || $(".first").val() === 'Register' ) {
     $(".registerfirstnamelabel").css("display", "inline");
     $(".register-firstname").css("display", "inline");
     $(".first").attr("disabled", "disabled");
  
   }
}
}

function emaillogin(event) {
 if (event.key = 13) {
  $("#login-email-button").click();
 }
}
