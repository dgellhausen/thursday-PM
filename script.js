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
    var today = new Date();
    var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" +today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log("Name: " + name);
    console.log("Message: " + message);
    $("#message-box").append("<li class='message-box'><span class='name'>" + name + ": " + "</span>" + message + " " + date + " \xa0\xa0" + time + "</li>")
    $("#input-name").val("");
    $("#input-message").val("");
  })
  $("#clear").click(function(){
    $("#input-name").val("");
    $("#input-message").val("");
  })
});