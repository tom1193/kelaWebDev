const mapLinktoDiv = function(className) {
  $(className).click(function() {
    window.open($(this).find("a").attr("href"), '_blank');
    return false;
  });
}
$(document).ready(function(){
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
  //open every link in a new tab

  // apply link to all divs. change number based on # of divs
  for (var i=0; i<5; i++){
    mapLinktoDiv(`.press${i}`);
  }
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
  //apply opaque nav when mobile
});

