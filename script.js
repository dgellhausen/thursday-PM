$(document).ready(function(){
  // Your javascript goes here
  console.log("page is loaded");
  var form = $("#message-form");
  console.log(form);
  $(form).submit(function(event){
    event.preventDefault();
    console.log("the form was submitted");
    // Declaring variables
    var name = $("#input-name").val();
    var message = $("#input-message").val();
    var postName = name + ": ";
    var newPostText = name + ": " + message;
    var newLogMessage = name
    var today = new Date();
    var date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
    var time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    var completeTime = `${date} ${time}`;
    console.log(`${date} ${time}`);
    //
    if (name != "" && message != ""){
      var newPost = $("#boardmessage").append(`<li class='message-box'><span class='name'> ${postName} </span> ${message} (posted at ${date})</li>`);
      $(".center").val("");
      var newLog = $("#loglist").append(`<li class="log-box"><span class="name"> ${newLogMessage} has joined the room</li>`)
    }
  });
});