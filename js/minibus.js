'use strict';

const minibusChooseBtn = document.querySelector('.minibusChoose');
const minibus479Btn = document.querySelector('.minibus479');

minibusChooseBtn.onclick = () =>{
    //SHOW MINIBUS BTNS AND HIDE OTHER
    minibus479Btn. style = 'display: flex';
    bus1Btn.style = 'display: none';
    bus1aBtn.style = 'display: none';

    minibusChooseBtn.style = `background-color: ${activeBg}`;
    busChooseBtn.style = `background-color: ${defaultBg}`;
    numbers.style = 'display: flex';
}