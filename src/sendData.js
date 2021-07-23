let message = document.querySelector('.message__text');
let popup = document.querySelector('.message');
let body = document.querySelector('body');

let alertMessage = (text, time = 1600) => {
    message.innerHTML = text;
    popup.classList.add('active');
    body.style.overflow = 'hidden';
    setTimeout(() => {
        popup.classList.remove('active');
        body.style.overflow = 'auto';
    }, time);
};



//Функции снятия координат
let x = document.querySelector("#latitude");
let y = document.querySelector("#longitude");
let takeGeo = document.querySelector('#takeGeo');

//опции снятия позиции
var options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
};


function showPosition(position) {
    x.value = position.coords.latitude;
    y.value = position.coords.longitude;
    if (position.coords.accuracy > 10) {
        alertMessage("Показания GPS не точные!");
    }
};

function error(err) {
    alertMessage(`ERROR(${err.code}): ${err.message}`);
};

function getLocation(e) {
    e.preventDefault();
    if (navigator.geolocation) {
        alertMessage('Снятие координат', 5000);
        navigator.geolocation.getCurrentPosition(showPosition, error, options);

    } else {
        alertMessage("Браузер не поддерживает геолокацию");
    };
};

takeGeo.addEventListener('click', getLocation);




//Запуск функции камеры при старте приложения
(function () {
    // The width and height of the captured photo. We will set the
    // width to the value defined here, but the height will be
    // calculated based on the aspect ratio of the input stream.

    let width = 320;    // We will scale the photo width to this
    let height = 240;     // This will be computed based on the input stream

    // |streaming| indicates whether or not we're currently streaming
    // video from the camera. Obviously, we start at false.

    let streaming = false;

    // The various HTML elements we need to configure or control. These
    // will be set by the startup() function.

    let video = null;
    let canvas = null;
    let photo = null;

    let onBtn = document.querySelector('#onBtn');
    onBtn.addEventListener('click', startup);

    //Функция запуска камеры
    function startup(e) {
        e.preventDefault();
        video = document.getElementById('video');
        canvas = document.getElementById('canvas');
        photo = document.getElementById('photo');
        navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: { exact: "environment" }
            },
            // video: true,
            audio: false
        })
            .then(function (stream) {
                video.srcObject = stream;
                video.play();
            })
            .catch(function (err) {
                alertMessage("An error occurred: " + err);
            });

        video.addEventListener('canplay', function (ev) {
            if (!streaming) {
                height = video.videoHeight / (video.videoWidth / width);

                // Firefox currently has a bug where the height can't be read from
                // the video, so we will make assumptions if this happens.

                if (isNaN(height)) {
                    height = width / (4 / 3);
                }

                video.setAttribute('width', width);
                video.setAttribute('height', height);
                canvas.setAttribute('width', width);
                canvas.setAttribute('height', height);
                streaming = true;
            }
        }, false);

        clearphoto(e);


    }


    //Запуск камеры
    let startbutton = document.getElementById('startbutton');
    startbutton.addEventListener('click', function (ev) {
        ev.preventDefault();
        if (video) {
            takepicture();
        } else {

            alertMessage('Включите камеру')
        };
    });


    //Ощистка окна вывода фото
    function clearphoto(e) {
        e.preventDefault();
        if (photo) {
            let context = canvas.getContext('2d');
            context.fillStyle = "#fff";
            context.fillRect(0, 0, canvas.width, canvas.height);
            let data = canvas.toDataURL('image/png');
            canvas.setAttribute('data', data);
            photo.setAttribute('src', data);
        } else {
            alertMessage('Сделайте фото');
        };
    };


    //Запуск удаления сделанного фото 
    let clrBtn = document.querySelector('#clearbutton');
    clrBtn.addEventListener('click', clearphoto);

    // Capture a photo by fetching the current contents of the video
    // and drawing it into a canvas, then converting that to a PNG
    // format data URL. By drawing it on an offscreen canvas and then
    // drawing that to the screen, we can change its size and/or apply
    // other changes before drawing it.



    //Функция сделать фото
    function takepicture() {
        let context = canvas.getContext('2d');
        if (width && height) {
            canvas.width = width;
            canvas.height = height;
            context.drawImage(video, 0, 0, width, height);

            let data = canvas.toDataURL('image/png');
            canvas.setAttribute('data', data);
            photo.setAttribute('src', data);
        } else {
            clearphoto(e);
        };
    };



    // Set up our event listener to run the startup process
    // once loading is complete.
    // window.addEventListener('load', startup, false);
})();



const btnSend = document.querySelector('#sendForm');
const url = 'sendRequest.php';
// const url = 'https://jsonplaceholder.typicode.com/posts/1';
let u_latitude = document.querySelector('#latitude');
let u_longitude = document.querySelector('#longitude');
let u_photo = document.querySelector('#canvas');
let u_sector = document.querySelector('#sector');
let u_square = document.querySelector('#square');
let u_row = document.querySelector('#row');
let u_number = document.querySelector('#number');
let u_numberOfPlace = document.querySelector('#numberOfPlace');
let u_surname = document.querySelector('#surname');
let u_names = document.querySelector('#name');
let u_patronimyc = document.querySelector('#patronimyc');
let u_birth = document.querySelector('#birth');
let u_die = document.querySelector('#die');
let u_info = document.querySelector('#info');
let u_numberReg = document.querySelector('#number-reg');
let u_numberBook = document.querySelector('#number-book');
let u_other = document.querySelector('#other');

//Валидация иннпутов
const validateInput = (val) => {
    if (val === '' || val === null || val === undefined) {
        alertMessage(`Заполните поле ${val}`);
        return false;
    } return true;
};
const validateData = () => {
    if (validateInput(u_latitude.value) && validateInput(u_longitude.value) && validateInput(u_sector.value) && validateInput(u_square.value) && validateInput(u_row.value) && validateInput(u_number.value) && validateInput(u_numberOfPlace.value) && validateInput(u_surname.value) && validateInput(u_names.value) && validateInput(u_patronimyc.value) && validateInput(u_birth.value) && validateInput(u_die.value) && validateInput(u_info.value)) {
        return true;
    }
}


//Отправка данных
const sendData = async (e) => {
    e.preventDefault();
    let data = {
        photo: u_photo.getAttribute('data'),
        longitude: u_longitude.value,
        latitude: u_latitude.value,
        sector: u_sector.value,
        square: u_square.value,
        row: u_row.value,
        number: u_number.value,
        numberOfPlace: u_numberOfPlace.value,
        surname: u_surname.value,
        name: u_names.value,
        patronimyc: u_patronimyc.value,
        birth: u_birth.value.split("-").reverse().join("-"),
        die: u_die.value.split("-").reverse().join("-"),
        numberBook: u_numberBook.value,
        numberReg: u_numberReg.value,
        other: u_other.value,
    };


    if (validateData()) {
        const response = await fetch(url, {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            alertMessage('Данные отправленны');
            return await response.text()
                .then((data) => alertMessage(data))
                .then(setTimeout(() => {
                    window.location.reload();
                }, 1600));
        } else {
            alertMessage(`Ошибка подключения,статус ${response.status}`);
            throw new Error(`Ошибка подключения,статус ${response.status}`);
        };

    } else {
        alertMessage('Заполните все необходимые поля');
    }

}

btnSend.addEventListener('click', sendData);
