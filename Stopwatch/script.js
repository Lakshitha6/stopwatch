let time = document.querySelector(".time") ;
let timer = null ;
let startTime = 0 ;
let elapsedTime = 0 ;
let began = false ;

let button1 = document.getElementById("btn-1");
let button2 = document.getElementById("btn-2");
let button3 = document.getElementById("btn3");

function start() {
    
    if (!began) {
        startTime = Date.now() - elapsedTime ;
        timer = setInterval(update, 10) ;
        began = true ;
    }
}

function stop() {
    if (began) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime ;
        began = false ;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0 ;
    elapsedTime = 0 ;
    began = false ;
    time.textContent = "00:00:00:00" ;
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime-startTime ;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2,"0") ;
    minutes = String(minutes).padStart(2,"0") ;
    seconds = String(seconds).padStart(2,"0") ;
    milliseconds = String(milliseconds).padStart(2,"0") ;

    time.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}