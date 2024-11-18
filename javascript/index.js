function display_interval() {
    let los_angelesElement = document.querySelector("#los_angeles");
    let los_anglesTimeElement = los_angelesElement.querySelector(".time");
    let los_angelesDateElement = los_angelesElement.querySelector(".date");
    let los_anglesDate = moment().tz("America/LosAngeles");

    los_angelesDateElement.innerHTML = los_anglesDate.format("MMMM Do YYYY");
    los_anglesTimeElement.innerHTML = los_anglesDate.format("h:mm:ss:SS [<small>]A[<small>] ");
}
setInterval(display_interval, 1);

let parisElement = document.querySelector("#paris");
let parisTimeElement = parisElement.querySelector(".time");
let parisDateElement = parisElement.querySelector(".date");
let parisDate = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisDate.format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisDate.format("h:mm:ss [<small>]A[<small>] ");
