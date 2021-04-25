
const btnSend = document.querySelector('#sendForm');
const url = 'sendRequest.php';
// const url = 'https://jsonplaceholder.typicode.com/posts/1';
let message = document.querySelector('.message__text');
let popup = document.querySelector('.message');
let form = document.querySelector('#form');
let body = document.querySelector('body');

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











let alertMessage = (text) => {
    message.innerHTML = text;
    popup.classList.add('active');
    body.style.overflow = 'hidden';
    setTimeout(() => {
        popup.classList.remove('active');
        body.style.overflow = 'auto';
    }, 1600);
}

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
        alertMessage('Заполнены необходимые поля');
    }

}

btnSend.addEventListener('click', sendData);
