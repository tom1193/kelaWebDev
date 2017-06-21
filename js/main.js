const mapLinktoDiv = function(className) {
  $(className).click(function() {
    window.open($(this).find("a").attr("href"), '_blank');
    return false;
  });
}
// https://css-tricks.com/snippets/jquery/smooth-scrolling/
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });
$(document).ready(function(){

  // apply link to all divs
  mapLinktoDiv(`.press-link`);
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
