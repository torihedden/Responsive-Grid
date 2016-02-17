$(document).ready(function(){
  'use strict'

  $("li").click(function(){
      $($(this)).toggleClass("expand-view");
  });

});
