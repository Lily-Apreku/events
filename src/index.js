function showTemperature(event) {
  event.preventDefault();
  let monday = document.querySelector("button");
  monday.innerHTML = "18 degrees";
}

let button = document.querySelector("button");
button.addEventListener("click", showTemperature);
