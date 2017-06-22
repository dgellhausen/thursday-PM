$(document).ready(function(){
  // Your javascript goes here
 $("form").submit(function(event) {
    event.preventDefault();
    var name = $("#input-name").val();
    var comment = $("#input-message").val();
    console.log(comment);
  });
});