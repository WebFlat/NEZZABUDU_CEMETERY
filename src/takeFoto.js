
(function () {
    let message = document.querySelector('.message__text');
    let popup = document.querySelector('.message');
    let body = document.querySelector('body');

    let alertMessage = (text) => {
        message.innerHTML = text;
        popup.classList.add('active');
        body.style.overflow = 'hidden';
        setTimeout(() => {
            popup.classList.remove('active');
            body.style.overflow = 'auto';
        }, 1700);
    }
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


    function startup(e) {
        e.preventDefault();
        video = document.getElementById('video');
        canvas = document.getElementById('canvas');
        photo = document.getElementById('photo');
        navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: "environment"
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

        clearphoto();


    }

    let startbutton = document.getElementById('startbutton');

    startbutton.addEventListener('click', function (ev) {
        ev.preventDefault();
        if (video) {
            takepicture();
        } else {

            alertMessage('Включите камеру')
        };
    });

    // Fill the photo with an indication that none has been
    // captured.

    function clearphoto() {
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

    let clrBtn = document.querySelector('#clearbutton');
    clrBtn.addEventListener('click', clearphoto);

    // Capture a photo by fetching the current contents of the video
    // and drawing it into a canvas, then converting that to a PNG
    // format data URL. By drawing it on an offscreen canvas and then
    // drawing that to the screen, we can change its size and/or apply
    // other changes before drawing it.

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
            clearphoto();
        };
    };



    // Set up our event listener to run the startup process
    // once loading is complete.
    // window.addEventListener('load', startup, false);
})();
