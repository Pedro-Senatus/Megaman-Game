const megaman = document.querySelector('.megaman');

const jump = () => {
    megaman.classList.add('jump');

    setTimeout(()=>{

        megaman.classList.remove('jump');
        
    }, 500);

}

document.addEventListener('keydown', jump);

