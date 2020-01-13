var $text = document.getElementById('text'),
    $textarea = document.getElementById('textarea'),
    $textLength = $textarea.getAttribute('maxlength');

$textarea.oninput = function () {
    $text.innerHTML = $textLength - this.value.length;

    if ($text.innerHTML == 0) {
        $text.classList.add('custom')
    }
    else {$text.classList.remove('custom')}
}

// Staret Show/Hide Placeholder

var $input = document.getElementById('show-hide'),
    $placholder = $input.getAttribute('placeholder');

$input.onfocus = function () {
    this.setAttribute('placeholder', '')
}

$input.onblur = function () {
    this.setAttribute('placeholder', $placholder)
}

// Start Typer Writer

var $btnTyper = document.getElementById('typer-btn'),
    $textTyper = document.getElementById('typer'),
    i = 0,
    $stringTyper = 'Hello from Amir Diafi This is Type Writer Effect on Text';

$btnTyper.onclick = function () {
    'use strict';
    var typeWriter = setInterval(function () {
        $textTyper.textContent += $stringTyper[i];
        i++;
        if (i > $stringTyper.length -1) {
            clearInterval(typeWriter)
        }

    }, 100);

}

var passBtn = document.getElementById('pass-btn'),
    targetInput = document.getElementById('show-hide-pw');

passBtn.onclick = function () {
    if (this.textContent == 'Show Password') {
        targetInput.setAttribute('type', 'text');
        this.textContent = 'Hide Password'
    } else {
        targetInput.setAttribute('type', 'password');
        this.textContent = 'Show Password'
    }
}

// Start Random Color

var randomClasses = ['rand-one', 'rand-tow', 'rand-three', 'rand-four'],
    randomKey = Math.floor(Math.random() * randomClasses.length);

document.getElementById('random').setAttribute('class', [randomClasses[randomKey]])

// Start Disable Right Click Textmenu

document.getElementById('random').addEventListener('contextmenu', function (e) {
    e.preventDefault();
    document.getElementById('right-list').classList.add('right-list-toggle')
})

document.getElementById('random').onclick = function (e) {
    document.getElementById('right-list').classList.remove('right-list-toggle')
}

// Sart Simple Clock

function simpleClock() {
    'use strict';

    var now = new Date(),
    hours = now.getHours(),
    minutes = now.getMinutes(),
    seconds = now.getSeconds();

if (hours < 10) {
    hours = '0' + hours
}
if (minutes < 10) {
    minutes = '0' + minutes
}
if (seconds < 10) {
    seconds = '0' + seconds
}

if (hours > 12) {
    seconds = seconds + ' BM'
} else {
    seconds = seconds + ' AM'
}

document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;

}

window.onload = function () {
    'use strict';

    setInterval(simpleClock, 500)
}

// Start Twitter Calc

var myTextArea = document.getElementById('twitter-area'),
    myCount = document.getElementById('twitter-count');

myTextArea.oninput = function () {
    myCount.textContent = 50 - myTextArea.value.length;
    myCount.textContent < 0 ? myCount.style.color = '#F00' : myCount.style.color = '#000';
}

// Random Images Every X Seconds

var myElement = document.getElementById('random-element'),
    myImages = [
        'media/1.jpg',
        'media/2.jpg',
        'media/3.jpg',
        'media/4.jpg'
    ];

function myRandomImg(myElement, myImages) {
    'use strict';

    setInterval(function () {
        var randomImgs = Math.floor(Math.random() * myImages.length);
        myElement.src = myImages[randomImgs]
    }, 1000)
}

myRandomImg(myElement, myImages);

// Start Check if Has Hash

var myHash = window.location.hash.substring(1);
console.log(myHash)

if (myHash === 'amir') {
    console.log('Good!, The Hash Is Found')
} else {
    console.log('Bad!')
}

// Redirect Url

function redirectMe(Url) {
    'use strict';
    if (Url !== '') {
        window.location = Url;
    }
}

document.getElementById('redirect-btn').onclick = function () {
    redirectMe('file:///C:/Users/Amir%20Diafi/Desktop/Web%20Development/10.%20JavaScript/jQuery%20Projects/Practice%20Time%20jQuery%2001/index.html')
}

// Search In Ul List

$(document).ready(function () {
    'use strict';
    $("input[type='search']").on('keyup', function () {
        var value = $(this).val().toLowerCase();
        console.log(value);
        $('.search-val li').filter(function () {
            $(this).toggle($(this).text().toLowerCase().search(value) != -1);
        });
    });
});

// Start Serial Number

var generate = document.getElementById('generete');

function generateSerial() {
    'use strict';
    var chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwyz',
        serialLength = 20,
        randomSerial = '',
        randomNumber,
        i,
        serialResult = document.getElementById('serial-number');

        for (i = 0; i < serialLength; i++) {
            randomNumber = Math.floor(Math.random() * chars.length);
            randomSerial += chars.slice(randomNumber, randomNumber + 1);
        };

        serialResult.textContent = randomSerial;
        console.log(randomNumber);
}

generate.onclick = function () {
    generateSerial();
}

// Start Timer

var myTimer = document.getElementById('timer'),
countdownSeconds = 119,
    countdown = setInterval(function () {
        'use strict';
        countPass()
    }, 1000);

function countPass() {
    mints = Math.floor(countdownSeconds / 60),
    secnds = countdownSeconds % 60;
    myTimer.textContent = mints + ":" + secnds;
    if (countdownSeconds > 0) {
        countdownSeconds = countdownSeconds - 1
    } else {
        clearInterval(countdown);
        myTimer.textContent = "Down!..";
    }
}








