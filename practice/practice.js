$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var comment = $("#comment").val()
    console.log(comment);
  });
})