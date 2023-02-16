Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}

function randomRange(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const fps = 60;
const monnere = ['og', 'hvid', 'mango', 'fiestaMango', 'rehabPeach'];
const speed = 3;

let monner = document.getElementById('monner');
SetMonner(monnere.sample())

initXpos = randomRange(100, window.innerWidth - monner.offsetWidth - 100)
initYpos = randomRange(100, window.innerHeight - monner.offsetHeight - 100)

let xSpeed = speed;
if(initXpos > window.innerWidth/2){
    xSpeed = -xSpeed;
}

let ySpeed = speed;
if(initYpos > window.innerHeight/2){
    ySpeed = -ySpeed;
}

monner.style.left = initXpos;
monner.style.top = initYpos;


monner.onclick = function(){
    window.open('https://www.twitch.tv/naaaske', '_blank');
}

function MonnerToUrl(monner){
    return 'monnere/' + monner + '.webp';
}

function PreLoadMonnere(){
    monnere.forEach(element => {
        new Image().src = MonnerToUrl(element);
    });
}

function SetMonner(newMonner) {
    if(!monnere.includes(newMonner)){
        console.log('I dont have a monner called "' + newMonner + '" :(');
        return;
    }
    monner.src = MonnerToUrl(newMonner);
}

function GetRandomMonner() {
    currentMonner = monner.src.substring(monner.src.lastIndexOf('/')+1, monner.src.lastIndexOf('.'));
    do{
        newMonner = monnere.sample()
    }
    while (newMonner == currentMonner)
    return newMonner;
}

function ChangeToRandomMonner(){
    SetMonner(GetRandomMonner());
}

let xCol = 0;
let yCol = 0;

setInterval(() => {

    if(monner.offsetLeft <= 0){
        ChangeToRandomMonner()
        monner.style.left = 0;
        xSpeed = -xSpeed;
        xCol = Date.now();
    }

    else if(monner.offsetLeft + monner.offsetWidth >= window.innerWidth){
        ChangeToRandomMonner()
        monner.style.left = window.innerWidth - monner.offsetWidth;
        xSpeed = -xSpeed;
        
        xCol = Date.now();
    }

    if(monner.offsetTop <= 0){
        ChangeToRandomMonner()
        monner.style.top = 0;
        ySpeed = -ySpeed;

        yCol = Date.now();
    }
    else if (monner.offsetTop + monner.offsetHeight >= window.innerHeight){
        ChangeToRandomMonner()
        monner.style.top = window.innerHeight - monner.offsetHeight;
        ySpeed = -ySpeed;

        yCol = Date.now();
    }

    if (xCol !== 0 || yCol !== 0){
        timeDifference = Math.abs(xCol - yCol);
        if (timeDifference <= 15) {
            window.location.href = atob('aHR0cHM6Ly9kaXNjb3JkLmdnL05mR0hwYXY4emU=');
            xCol = 0;
            yCol = 0;
        }
    }

    monner.style.left = monner.offsetLeft +  xSpeed + 'px';
    monner.style.top = monner.offsetTop + ySpeed + 'px';
}, 1000/fps)

window.onload = function WindowLoad(event) {
    PreLoadMonnere();
}
