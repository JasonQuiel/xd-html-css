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