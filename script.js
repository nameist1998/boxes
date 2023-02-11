let isBlur = false;
document.getElementById('box-1').onclick = function(){
    isBlur = !isBlur;
    if(isBlur){
        document.getElementById('box-1').classList.add('blur');
    }else{
        document.getElementById('box-1').classList.remove('blur');
    }
}

document.getElementById('box-2').onclick = function(){
    let rnd = Math.floor(Math.random(1)*9)+1;
    document.getElementById('box-2').firstElementChild.innerHTML = rnd;
}

let isOver = false;
document.getElementById('box-3').onmouseover = function(){
    isOver = true;
    renderThirdBox();
}
document.getElementById('box-3').onmouseout = function(){
    isOver = false;
    renderThirdBox();
}
function renderThirdBox(){
    if(isOver){
        document.getElementById('box-3').style.backgroundColor = 'cadetblue';
    }else{
        document.getElementById('box-3').style.backgroundColor = 'blue';
    }
}

document.getElementById('box-4').onclick = function(){
    document.getElementById('box-4').classList.add('displayNone');
    setTimeout(() => {
        document.getElementById('box-4').classList.remove('displayNone');
    }, 1000)
}

let isCurve = false;
document.getElementById('box-5').onclick = function(){
    let boxes = document.querySelectorAll('.box');
    isCurve = !isCurve;
    if(isCurve){
        for(let box of boxes){
            box.style.borderRadius = '50%';
        }
    }else{
        for(let box of boxes){
            box.style.borderRadius = '0';
        }
    }
}

document.getElementById('box-6').onsubmit = function(event){
    event.preventDefault();
    let number = event.target.boxNumber.value;
    if(number < 100){
        document.getElementById('box-6').firstElementChild.innerHTML = number;
    }
}

document.getElementById('box-7').ondblclick = function(){
    let boxes = document.querySelectorAll('.box');
    document.getElementById('containerOfBoxes').classList.remove('containerOfBoxes');
    document.getElementById('containerOfBoxes').classList.add('containerOfBoxesIfBigger');
    for(let box of boxes){
        box.classList.add('biggerBox');
    }
    setTimeout(() => {
        for(let box of boxes){
            box.classList.remove('biggerBox');
            document.getElementById('containerOfBoxes').classList.remove('containerOfBoxesIfBigger');
            document.getElementById('containerOfBoxes').classList.add('containerOfBoxes');
        }
    }, 2000);
}

document.onmousemove = function(event){
    let x = event.clientX;
    let y = event.clientY;
    let position = 'X: ' + x + ' Y: ' + y;
    document.getElementById('box-8').style.fontSize = '30px';
    document.getElementById('box-8').firstElementChild.innerHTML = position;
}

document.getElementById('box-9').onclick = function(){
    let randomNumbers = [];
    for(let i = 0; i < 9; i++){
        randomNumbers.push(Math.floor(Math.random(1)*99)+1);
    }
    console.log(randomNumbers)
    let boxes = document.querySelectorAll('.box');
    let i = 0;
    for(let box of boxes){
        box.firstElementChild.innerHTML = randomNumbers[i];
        i = i+1;
    }
}