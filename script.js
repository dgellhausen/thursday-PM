$(document).ready(function(){
  var form = $("#message-form")
  var nl = document.getElementById("nl");
  console.log(form)
  form.submit(function(event){
    event.preventDefault();
    var name = $("#input-name").val();
    console.log(name);
    var message = $("#input-message").val();
    console.log(message);
    var i = name + ": " + message
    console.log(i)
    // var newnlItem = document.createElement("li");
    // var nlValue = document.createTextNode(i); 
    // newnlItem.appendChild(nlValue);
    // nl.appendChild(newnlItem);
    $( "ul" ).append(`<li class='message-box'><span class='name'>${name}: </span>${message}  </li>`);
  })


});