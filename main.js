let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  document.querySelector("#sub").value = "Submiting..";

  let data = new FormData(form);

  fetch(
    "https://script.google.com/macros/s/AKfycbyDYAsU3JMQ_HjuPRCkVITPbSO8opug1jGbuIiGhtfoJ7ZxiuYvG1wv6KAFo-wQ2yKYqg/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      document.querySelector("#msg").innerHTML = data;
      document.querySelector("#sub").value = "Submit";
    });
});
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactform');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    form.reset();
  });
});

let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});
// Target date and time (year, month (zero-based), day, hours, minutes, seconds)
const targetDate = new Date(2024, 1, 14, 12, 0, 0); // February 14, 2024, 12:00:00

function createTimerPart(label, value) {
  const partContainer = document.createElement("div");
  partContainer.classList.add("timer-part");

  const number = document.createElement("div");
  number.classList.add("timer-number");
  number.textContent = value;

  const labelElement = document.createElement("div");
  labelElement.classList.add("timer-label");
  labelElement.textContent = label;

  partContainer.appendChild(number);
  partContainer.appendChild(labelElement);

  return partContainer;
}

function updateTimer() {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  if (timeDifference <= 0) {
    clearInterval(timerInterval);
    document.getElementById("timer-container").textContent = "00:00:00";
  } else {
    const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    const timerContainer = document.getElementById("timer-container");
    timerContainer.innerHTML = ""; // Clear previous content

    // Create and append individual timer parts
    timerContainer.appendChild(createTimerPart("Days", pad(days)));
    timerContainer.appendChild(createTimerPart("Hours", pad(hours)));
    timerContainer.appendChild(createTimerPart("Minutes", pad(minutes)));
    timerContainer.appendChild(createTimerPart("Seconds", pad(seconds)));
  }
}

function pad(number) {
  return number < 10 ? "0" + number : number;
}

// Update the timer every second
const timerInterval = setInterval(updateTimer, 1000);

// Initial call to update the timer immediately
updateTimer();
