const fps = 60;

let monner = document.querySelector('.monner');

monner.style.left = Math.floor(Math.random() * window.innerWidth - monner.offsetWidth) + monner.offsetWidth;
monner.style.top = Math.floor(Math.random() * window.innerHeight - monner.offsetHeight) + monner.offsetHeight;
let xSpeed = 4;
let ySpeed = 4;

console.log(monner.offsetHeight)

setInterval(() => {
    if(monner.offsetLeft <= 0){
        monner.style.left = 0;
        xSpeed = -xSpeed;
    }
    else if(monner.offsetLeft + monner.offsetWidth >= window.innerWidth){
        monner.style.left = window.innerWidth - monner.offsetWidth;
        xSpeed = -xSpeed;
    }

    if(monner.offsetTop <= 0){
        monner.style.top = 0;
        ySpeed = -ySpeed;
    }
    else if (monner.offsetTop + monner.offsetHeight >= window.innerHeight){
        monner.style.top = window.innerHeight - monner.offsetHeight;
        ySpeed = -ySpeed;
    }

    monner.style.left = monner.offsetLeft +  xSpeed + 'px';
    monner.style.top = monner.offsetTop + ySpeed + 'px';
}, 1000/60)
