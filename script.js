$(document).ready(function(){
  console.log("The page has loaded!!")
  var form = $("#message-form");
  console.log(form)
  form.submit(function( event ) {
    event.preventDefault();
    console.log("Form was submitted");
    var name = $("#input-name").val();
    var comment = $("#input-message").val();
    console.log(name)
    console.log(comment)
    $("ul").append("<li class='message-box'><span class='name'> "+ name + "</span> "+ comment +" </li>");
    document.getElementById("message-form").reset();
  })
});