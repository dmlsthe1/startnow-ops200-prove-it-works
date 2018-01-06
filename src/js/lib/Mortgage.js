module.exports = class Mortgage {
    constructor(principal, interest, term, period) {
        this.principal = principal;
        this.interest = interest;
        this.term = term;
        this.period = period;
    }
  
    get monthlyPayment() {
        let principalTotal = this.principal;
        let rate = this.interest / 100 / this.period;
        let numberPayments = this.term * this.period;
        let monthlyPayments = (principalTotal * ((rate * Math.pow((1 + rate), numberPayments)) / (Math.pow((1 + rate), numberPayments) - 1)));
        let obj = {
            numberPayments,
            Amount: parseFloat(monthlyPayments),
            Interest: parseFloat((rate * principalTotal)),
            Principal: parseFloat(((monthlyPayments - (rate* principalTotal)))),
            Balance: parseFloat(principalTotal - (monthlyPayments - (rate * principalTotal)))
        };

        
        let tableContents = [];
        for (let i = 0; i < numberPayments ; i++){
            obj.Payment = (i + 1);
            
            if(i === 0){
                tableContents.push(Object.assign({}, obj));
                
            } else {
                obj.Interest =       (rate * obj.Balance);
                obj.Principal =      (obj.Amount - obj.Interest);
                obj.Balance =        (obj.Balance - obj.Principal);
                if(i + 1 == numberPayments){
                obj.Payment = "Final Payment";
                }
                tableContents.push(Object.assign({}, obj));

            } 

        }
        return tableContents;
    }
}