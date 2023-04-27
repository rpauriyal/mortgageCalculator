import React, { useState } from "react";
import "./mortage.css";
import MortgageCalculator from "./mortageCalculator";
import alert from "../assets/alert.png";
function MortagePage() {
  const totalStep = 2;
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="wrapper">
        Home > Mortgaes > Mortgaes calculator
        <div className="heading">How much can I borrow?</div>
        <p className="divWrapper">
          Use our mortgage calculator to get a rough idea of what you could
          borrow - in just minutes. To fill it in, you'll need to know:
        </p>
        <ul className="list">
          <li>Your main income details</li>
          <li>A rough idea of the property value</li>
          <li>Your deposit or loan amount.</li>
        </ul>
      </div>
      <div className="card">
        Steps ({currentStep}/{totalStep})<h1>Your details</h1>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="buy-first-home"
              checked={selectedOption === "buy-first-home"}
              onChange={handleOptionChange}
            />
            Buy your first home
          </label>
          <label>
            <input
              type="radio"
              value="move-home"
              checked={selectedOption === "move-home"}
              onChange={handleOptionChange}
            />
            Move home
          </label>
          <label>
            <input
              type="radio"
              value="borrow-more"
              checked={selectedOption === "borrow-more"}
              onChange={handleOptionChange}
            />
            Borrow more
          </label>
          <label>
            <input
              type="radio"
              value="remortgage"
              checked={selectedOption === "remortgage"}
              onChange={handleOptionChange}
            />
            Remortgage and change lender to Nationwide
          </label>
          <label>
            <input
              type="radio"
              value="borrow-against-property"
              checked={selectedOption === "borrow-against-property"}
              onChange={handleOptionChange}
            />
            Borrow against your mortgage-free property
          </label>
        </div>
        {selectedOption === "buy-first-home" && <MortgageCalculator />}
      </div>
      <div className="additional_info">
        <img src={alert} alt="#" />
        <b>Important:</b>Think carefully before securing other debts against
        your home. Mortgages are secured on your home. You could lose your home
        if you do not keep up payments on your mortgage. Mortgages are subject
        to underwriting and criteria. Minimum age 18, UK residents only.
      </div>
    </>
  );
}

export default MortagePage;
