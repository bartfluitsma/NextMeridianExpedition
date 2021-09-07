// hamburger open and close on click
$('.hamburger').on('click', () => { 
  $(".nav-ul").toggleClass("show")
  $(".hamburger").toggleClass("hamburgerFlip")
})

// popup map
$('.openGPS').on('click', () => { 
  $('.popupMap').addClass('popupMapShow').removeClass('popupMap')
  $(".nav-ul").removeClass("show")
  $(".hamburger").removeClass("hamburgerFlip")
})

$('.closeMap').on('click', () => { 
  $('.popupMapShow').addClass('popupMap').removeClass('popupMapShow');
})

$('.popupMap').on('click', () => { 
  $('.popupMapShow').addClass('popupMap').removeClass('popupMapShow');
});

// slidejs
if ($(window).width() < 600) {
  $('.your-class').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
}  else {
  $('.your-class').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
}