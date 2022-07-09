class DonutMaker{
    constructor(numDonuts, autoClickCost, numMultis, multiPrice){
        this.numDonuts = 0;     

        this.numAutoClickers = 0; 
        this.autoClickCost = 100;  

        this.multiPrice = 10;
        this.numMultis = 0;
    } 


    addDonut(){
        this.numDonuts ++; 
    //   this.numDonuts += Math.round(1.2**this.numMultis);  
    }  

    autoBuy(){ 
        if(this.numDonuts >= this.autoClickCost){
            this.numAutoClickers ++;
            this.numDonuts -= Math.round(this.autoClickCost); 
            // autoClickCost might be tenative
            this.autoClickCost = Math.round(this.autoClickCost * 0.1 + this.autoClickCost);
            
        }
    } 

    runAuto(){
        for(let i = 0; i < this.numAutoClickers; i++){
            this.addDonut();
        }
        if(this.numDonuts < 0){
            alert("You have no donuts. Game will restart"); 
            location.reload()
        }
    }

    buyMulti(){
        if(this.numDonuts >= this.multiPrice){
            this.numMultis++;
            this.numDonuts -= Math.round(this.multiPrice); 
            this.multiPrice = Math.round(this.multiPrice * 1.2);
        }
    } 




} 

export default DonutMaker;