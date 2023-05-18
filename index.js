let dinoWidth = 50;
let cactusHeight = 40;

function jump(e){

    if(e.code == 'Space'){

    document.getElementById('dino').classList.add('jump-up');

    setTimeout(()=>{
  
    document.getElementById('dino').classList.add('jump-down');
    },500)

    setTimeout(()=>{
    document.getElementById('dino').classList.remove('jump-up');
    document.getElementById('dino').classList.remove('jump-down');

    },1000)
    
    }
}

document.addEventListener('keydown',(event)=>{
    jump(event);
});

let dino =  document.getElementById('dino');
let cactus =  document.getElementById('cactus');

console.log("dino1>>" + dino);
console.log("dino2>>" + document.getElementById('dino'));


// let dinoGap = 350 - window.getComputedStyle(dino).getPropertyValue(top);
    console.log("gcs>>" + window.getComputedStyle(document.getElementById('dino')));
setInterval(()=>{
    
},10)