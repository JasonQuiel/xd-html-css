// Side Navigation Function
$('.canvas-toggle').hide();

function sideNav() {

  if ($(window).width() <= 1133) {
     $('.sidebar').hide();
        } else {
          $('.sidebar').show();
        }
}

$('.canvas-toggle').click(function() {
  });

$(window).resize(function() {

  sideNav();

});


// Slide
$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});