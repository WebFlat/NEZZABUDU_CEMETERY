let x = document.querySelector("#latitude");
let y = document.querySelector("#longitude");
let takeGeo = document.querySelector('#takeGeo');


function getLocation(e) {
    e.preventDefault();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Браузер не поддерживает геолокацию");
    }
}

function showPosition(position) {
    x.value = position.coords.latitude;
    y.value = position.coords.longitude;
}



takeGeo.addEventListener('click', getLocation);
