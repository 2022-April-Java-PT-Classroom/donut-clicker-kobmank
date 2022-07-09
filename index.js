import DonutMaker from './DonutMaker.js';
const donutGame = new DonutMaker();

//querySelectors
const getDonutBtn = document.querySelector('.getDonutButton'); 
const donutValue = document.querySelector('.donutValue'); 

// AutoClick 
const buyAutoBtn = document.querySelector('.buyAuto');
const autoClickCount = document.querySelector('.numAutoClickers'); 
const autoClickerPrice = document.querySelector('.autoClickerPrice');

// Multipliers
const buyMultiBtn = document.querySelector('.buyMulti');  
const multiplierPrice = document.querySelector('.multiPrice');
const multipsCount = document.getElementById('numMultis');

const resetBtn = document.querySelector('.reset');


// reset button
resetBtn.addEventListener("click", ()=>{
    location.reload(); 
})

// Donut Clicker Button
getDonutBtn.onclick = function(){
    donutGame.addDonut();
    donutValue.innerHTML = donutGame.numDonuts;
    console.log(dountValue);
}

// AutoClick Button
buyAutoBtn.onclick = function(){
    donutGame.autoBuy(); 
    autoClickCount.innerHTML = donutGame.numAutoClickers;

    donutValue.innerHTML = donutGame.numDonuts;
    
    autoClickerPrice.innerHTML = donutGame.autoClickCost;

    console.log(donutGame.numAutoClickers); 
    console.log(donutGame.autoClickCost);
}

// Multiplier Button
buyMultiBtn.onclick = function(){
    donutGame.buyMulti(); 
    multipsCount.innerHTML = donutGame.numMultis; 
    multiplierPrice.innerHTML = donutGame.multiPrice;
    console.log(donutGame.numMultis);
} 

setInterval(function (){
    donutGame.runAuto(); 
    donutValue.innerHTML = donutGame.numDonuts}, 1000);

