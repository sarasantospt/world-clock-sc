function showDate(event) {
  let currentTime = moment().format("dddd, MMMM D, YYYY h:mm A");

  alert(`It is ${currentTime} in ${event.target.value}`);
}

let selectElement = document.querySelector("#world-time");
selectElement.addEventListener("change", showDate);
