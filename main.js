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
})

// COUNTDOWN
// Set the date we're counting down to
var countDownDate = new Date("Apr 18, 2022 08:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="timer"
  document.getElementById("timerDays").innerHTML = days;

  // Output the result in an element with id="timer"
  document.getElementById("timerHours").innerHTML = hours;

  // Output the result in an element with id="timer"
  document.getElementById("timerMinutes").innerHTML = minutes;

  // Output the result in an element with id="timer"
  document.getElementById("timerSeconds").innerHTML =  seconds ;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

// slidejs
if ($(window).width() < 600) {
  $('.your-class').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
} else if ($(window).width() < 1000) {
  $('.your-class').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
} else {
  $('.your-class').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
}
