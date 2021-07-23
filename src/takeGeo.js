let x = document.querySelector("#latitude");
let y = document.querySelector("#longitude");
let takeGeo = document.querySelector('#takeGeo');


var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
function showPosition(position) {
    x.value = position.coords.latitude;
    y.value = position.coords.longitude;
    if (position.coords.accuracy > 10) {
        alertMessage("Показания GPS не точные!");
    };
};

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
};

function getLocation(e) {
    e.preventDefault();
    if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(showPosition, error, options);

    } else {
        alert("Браузер не поддерживает геолокацию");
    };
};


takeGeo.addEventListener('click', getLocation);
// const readLocation = (e) => {
//     e.preventDefault();
//     if (navigator.geolocation) {
//         const geoId = navigator.geolocation.watchPosition(
//             (position) => {
//                 const lat = position.coords.latitude;
//                 const lng = position.coords.longitude;
//                 // setLocation({ lat, lng });
//                 // setAccuracy(position.coords.accuracy);
//                 console.log({ lat, lng }, position.coords.accuracy);
//                 if (position.coords.accuracy > 10) {
//                     console.log("The GPS accuracy isn't good enough");
//                 }
//             },
//             (e) => {
//                 console.log(e.message);
//             },
//             { enableHighAccuracy: true, maximumAge: 2000, timeout: 5000 }
//         );
//         return () => {
//             console.log('Clear watch called');
//             window.navigator.geolocation.clearWatch(geoId);
//         };
//     }

//     return;
// };
// takeGeo.addEventListener('click', readLocation);
