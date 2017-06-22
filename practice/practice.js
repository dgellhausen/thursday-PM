$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    console.log("The form was submitted.");
    var name = $("#name").val();
    console.log(name);
    var comment = $("#comment").val();
    console.log(comment);
  })
})