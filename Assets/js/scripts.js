$(document).ready(function(){
  'use strict'

  $(".cat-button").click(function(){

    if (parseInt($(".cat-number").val()) === 0){
      console.log("You need cats");
    } else if (parseInt($(".cat-number").val()) > 24){
      console.log("too many cats");
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

    $("li").click(function(){
      $($(this)).toggleClass("expand-view");
    });
  //closes li.click

});//closes document.ready
