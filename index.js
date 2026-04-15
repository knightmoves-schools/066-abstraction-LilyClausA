// this one was bad
class TaxCalculator{
    
    constructor(){
        let rate = 15;
        this.state = 'TX';
        this.exempt = false;
    
        let calculate = () => {
        if(this.exempt) {
            return calculateExempt(1.37);
        }else{
            return calculateNonExempt(5.72);
        }
    }
}
}
//this one was good (down)
class TaxCalculator {
    constructor() {
        let rate = 15;

        let calculateExempt = (amount) => amount * rate;
        let calculateNonExempt = (amount) => amount * rate * 1.2;

        this.state = 'TX';
        this.exempt = false;

        this.calculate = () => {
            return this.exempt
                ? calculateExempt(1.37)
                : calculateNonExempt(5.72);
        };
    }
}

//should hide the rate

//should hide the calculateExempt method

//should hide the calculateNonExempt method