$(document).ready(function(){
  // Your javascript goes here
  console.log("page is loaded")
  $("#input-form").submit(function(event){
    event.preventDefault();
    var name = $("#input-name").val();
    var message = $("#input-message").val();
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    $("ul").append("<li class='message-box'>"+ name + ": " + message+ "....." + dateTime+"</li>");
  })
  $("#clear-button").click(function(){
    $("#input-name").val("");
    $("#input-message").val("");
  // $("#clear-button").click(function(){
  //   $(".center").val("");
  })
  
  
});