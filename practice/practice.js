  $(document).ready(function(event){
    $("form").submit(function() {
  console.log("the form was submitted")
    event.preventDefault();
    var name = $("#name").val();
    console.log(name);
    event.preventDefault();
    var name = $("#name").val();
    var comment = $("#comment").val();
    console.log(comment);
    })
})