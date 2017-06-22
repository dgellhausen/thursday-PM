$(document).ready(function(){
  // Your javascript goes here
  console.log("page is loaded")
  $("#input-form").submit(function(event){
    event.preventDefault();
    var name = $("#input-name").val();
    $(".name").append(name + ":");
    var message = $("#input-message").val();
    $("span").append(message);
  })
  
});