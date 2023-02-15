Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}

const fps = 60;
const monnere = ['og', 'hvid', 'mango', 'fiestaMango', 'rehabPeach'];

let monner = document.getElementById('monner');
SetMonner(monnere.sample())

monner.style.left = Math.floor(Math.random() * window.innerWidth - monner.offsetWidth) + monner.offsetWidth;
monner.style.top = Math.floor(Math.random() * window.innerHeight - monner.offsetHeight) + monner.offsetHeight;
let xSpeed = 3;
let ySpeed = 3;

monner.onclick = function(){
    window.open('https://www.twitch.tv/naaaske', '_blank');
}

function SetMonner(newMonner) {
    if(!monnere.includes(newMonner)){
        console.log('I dont have a monner called "' + newMonner + '" :(');
        return;
    }
    monner.src = 'monnere/' + newMonner + '.webp';
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

setInterval(() => {
    if(monner.offsetLeft <= 0){
        ChangeToRandomMonner()
        monner.style.left = 0;
        xSpeed = -xSpeed;
    }

    else if(monner.offsetLeft + monner.offsetWidth >= window.innerWidth){
        ChangeToRandomMonner()
        monner.style.left = window.innerWidth - monner.offsetWidth;
        xSpeed = -xSpeed;
    }

    if(monner.offsetTop <= 0){
        ChangeToRandomMonner()
        monner.style.top = 0;
        ySpeed = -ySpeed;
    }
    else if (monner.offsetTop + monner.offsetHeight >= window.innerHeight){
        ChangeToRandomMonner()
        monner.style.top = window.innerHeight - monner.offsetHeight;
        ySpeed = -ySpeed;
    }

    monner.style.left = monner.offsetLeft +  xSpeed + 'px';
    monner.style.top = monner.offsetTop + ySpeed + 'px';
}, 1000/fps)