const mapLinktoDiv = function(className) {
  $(className).click(function() {
    window.open($(this).find("a").attr("href"), '_blank');
    return false;
  });
}
// https://css-tricks.com/snippets/jquery/smooth-scrolling/
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

$(document).ready(function(){

  // apply link to all divs. change number based on # of divs
  for (var i=0; i<7; i++){
    mapLinktoDiv(`.press${i}`);
  }
    //apply opaque nav when mobile
  if($(window).width() <= 768){
    $('.navbar').addClass('opaque');
  }
/*height in pixels when the navbar becomes non opaque*/ 
  $(window).scroll(function() {
    if($(this).scrollTop() < 50 && $(window).width() >= 768)  
    {
        $('.navbar').removeClass('opaque');
    } else {
        $('.navbar').addClass('opaque');
    }
  });
  //must go last because slick not defined for other pages
  $('.press-slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
  ]
  });
});

