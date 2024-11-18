function display_interval() {
    let los_angelesElement = document.querySelector("#los_angeles");
    if (los_angelesElement) {
        let los_anglesTimeElement = los_angelesElement.querySelector(".time");
        let los_angelesDateElement = los_angelesElement.querySelector(".date");
        let los_anglesDate = moment().tz("America/LosAngeles");

        los_angelesDateElement.innerHTML = los_anglesDate.format("MMMM Do YYYY");
        los_anglesTimeElement.innerHTML = los_anglesDate.format("h:mm:ss [<small>]A[<small>] ");
    }
    //paris


    let parisElement = document.querySelector("#paris");
    if (parisElement) {
        let parisTimeElement = parisElement.querySelector(".time");
        let parisDateElement = parisElement.querySelector(".date");
        let parisDate = moment().tz("Europe/Paris");

        parisDateElement.innerHTML = parisDate.format("MMMM Do YYYY");
        parisTimeElement.innerHTML = parisDate.format("h:mm:ss [<small>]A[<small>] ");
    }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
display_interval();
setInterval(display_interval, 1000);
