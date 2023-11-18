function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesTime = moment().tz("America/Los_Angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(" .date");
    losAngelesDateElement.innerHTML = losAngelesTime.format("dddd Do MMMM");
    let losAngelesTimeElement = losAngelesElement.querySelector(" .time");

    losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss A");
  }
  let ParisElement = document.querySelector("#paris");
  if (ParisElement) {
    let ParisDateElement = ParisElement.querySelector(" .date");
    ParisDateElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("dddd Do MMMM");
    let ParisTimeElement = ParisElement.querySelector(" .time");

    ParisTimeElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("H:mm:ss A");
  }
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(" .date");
    sydneyDateElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("dddd Do MMMM");
    let sydneyTimeElement = sydneyElement.querySelector(" .time");

    sydneyTimeElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("H:mm:ss A");
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace().split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
    <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd Do YYYY")}</div>
          </div>
          <div>
            <div class="time">${cityTime.format("H:mm:ss")}</div>
          </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
