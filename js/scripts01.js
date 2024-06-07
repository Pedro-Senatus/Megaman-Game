const megaman = document.querySelector('.megaman');
const tank = document.querySelector('.tank');
const score = document.querySelector('.score');

let score_count = 0;

function jump(){
    megaman.classList.add('jump');

    setTimeout(function(){megaman.classList.remove('jump');}, 500);
}

document.addEventListener('keydown', jump);

const loop = setInterval(function(){
    
    const tankPosition = tank.offsetLeft;
    const megamanPosition = +window.getComputedStyle(megaman).bottom.replace('px', '');
    if (tankPosition <= 58 && tankPosition > -40 && megamanPosition < 80){

        tank.style.animation = 'none';
        tank.style.left = `${tankPosition}px`
        megaman.style.animation = 'none'
        megaman.style.bottom = `${megamanPosition}px`

        megaman.src = "./img/megaman_gameover.png"
        megaman.style.width = "85px"
    
        clearInterval(loop);
    }

},5);

const scoreContador = setInterval(function(){
    const tankPosition = tank.offsetLeft;
    const megamanPosition = +window.getComputedStyle(megaman).bottom.replace('px', '');
    if(tankPosition <= 58 && tankPosition > -40 && megamanPosition > 80){
        score_count += 1;
        score.innerHTML = `SCORE:${score_count}`;
}},75)




