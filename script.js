$(document).ready(function(){
  // Your javascript goes here
  console.log('Page is loaded')
  var form = $("#message-form")
  console.log(form);
  $(form).submit(function(event){
    event.preventDefault();
    console.log("The form was submitted");
    var name = $("#input-name").val();
    var message = $("#input-message").val()
    console.log("Name: " + name);
    console.log("Message: " + message);
    $("#message-box").append("<li class='message-box'><span class='name'>" + name + ": </span>" + message + "</li>")
  })
  $("#clear").click(function(){
    $(".message-box").val("")
  })
});