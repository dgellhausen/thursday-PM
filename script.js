$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var name = $("#input-name").val();
    console.log(name);
    var message = $("#input-message").val();
    console.log(message);  
    $("#message-board").append("<li class='message-box'><span class='name'>[bob]: </span>[Hello is this thing on]</li>");
      

  })
 
});