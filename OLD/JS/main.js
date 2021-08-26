window.onload = function(){ //load when everything else is loaded

// hamburger open and close on click
$('.hamburger').on('click', () => { 
  $(".nav-ul").toggleClass("show")
  $(".hamburger").toggleClass("hamburgerFlip")
})

// COUNTDOWN
// Set the date we're counting down to
var countDownDate = new Date("Apr 1, 2022 15:37:25").getTime();

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

//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open").on("click", function() {
  $(".popup-overlay, .popup-content").addClass("active");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close, .popup-overlay").on("click", function() {
  $(".popup-overlay, .popup-content").removeClass("active");
});


} // end of onload