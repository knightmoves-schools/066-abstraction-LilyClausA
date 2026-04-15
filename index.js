
    class TaxCalculator {

    #rate = 15;                 // private field
    #calculateExempt(amount) {  // private method
        return amount * this.#rate;
    }

    #calculateNonExempt(amount) { // private method
        return amount * this.#rate * 1.2;
    }

    constructor() {
        this.state = 'TX';
        this.exempt = false;
    }

    calculate() {               // public method
        if (this.exempt) {
            return this.#calculateExempt(1.37);
        } else {
            return this.#calculateNonExempt(5.72);
        }
    }
}

   
}

//should hide the rate

//should hide the calculateExempt method

//should hide the calculateNonExempt method