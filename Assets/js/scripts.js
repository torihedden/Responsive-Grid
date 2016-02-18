$(document).ready(function(){
  'use strict'

  $("li").click(function(){
      $($(this)).toggleClass("expand-view");
  });

  $(".cat-button").click(function(){
    // if ($("input").val() === 0){
    //   $(".header")
    // }

    var catNumber = $("input").val();

    if (catNumber == NaN){
      console.log("That's not a number!")
    } else {
      console.log(parseInt(catNumber));
    }

  });

});
