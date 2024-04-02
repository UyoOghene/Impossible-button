const butt = document.querySelector('#click');
const cont = document.querySelector('.container');
const text = document.querySelector('#text');
const topic = document.querySelector('#topic');


function move(event){
    console.log('moused');
    const h =Math.floor(Math.random() * window.innerHeight);
    const w =Math.floor(Math.random() * window.innerWidth);
    butt.style.top = `${w}px`;
    butt.style.left = `${h}px`;
    console.log(butt);
}

butt.addEventListener('mouseover',move);
butt.addEventListener('click',ifClicked);


function ifClicked(){
    cont.style.backgroundColor = 'green';
    text.innerHTML = 'You won';
    topic.innerHTML = '';
}