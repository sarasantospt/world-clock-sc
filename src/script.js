function showDate(event) {
  let currentTime = moment().format("dddd, MMMM D, YYYY h:mm A");
}

let selectElement = document.querySelector("#world-time");
selectElement.addEventListener("change", showDate);
