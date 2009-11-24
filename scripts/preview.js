$(function() {
  var converter = new Showdown.converter();
  $("#user_input").keyup(function(){
    var txt = $("#user_input").val();
    var html = converter.makeHtml(txt);
    $("#result").html(html)
  });
});
