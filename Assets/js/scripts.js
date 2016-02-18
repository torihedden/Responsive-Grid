$(document).ready(function(){
  'use strict'

  $(".cat-button").click(function(){
    // console.log(parseInt($(".cat-number").val()));
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
  });
  //closes cat-button .click

  $("li").click(function(){
      $($(this)).toggleClass("expand-view");
  });
  //closes li.click

});//closes document.ready

    // if (catNumber == NaN){
    //   console.log("That's not a number!")
    // } else {
    //   console.log(parseInt(catNumber, 10));
    // }
