
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 50,
    nav:true,
    loop: true,
    items: 3,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },

      670:{
        items:2,
      },

      1000: {
        items: 3,
      }

    }
  });
});