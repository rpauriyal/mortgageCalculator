import React, { useState } from "react";
import "./mortageCalc.css";

function MortgageCalculator() {
  const [propertyValue, setPropertyValue] = useState("");
  const [deposit, setDeposit] = useState("");
  const [income, setIncome] = useState("");
  const [mortgageYears, setMortgageYears] = useState("");
  const [mortgageMonths, setMortgageMonths] = useState("");
  const [borrowAmount, setBorrowAmount] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedEmployement, setSelectedEmployement] = useState("");
  const [propertyValueError, setPropertyValueError] = useState(false);
  const [depositError, setDepositError] = useState(false);
  const [incomeError, setIncomeError] = useState(false);
  const [mortgageYearsError, setMortgageYearsError] = useState(false);
  const [mortgageMonthsError, setMortgageMonthsError] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleEmplyment = (event) => {
    setSelectedEmployement(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!propertyValue) {
      setPropertyValueError(true);
      return;
    }
    if (!deposit) {
      setDepositError(true);
      return;
    }
    if (!income) {
      setIncomeError(true);
      return;
    }
    if (!mortgageYears) {
      setMortgageYearsError(true);
      return;
    }
    if (!mortgageMonths) {
      setMortgageMonthsError(true);
      return;
    }

    calculateBorrowAmount();
  };

  const calculateBorrowAmount = () => {
    const p = parseFloat(propertyValue);
    const d = parseFloat(deposit);
    const i = parseFloat(income);
    const my = parseFloat(mortgageYears);
    const mm = parseFloat(mortgageMonths);
    const ml = my + mm / 12;
    const ltv = (p - d) / p;
    let maxLtv = 0.8;
    if (i >= 30000) {
      maxLtv = 0.95;
    } else if (i >= 25000) {
      maxLtv = 0.9;
    } else if (i >= 20000) {
      maxLtv = 0.85;
    }
    const maxBorrowAmount = p * maxLtv;
    let borrowAmount = maxBorrowAmount;
    if (ltv < maxLtv) {
      borrowAmount = (p - d) / (1 - maxLtv);
    }
    setBorrowAmount(borrowAmount.toFixed(2));

    const r = 0.05;
    const n = ml * 12;
    const monthlyRate = r / 12;
    const emi =
      (borrowAmount * monthlyRate * Math.pow(1 + monthlyRate, n)) /
      (Math.pow(1 + monthlyRate, n) - 1);
    setMonthlyPayment(emi.toFixed(2));
  };

  return (
    <div className="Container">
      <form onSubmit={handleSubmit}>
        <div className="divWrapper">
          <p className="text">Price of the property you would like to purchase (£)</p>
          <span className="subtext">
            This is what you're paying for your new home. If you're not sure,
            put in an estimate.
          </span>
          <input
            type="number"
            value={propertyValue}
            onChange={(e) => {
              setPropertyValue(e.target.value);
              setPropertyValueError(false);
            }}
            className="currency-input"
            required
          />
          {propertyValueError && (
            <span className="error">Please enter property value</span>
          )}
        </div>
        <div className="divWrapper">
          <p className="text">Deposit amount (£)</p>
          <span className="subtext">
            This is what you're paying for your new home. If you're not sure,
            put in an estimate.
          </span>
          <input
            type="number"
            value={deposit}
            onChange={(e) => {
              setDeposit(e.target.value);
              setDepositError(false);
            }}
            required
            className="currency-input"
          />
          {depositError && <span className="error">Please enter deposit</span>}
        </div>
        <div className="divWrapper">
          <p className="text">Length of mortgage</p>
          <span className="subtext">
            A longer term mortgage means you'll be paying more in interest over
            the length of the chosen period.
          </span>
          <div style={{ display: "flex" }}>
            <input
              type="number"
              placeholder="Years"
              value={mortgageYears}
              onChange={(e) => {
                setMortgageYears(e.target.value);
                setMortgageYearsError(false);
              }}
              required
            />
            {mortgageYearsError && (
              <span error>Please enter mortgage years</span>
            )}
            <input
              type="number"
              placeholder="Months"
              value={mortgageMonths}
              onChange={(e) => {
                setMortgageMonths(e.target.value);
                setMortgageMonthsError(false);
              }}
              required
            />
            {mortgageMonthsError && (
              <span className="error">Please enter mortgage months</span>
            )}
          </div>
        </div>
        <div className="divider"></div>
        <div className="divWrapper">
          Steps (2/2)<h1>Income</h1>
        </div>
        <div className="divWrapper">
          <p className="text">Number of people on the mortgage</p>
          <span className="subtext">
            The maximum number of people who can apply for a Nationwide mortgage
            is 2.
          </span>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="1"
              checked={selectedOption === "1"}
              onChange={handleOptionChange}
            />
            1
          </label>
          <label>
            <input
              type="radio"
              value="2"
              checked={selectedOption === "2"}
              onChange={handleOptionChange}
            />
            2
          </label>
        </div>
        {selectedOption === "1" && (
          <div className="divWrapper">
            <h2>Your Income</h2>
            <h2>What is your employment status?</h2>
            <h6>
              In general, employed people pay taxes through their employer while
              the self-employed are responsible for their own tax matters.
            </h6>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="Employeed"
                  checked={selectedEmployement === "Employeed"}
                  onChange={handleEmplyment}
                />
                Employeed
              </label>
              <label>
                <input
                  type="radio"
                  value="Self-employed"
                  checked={selectedEmployement === "Self-employed"}
                  onChange={handleEmplyment}
                />
                Self-employed or business owner
              </label>
              <label>
                <input
                  type="radio"
                  value="Not-Working"
                  checked={selectedEmployement === "Not-Working"}
                  onChange={handleEmplyment}
                />
                Not Working
              </label>
            </div>
          </div>
        )}
        {selectedOption === "1" && selectedEmployement === "Employeed" && (
          <>
            <div className="divWrapper">
              Main Income (£):
              <input
                type="number"
                value={income}
                onChange={(e) => {
                  setIncome(e.target.value);
                  setIncomeError(false);
                }}
                className="currency-input"
                required
              />
              {incomeError && (
                <span className="error">Please enter income</span>
              )}
            </div>
          </>
        )}
        <button type="submit">Get Results</button>
      </form>
      <div className="result">
        {borrowAmount && (
          <div className="divWrapper">
            <h3>Maximum Borrow Amount:</h3>
            <p>£{borrowAmount}</p>
            <h3>Monthly Payment:</h3>
            <p>£{monthlyPayment}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MortgageCalculator;
