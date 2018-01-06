const express = require('express');
const expect = require('chai').expect;
const path = require('path');
const Nightmare = require('nightmare');

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../dist')));

app.listen(8888);

const url = 'http://localhost:8888';

const nightmare = new Nightmare({show: true});
let pageObject = null;

describe('End to End Tests', () => {
    let pageObject = null;

    beforeEach(() => {
        pageObject = nightmare.goto(url);
    });

    it('should contain a <h1> element for the page title', () => 
    pageObject
        .evaluate(() => document.querySelector('h1').innerText)
        .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal('Mortgage Calculator');
        })
    );

    it('should correctly calculate mortgage payment amount', () =>
        pageObject
            .wait()
            .type('input[name=principal]', 300000)
            .type('input[name=interestRate]', 3.75)
            .type('input[name=loanTerm]', 30)
            .select('select[name=period]', 12)
            .click('button#calculate')
            .wait('#output')
            .evaluate(() => document.querySelector('#output').innerText)
            .then((outputText) => {
                expect(outputText).to.equal('$1389.35');
        })
    ).timeout(6500);

    it('should correctly calculate mortgage', () =>
        pageObject
            .wait()
            .type('input[name=principal]', 300000)
            .type('input[name=interestRate]', 3.75)
            .type('input[name=loanTerm]', 30)
            .select('select[name=period]', 4)
            .click('button#calculate')
            .wait('#output')
            .evaluate(() => document.querySelector('#output').innerText)
            .then((outputText) => {
                expect(outputText).to.equal('$4175.07');
        })
    ).timeout(6500);

    it('should correctly calculate mortgage payment amount', () =>
        pageObject
            .wait()
            .type('input[name=principal]', 400000)
            .type('input[name=interestRate]', 3.75)
            .type('input[name=loanTerm]', 30)
            .select('select[name=period]', 12)
            .click('button#calculate')
            .wait('#output')
            .evaluate(() => document.querySelector('#output').innerText)
            .then((outputText) => {
                expect(outputText).to.equal('$1852.46');
        })
    ).timeout(6500);

    it('should correctly calculate mortgage', () =>
        pageObject
            .wait()
            .type('input[name=principal]', 400000)
            .type('input[name=interestRate]', 3.75)
            .type('input[name=loanTerm]', 30)
            .select('select[name=period]', 4)
            .click('button#calculate')
            .wait('#output')
            .evaluate(() => document.querySelector('#output').innerText)
            .then((outputText) => {
                expect(outputText).to.equal('$5566.76');
        })
    ).timeout(6500);

    it('should correctly calculate mortgage payment amount', () =>
        pageObject
            .wait()
            .type('input[name=principal]', 300000)
            .type('input[name=interestRate]', 3.75)
            .type('input[name=loanTerm]', 15)
            .select('select[name=period]', 12)
            .click('button#calculate')
            .wait('#output')
            .evaluate(() => document.querySelector('#output').innerText)
            .then((outputText) => {
                expect(outputText).to.equal('$2181.67');
        })
    ).timeout(6500);

    it('should correctly calculate mortgage', () =>
        pageObject
            .wait()
            .type('input[name=principal]', 300000)
            .type('input[name=interestRate]', 3.75)
            .type('input[name=loanTerm]', 15)
            .select('select[name=period]', 4)
            .click('button#calculate')
            .wait('#output')
            .evaluate(() => document.querySelector('#output').innerText)
            .then((outputText) => {
                expect(outputText).to.equal('$6560.19');
        })
    ).timeout(6500);

    it('should correctly calculate mortgage payment amount', () =>
        pageObject
            .wait()
            .type('input[name=principal]', 400000)
            .type('input[name=interestRate]', 3.75)
            .type('input[name=loanTerm]', 15)
            .select('select[name=period]', 12)
            .click('button#calculate')
            .wait('#output')
            .evaluate(() => document.querySelector('#output').innerText)
            .then((outputText) => {
                expect(outputText).to.equal('$2908.89');
        })
    ).timeout(6500);

    it('should correctly calculate mortgage', () =>
        pageObject
            .wait()
            .type('input[name=principal]', 400000)
            .type('input[name=interestRate]', 3.75)
            .type('input[name=loanTerm]', 15)
            .select('select[name=period]', 4)
            .click('button#calculate')
            .wait('#output')
            .evaluate(() => document.querySelector('#output').innerText)
            .then((outputText) => {
                expect(outputText).to.equal('$8746.92');
        })
    ).timeout(6500);

    it('should correctly calculate mortgage', () =>
        pageObject
            .wait()
            .type('input[name=principal]', 400000)
            .type('input[name=interestRate]', 3.75)
            .type('input[name=loanTerm]', 15)
            .select('select[name=period]', 4)
            .click('button#calculate')
            .wait('#r-45')
            .evaluate(() => document.querySelector('#r-45 td:last-of-type').innerText)
            .then((outputText) => {
                expect(outputText).to.equal('121865.03');
        })
    ).timeout(6500);
})