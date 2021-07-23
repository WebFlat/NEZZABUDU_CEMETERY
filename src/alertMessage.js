let message = document.querySelector('.message__text');
let popup = document.querySelector('.message');
let body = document.querySelector('body');
//выводим сервисные сообщения
let alertMessage = (text) => {
    message.innerHTML = text;
    popup.classList.add('active');
    body.style.overflow = 'hidden';
    setTimeout(() => {
        popup.classList.remove('active');
        body.style.overflow = 'auto';
    }, 1600);
};


export default alertMessage;
