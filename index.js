class TaxCalculator{
    
    constructor(){
        let rate = 15;
        this.state = 'TX';
        this.exempt = false;
    
        let calculate = () => {
        if(this.exempt){
            return calculateExempt(1.37);
        }else{
            return calculateNonExempt(5.72);
        }
    }
}
    
   
}

//should hide the rate

//should hide the calculateExempt method

//should hide the calculateNonExempt method