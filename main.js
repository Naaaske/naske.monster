const fps = 60;
const monnere = ['og', 'hvid', 'mango', 'fiestaMango', 'rehabPeach'];
const speed = 50 / fps;

let monner = document.getElementById('monner');
let cheating = document.getElementById('cheating');
let xCol = 0;
let yCol = 0;
let xSpeed, ySpeed = 0;

var paused = false;

function Init(){
    SetMonner(monnere.sample())

    Respawn();

    EnsureSize();

    //Start frame function
    setInterval(() => Update(), 1000/fps)
}

lowestT = 500;

function Update(){

    //Process collision
    didCollide = false;

    if(monner.offsetLeft <= 0){
        didCollide = true;
        monner.style.left = 0;
        xSpeed = -xSpeed

        xCol = Date.now();
    }
    else if(monner.offsetLeft + monner.offsetWidth >= window.innerWidth){
        didCollide = true;
        monner.style.left = window.innerWidth - monner.offsetWidth;
        xSpeed = -xSpeed
        
        xCol = Date.now();
    }

    if(monner.offsetTop <= 0){
        didCollide = true;
        monner.style.top = 0;
        ySpeed = -ySpeed

        yCol = Date.now();
    }
    else if (monner.offsetTop + monner.offsetHeight >= window.innerHeight){
        didCollide = true;
        monner.style.top = window.innerHeight - monner.offsetHeight;
        ySpeed = -ySpeed

        yCol = Date.now();
    }

    if(paused){
        return;
    }

    if(didCollide){
        ChangeToRandomMonner()
        didCollide = false;
    }

    if (xCol !== 0 || yCol !== 0){
        timeDifference = Math.abs(xCol - yCol);
        if (timeDifference <= 10) {
            window.location.href = atob('aHR0cHM6Ly9kaXNjb3JkLmdnL05mR0hwYXY4emU=');
            xCol = 0;
            yCol = 0;
        }
    }

    monner.style.left = monner.offsetLeft +  xSpeed + 'px';
    monner.style.top = monner.offsetTop + ySpeed + 'px';
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

Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}

function RandomRange(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RandomFloatRange(min, max){
    return Math.random() * (max - min + 1) + min;
}

function Respawn(){
    initXpos = RandomRange(100, window.innerWidth - monner.offsetWidth - 100)
    initYpos = RandomRange(100, window.innerHeight - monner.offsetHeight - 100)

    monner.style.left = initXpos;
    monner.style.top = initYpos;
    
    MoveTowardsCenter();
}

function MoveTowardsCenter(){
    if(monner.offsetLeft + monner.offsetWidth / 2 > window.innerWidth/2){
        xSpeed = -speed;
    }
    else{
        xSpeed = speed;
    }

    if(monner.offsetTop + monner.offsetHeight / 2 > window.innerHeight/2){
        ySpeed = -speed;
    }
    else{
        ySpeed = speed;
    }
}

function EnsureSize(){
    if (window.innerWidth < 940 || window.innerHeight < 600 || window.innerWidth * window.innerHeight < 940 * 600){
        paused = true;
        cheating.style.opacity = 1;
    }
    else{
        if (paused == true){
            MoveTowardsCenter();   
        }
        paused = false;
        cheating.style.opacity = 0;
    }
}

monner.onclick = function(){
    window.open('https://www.twitch.tv/naaaske', '_blank');
}

window.onresize = EnsureSize

window.onload = function WindowLoad(event) {
    PreLoadMonnere();
    Init();
    //Start frame function
    setInterval(() => Update(), 1000/fps)
}
