document.addEventListener("DOMContentLoaded", function(event) {
jQuery(document).scroll(function() {
  var y = jQuery(this).scrollTop();
  if (y < 400) {
    if(window.innerWidth < "600"){
    jQuery('#ad2 a').attr('href', '~')
    jQuery('#ad2 a').html('Message ggoes here')
  }

    jQuery('#ad2').fadeIn();
  } else {
    jQuery('#ad2').fadeOut();
  }
});
});