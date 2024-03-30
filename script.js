const butt = document.querySelector('#click');


function move(event){
    console.log('moused');
    const h =Math.floor(Math.random() * window.innerHeight);
    const w =Math.floor(Math.random() * window.innerWidth);
    butt.style.top = `${w}px`;
    butt.style.left = `${h}px`;
        console.log(butt);
}

butt.addEventListener('mouseover',move);
