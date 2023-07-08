$(document).ready(function () {
  function showTime() {
    // To get current time/date
    let date = new Date();

    // Make variables to get hours, min and second
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // AM, PM setting
    let session = "AM";

    // Conditions for time behavior
    if (hours == 0) {
      hours = 12;
    }

    if (hours >= 12) {
      session = "PM";
    }

    if (hours > 12) {
      hours = hours - 12;
    }

    hours = hours < 10 ? "0" + hours : hours;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    // Set the variable to span
    $('#hours').text(hours);
    $('#min').text(min);
    $('#second').text(sec);
    $('#period').text(session);

    // To change time in every seconds
    setTimeout(showTime, 1000);
  }

  showTime();
});
