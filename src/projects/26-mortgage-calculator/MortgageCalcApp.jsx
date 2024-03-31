/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Title from "../components/Title"
import FormGroup from "../components/FormGroup"
import Button from "../components/Button"



export default function MortgageCalcApp() {
  // States
  const [homeValue, setHomeValue] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");

  function calculateLoanAmount() {
    setLoanAmount(homeValue - downPayment);
    return loanAmount;
  }

  function calculateMonthlyPayments() {
    function percentageToDecimale(percent) {
      return percent / 12 / 100;
    }
    function yearsToMonths(years) {
      return years * 12;
    }
    setMonthlyPayment(
      (percentageToDecimale(interestRate) * loanAmount) /
      (
        1 -
        Math.pow(
          1 + percentageToDecimale(interestRate),
          -yearsToMonths(loanDuration)
        )
      )
    );
    return monthlyPayment;
  }

  let alertClass;
  monthlyPayment ? (alertClass = "alert-success") : (alertClass = "alert-danger");

  return (
    <div className='container mt-4 card' style={{ width: 500 }}>
      <Title text={"Mortgage Calc App"} />
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='d-grid' style={{ gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <FormGroup labelText={"Home value"} inputType={"number"} placeholder={"Enter the value of the home"} values={homeValue} onInput={(e) => setHomeValue(e.target.value)} onKeyUp={calculateLoanAmount} />
          <FormGroup labelText={"Down payment"} inputType={"number"} placeholder={"Enter your funds"} values={downPayment} onInput={(e) => setDownPayment(e.target.value)} onKeyUp={calculateLoanAmount} />
        </div>
        <FormGroup labelText={"Loan amount"} inputType={"number"} placeholder={"The calculated amount of the loan"} readOnly={true} values={loanAmount} className={"bg-light"} />
        <div className='d-grid' style={{ gridTemplateColumns: "1fr 1fr", gap: 10 }} >
          <FormGroup labelText={"Interest Rate %"} inputType={"number"} placeholder={"Enter your interest rate"} values={interestRate} onInput={(e) => setInterestRate(e.target.value)} />
          <FormGroup labelText={"Loan Duration (years)"} inputType={"number"} placeholder={"Enter the duration of the loan in years"} values={loanDuration} onInput={(e) => setLoanDuration(e.target.value)} />
        </div>
        <Button btnClass={"btn-info btn-block"} text='Calculate' onClick={calculateMonthlyPayments} />
        <h4 className={`${alertClass}`} style={{ width: "auto", margin: "1rem 0" }} >
          {monthlyPayment ? `Monthly payment: ${monthlyPayment.toFixed(2)}` : "Complete all fields"}
        </h4>
      </form>
    </div>
  )
}
