$(document).ready(function(){
  // Your javascript goes here
  console.log("page is loaded");
  var form = $("#message-form");
  console.log(form);

  $("#message-form").submit(function(){
    event.preventDefault();
    console.log("The form has been submitted")
    var name = $( "#input-name" ).val();
    var message = $( "#input-message" ).val();
    console.log(name);
    console.log(message);
    $( "#message-board" ).append(`<li class='message-box'><span class='name'> `+ name+ `: </span>`+message+`</li>`);
  });

});
