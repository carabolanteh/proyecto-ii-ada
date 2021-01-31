// HEADER ICONOS 

// innerHTML // DOM

const img = document.getElementById('img');
const imgContainer = document.getElementById('img-container');
const txt = document.getElementById('txt');
const txtContainer = document.getElementById('txt-container');
const btnLight = document.getElementById('btn-light');
const btnDark = document.getElementById('btn-dark');

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
btnLight.addEventListener('click', (e) =>{
    e.preventDefault();
    btnLight.style.visibility = 'hidden';
    btnDark.style.visibility = 'visible';
})
btnDark.addEventListener('click', (e) =>{
    e.preventDefault();
    btnDark.style.visibility = 'hidden';
    btnLight.style.visibility = 'visible';
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
    firstText.classList.add('contorno-oscuro');
    secondText.classList.add('contorno-oscuro');
    // alert("le diste click a dark");
    console.log(borderDark.target)
})
borderLight.addEventListener('click', (e)=>{
    e.preventDefault();
    firstText.classList.add('contorno-claro');
    secondText.classList.add('contorno-claro');
    // alert("le diste click a light");
    // console.log(borderLight.)

});
borderVoid.addEventListener('click', (e)=>{
    e.preventDefault();
    // firstText.classList.remove('dark');
    // secondText.classList.remove('dark');
    // firstText.classList.remove('light');
    // secondText.classList.remove('light');
    alert("le diste click a void");
});
// funciones
