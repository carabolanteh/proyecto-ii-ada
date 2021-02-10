// HEADER ICONOS 

// innerHTML // DOM

const img = document.getElementById('img');
const imgContainer = document.getElementById('img-container');

const txt = document.getElementById('txt');
const txtContainer = document.getElementById('txt-container');

const btnOption = document.getElementById('btnOption');
const btnLight = document.getElementById('btnLight');
const btnDark = document.getElementById('btnDark');

const header = document.getElementById('header');

// eventos

txt.addEventListener('click', (e) =>{
    e.preventDefault();
    imgContainer.style.visibility = 'hidden';
    txtContainer.style.visibility = 'visible';
})
img.addEventListener('click', (e) =>{
    e.preventDefault();
    txtContainer.style.visibility = 'hidden';
    imgContainer.style.visibility = 'visible';
})
btnOption.addEventListener('click', () =>{
    if(btnOption.checked){
        document.body.classList.add('light');
        imgContainer.classList.add('light-aside');
        txtContainer.classList.add('light-aside');
        header.classList.add('light-header');
        img.classList.add('button-light');
        txt.classList.add('button-light');
        btnLight.classList.add('button-light');
        btnDark.classList.add('button-light');

        btnLight.style.visibility = 'hidden';
        btnDark.style.visibility = 'visible';
    }else{
        document.body.classList.remove('light');
        imgContainer.classList.remove('light-aside');
        txtContainer.classList.remove('light-aside');
        header.classList.remove('light-header');
        img.classList.remove('button-light');
        txt.classList.remove('button-light');
        btnLight.classList.remove('button-light');
        btnDark.classList.remove('button-light');

        btnDark.style.visibility = 'hidden';
        btnLight.style.visibility = 'visible';
    }
})

// FUNCIONALIDAD EDICIÓN DE TEXTO

// innerHTML // DOM

const topText = document.getElementById('top-text');
const botText = document.getElementById('bot-text');



const firstText = document.getElementById('first-text');
const topCheck = document.getElementById('top-check');

const secondText = document.getElementById('second-text');
const botCheck = document.getElementById('bot-check');

const option = document.getElementById('option');

const inputSize = document.getElementById('input-size');

const left = document.getElementById('left');
const center = document.getElementById('center');
const right = document.getElementById('right');

const color = document.getElementById('color');
const background = document.getElementById('background');
const transparent = document.getElementById('transparent');

const borderDark = document.getElementById('border-dark');
const borderLight = document.getElementById('border-light');
const borderVoid = document.getElementById('border-void');



// eventos

topText.addEventListener('keyup', ()=>{
    firstText.innerHTML = topText.value;
})
botText.addEventListener('keyup', ()=>{
    secondText.innerHTML = botText.value;
})

topCheck.addEventListener('click', () =>{
    if(topCheck.checked){
        firstText.style.display = 'none';
    }else{
        firstText.style.display = 'block';
    }
})
botCheck.addEventListener('click', () =>{
    if(botCheck.checked){
        secondText.style.display = 'none';
    }else{
        secondText.style.display = 'block';
    }
})


option.addEventListener('change', () =>{
    firstText.style.fontFamily = `${option.value}`;
    secondText.style.fontFamily = `${option.value}`;
})


inputSize.addEventListener('change', () =>{
    firstText.style.fontSize = `${inputSize.value}px`;
    secondText.style.fontSize = `${inputSize.value}px`;
})


left.addEventListener('click', (e) =>{
    e.preventDefault();
    firstText.style.textAlign = 'left';
    secondText.style.textAlign = 'left';
})
center.addEventListener('click', (e) =>{
    e.preventDefault();
    firstText.style.textAlign = 'center';
    secondText.style.textAlign = 'center';
})
right.addEventListener('click', (e) =>{
    e.preventDefault();
    firstText.style.textAlign = 'right';
    secondText.style.textAlign = 'right';
})


color.addEventListener('change', (e) =>{
    e.preventDefault();
    firstText.style.color = `${color.value}`;
    secondText.style.color = `${color.value}`;
})
background.addEventListener('change', (e) =>{
    e.preventDefault();
    firstText.style.backgroundColor = `${background.value}`;
    secondText.style.backgroundColor = `${background.value}`;
})
transparent.addEventListener('click', (e) =>{
    if(transparent.checked){
        firstText.style.backgroundColor = 'transparent';
        secondText.style.backgroundColor = 'transparent';
    }else{
        firstText.style.backgroundColor = `${background.value}`;
        secondText.style.backgroundColor = `${background.value}`;
    }
})


borderDark.addEventListener('click', (e)=>{
    e.preventDefault();
    firstText.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';
    secondText.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';
})
borderLight.addEventListener('click', (e)=>{
    e.preventDefault();
    firstText.style.textShadow = '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white';
    secondText.style.textShadow = '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white';
})
borderVoid.addEventListener('click', (e)=>{
    e.preventDefault();
    firstText.style.textShadow = 'none';
    secondText.style.textShadow = 'none';
})





// funciones
