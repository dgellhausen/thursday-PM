$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    console.log("the form was submitted")
    console.log(name);
    var message = $("#comment").val();
    console.log(message);
  })
})