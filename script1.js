const mainDiv = document.querySelector('#mainDiv');
const form = document.querySelector('#form');
const btnStart = document.querySelector('.btnStart');
const btnStop = document.querySelector('.btnStop');
const btnReset = document.querySelector('.btnReset');
let showTime = document.querySelector('.showTime')

let mlSecond = 0;
let second = 0;
let minute = 0 ;
let hour = 0;
let timer;

btnStart.addEventListener('click', function(){
    clearInterval(timer)
    showTime.classList.remove();
    timer = setInterval(() => {
        mlSecond ++;
        if (mlSecond === 1000) {
            mlSecond = 0;
            second++;
        }
        if (second === 60) {
            second = 0;
            minute++;
        }
        if (minute === 60) {
            minute = 0;
            hour++;
        }
        
        showTime.innerHTML = `0${hour} : 0${minute} : 0${second} : 0${mlSecond} `   
    }, 10);

});

btnStop.addEventListener('click', function(){
    clearInterval(timer);
    document.querySelector('.time').innerHTML += `0${hour} : 0${minute} : 0${second} : 0${mlSecond} <br>`
});

btnReset.addEventListener('click', function(){
    showTime.classList.remove()
    clearInterval(timer);
    showTime.innerHTML = ` 00 : 00 : 00 : 000`
    document.querySelector('.time').innerHTML = ''


})




