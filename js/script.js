const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papanSkor = document.querySelector('.papan-skor');

let tanahSebelumnya;
let selesai;



function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];
    if (tRandom == tanahSebelumnya) {
        randomTanah(tanah);
    }
    tanahSebelumnya = tRandom;
    return tRandom;
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


function munculkanTikus() {
    const tRandom = randomTanah(tanah);
    const wRandom = randomWaktu(300, 1000);
    tRandom.classList.add('muncul');

    setTimeout(() => {
        tRandom.classList.remove('muncul');
        if (!selesai) {
            munculkanTikus();
        } 
    }, wRandom);
}


function start() {
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;
    munculkanTikus();
    var fiveMinutes = 15 * 1,
    display = document.querySelector('#time');
startTimer(fiveMinutes, display);
    setTimeout(() => {
        selesai = true;
    }, 10000);
}


function pukul() {
    skor++;
    this.parentNode.classList.remove('muncul');
    // this.style.transition = "TOP 0.1s";
    papanSkor.textContent = skor;
}

tikus.forEach(t => {
    t.addEventListener('click', pukul);
});


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    let stopper = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            // timer = duration;
            clearTimeout(stopper);
            alert("Times up!");
        }
        
    }, 1000);
    
}



// window.onload = function () {
//     var fiveMinutes = 60 * 5,
//         display = document.querySelector('#time');
//     startTimer(fiveMinutes, display);
// };