const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

    beforeEach(() => {
        mortgage = new Mortgage(120000, 5, 30, 12);
    });

    it("should have monthlyPayment function", () => {
        expect(mortgage.monthlyPayment).to.exist;
    })

    it("should have number of monthly payments in return", () => {
        expect(mortgage.monthlyPayment[0].numberPayments).to.exist;
    })
    it("should return number of monthly payments correctly", () => {
        expect(mortgage.monthlyPayment[0].numberPayments).to.equal(360);
    })

    it("should have monthly payment amount", () => {
        expect(mortgage.monthlyPayment[0].Amount).to.exist;
    })
    
    it("should return monthly payment amount correctly", () => {
        expect(mortgage.monthlyPayment[0].Amount.toFixed(2)).to.equal("644.19");
    })

});