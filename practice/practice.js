$(document).ready(function(){
  $("form").submit(function(event){

    event.preventDefault();

    var name = $("#name").val();
    console.log("Name: " + name);

    var comment = $("#comment").val();
    console.log("Comment: " + comment);

    console.log("The form was submitted");

  })
})