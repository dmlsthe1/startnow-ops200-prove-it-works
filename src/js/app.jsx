import React, { Component } from 'react';
import Mortgage from "./lib/Mortgage.js";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      principal: "",
      interestRate: "",
      loanTerm: "",
      period: "12",
      monthlyPayment: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e){
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      [name]: value,
    })
  }

  handleClick(){
    let principal = this.state.principal;
    let interest = this.state.interestRate;
    let term = this.state.loanTerm;
    let period = this.state.period;
    
    let mortgage = new Mortgage(principal, interest, term, period);
    let mortgageObj = mortgage.monthlyPayment;
    let monthlyPayment = "$" + mortgageObj[0].Amount.toFixed(2);
    this.setState({
      monthlyPayment,
      mortgageObj
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Mortgage Calculator</h1>
        <input type="number" onChange={this.handleChange} name="principal" placeholder="principal" />
        <input type="number" onChange={this.handleChange} name="interestRate" placeholder="interestRate" />
        <input type="number" onChange={this.handleChange} name="loanTerm" placeholder="loanterm" />
        <select name="period" onChange={this.handleChange} >
          <option value="12">Monthly</option>
          <option value="4">Quarterly</option>
        </select>
        <button id="calculate" onClick={this.handleClick}>Calculate</button>
        <div className="table">
           {!!this.state.mortgageObj &&
              <center>
                <p id="output"><strong>{this.state.monthlyPayment}</strong></p>
                <table  className="table table-striped table-dark table-sm table-bordered table-hover mb-0">
                  <thead>
                    <tr>
                      <th id="idPayment" className="text-center">Payment #</th>
                      <th id="idAmount" className="text-center">Amount</th>
                      <th id="idInterest" className="text-center">Interest</th>
                      <th id="idPrincipal" className="text-center">Principal</th>
                      <th id="idBalance" className="text-center">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    {this.state.mortgageObj.map(function(obj, index){
                    return (<tr key={index} id={`r-${index + 1}`}>
                        <td className="text-center">{obj.Payment}</td>
                        <td className="text-center">{obj.Amount.toFixed(2)}</td>
                        <td className="text-center">{obj.Interest.toFixed(2)}</td>
                        <td className="text-center">{obj.Principal.toFixed(2)}</td>
                        <td className="text-center">{obj.Balance.toFixed(2)}</td>
                      </tr>)
                    })}

                  </tbody>
                </table>
              </center>
            }
        </div>
      </div>
    );
  }
}
