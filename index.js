let dinoWidth = 50;
let cactusHeight = 40;
let dino = document.getElementById('dino');
let cactus =  document.getElementsByClassName('cactus');
let gameOver = document.getElementById('game-over-div');


console.log(cactus);
function jump(e){

    if(e.code == 'Space' && gameOver.style.display == 'none'){

    dino.classList.add('jump-up');

    setTimeout(()=>{
  
    dino.classList.add('jump-down');
    },500)

    setTimeout(()=>{
    dino.classList.remove('jump-up');
    dino.classList.remove('jump-down');

    },1000)
    
    }
}

document.addEventListener('keydown',(event)=>{
    jump(event);
});

setInterval(()=>{

    let dinoGap = 350 - parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactus0 = parseInt(window.getComputedStyle(cactus[0]).getPropertyValue('left')); 
    let cactus1 = parseInt(window.getComputedStyle(cactus[1]).getPropertyValue('left')); 
    let cactus2 = parseInt(window.getComputedStyle(cactus[2]).getPropertyValue('left')); 
    let cactus3 = parseInt(window.getComputedStyle(cactus[3]).getPropertyValue('left')); 


    if(dinoGap<=30 && ((cactus0<=140 && cactus0>80) || 
                       (cactus1<=140 && cactus1>80) ||
                       (cactus2<=140 && cactus2>80) || 
                       (cactus3<=140 && cactus3>80) )){

        dino.style.backgroundImage = 'url(./images/dino-killed.jpg)';  
        dino.style.top = window.getComputedStyle(dino).getPropertyValue('top') ;
        cactus[0].style.left = window.getComputedStyle(cactus[0]).getPropertyValue('left');
        cactus[1].style.left = window.getComputedStyle(cactus[1]).getPropertyValue('left');
        cactus[2].style.left = window.getComputedStyle(cactus[2]).getPropertyValue('left');
        cactus[3].style.left = window.getComputedStyle(cactus[3]).getPropertyValue('left');

        gameOver.style.display = 'flex'; 
    }
},10)

function refresh(){
    console.log(window.location);
    console.log("refresh")
    window.location.reload();
}

let randomTO;
let interval = 1000;
let i = 0;

setInterval(() => {
    console.log(interval);


    cactus[i].classList.add('cactus-animation');
    setTimeout(()=>{
     cactus[i].classList.remove('cactus-animation'); 
    },4000)

    interval = 3000 * Math.random();
    if(i==3){
        i=0;
    }
    else{
    i++; 
    }
}, interval);
    
   
