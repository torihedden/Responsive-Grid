$(document).ready(function(){
  'use strict'

  $(".cat-button").click(function(){

    if (parseInt($(".cat-number").val()) < 1){
      $(".header").replaceWith("<div class = 'header'>you need cats</div>")
    } else if (parseInt($(".cat-number").val()) > 24){
      $(".header").replaceWith("<div class = 'header'>too many cats</div>")
    } else {

      $(".cat-prompt").toggle();

      var newCat = '<li class = "cat-card">' +
             '<img src="assets/images/cat.jpg">' +
             '<div class = "around-name">' +
               '<h3>Felis catus</h3>' +
             '</div>' +
           '</li>';

      for (var i = 1; i < parseInt($(".cat-number").val()); i++){
        $("body").append(newCat);
          }
    }
  });
  //closes cat-button .click

//$("body").on("click", "li", function)
//only the first one expands, this is the same problem as in the text box homework from the jQuery widgets assignment. This event only works with the existing list element
//$("#to-do-list").on('change', 'input', function() <-- use this format tomorrow morning to see if that fixes it

  $("li").click(function(){
    $($(this)).toggleClass("expand-view");
  });
  //closes li.click

});//closes document.ready
