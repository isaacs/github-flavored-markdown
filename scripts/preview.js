$(function() {
  var converter = new Showdown.converter();
  $("#user_input").keyup(function(){
    var txt = $("#user_input").val();
    var html = converter.makeHtml(txt);
    $("#result").html(html)
  });

  var sample = "a non-markdown link: http://github.com/blog\nthis one is [a markdown link](http://github.com/blog)\nEmail test: support@github.com\n\n\
mojombo/god@c4149e7bac80fcd1295060125670e78d3f15bf2e\nmojombo/god#1";
  $("#user_input").text(sample);
  $("#result").html(converter.makeHtml(sample));
});
