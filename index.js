let dinoWidth = 50;
let cactusHeight = 40;
let dino = document.getElementById('dino');
let cactus =  document.getElementById('cactus');
let gameOver = document.getElementById('game-over-div');

function jump(e){

    if(e.code == 'Space'){

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
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left')); 

    if(dinoGap<=30 && (cactusLeft<=140 && cactusLeft>80)){

        dino.style.backgroundImage = 'url(./images/dino-killed.jpg)';  
        dino.style.top = window.getComputedStyle(dino).getPropertyValue('top') ;
        cactus.style.left = window.getComputedStyle(cactus).getPropertyValue('left');

        gameOver.style.display = 'flex'; 
    }
},10)

function refresh(){
    console.log(window.location);
    console.log("refresh")
    window.location.reload();
}