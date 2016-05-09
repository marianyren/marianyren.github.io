(function($) {
////////////////////////////////////////////////
  $.fn.accordian = function() {
      $( "li" ).has( "> ul" ).addClass( "category" );
      $(".accordian li").click(function (e) {
          e.stopPropagation()
          $(this).addClass("accordianClicked");
          if ( $(".accordianClicked > ul").is(":visible") ) {
            $(".accordianClicked ul").slideUp();
          } else {
            $(".accordianClicked > ul").slideDown();
          }
          $(".accordianClicked").removeClass("accordianClicked");
      });
    }
//////////////////////////////////////////////
}(jQuery));

$(".accordian").accordian();