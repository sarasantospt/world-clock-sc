function showDate(event) {
  if (event.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY h:mm A");

    alert(`It is ${currentTime} in ${event.target.value}`);
  }
}

let selectElement = document.querySelector("#world-time");
selectElement.addEventListener("change", showDate);
