const count_down_date = new Date("oct 10, 2023 00:00:00").getTime();
console.log(count_down_date);

const count = setInterval(() => {
  let currentDate = new Date().getTime();
  let distance = count_down_date - currentDate;
  let seconds = distance / 1000;

  let days = Math.floor(seconds / (60 * 60 * 24));
  let hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
  let minutes = Math.floor((seconds % (60 * 60)) / 60);
  let sec = Math.floor(seconds % 60);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = sec;

  if (seconds < 0) {
    clearInterval(count);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);
