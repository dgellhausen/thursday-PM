$(document).ready(function(){
  // Your javascript goes here
  console.log("page is loaded");
  var form = $("#message-form");
  console.log(form);
  $(form).submit(function(event){
    event.preventDefault();
    console.log("the form was submitted");
    var name = $("#input-name").val();
    var message = $("#input-message").val();
    var postName = name + ": ";
    var newPostText = name + ": " + message;
    if (name != "" && message != ""){
      var newPost = $("ul").append("<li class='message-box'><span class='name'>" + postName + "</span>" + message + "</li>");
      $(".center").val("");
    }
  });
});