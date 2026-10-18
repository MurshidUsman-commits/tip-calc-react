import InputAmount from "./InputAmount";
import CalculatorOutput from "./CalculatorOutput";
import { useState } from "react";

function TipCalculator() {
  const [bill, setBill] = useState(25);
  const [tipPercent, setTipPercent] = useState(0);
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState(1);

  const isPeopleValid = Number(people) > 0 ? Number(people) : 0;
  const billNum = Number(bill) > 0 ? Number(bill) : 0;
  const percentNum = Number(tipPercent) > 0 ? Number(tipPercent) : 0;

  const tipTotal = billNum * (percentNum / 100);
  const tipPerPerson = isPeopleValid ? tipTotal / Number(people) : 0;
  const totalPerPerson = isPeopleValid
    ? (billNum + tipTotal) / Number(people)
    : 0;
  function handleReset() {
    setBill(25);
    setTipPercent(0);
    setCustomTip("");
    setPeople(1);
  }

  return (
    <div className="tip-calculator-container">
      <div>
        <img src="images\logo.svg" alt="" />
      </div>

      <div className="box-container">
        <InputAmount
          bill={bill}
          setBill={setBill}
          tipPercent={tipPercent}
          setTipPercent={setTipPercent}
          customTip={customTip}
          setCustomTip={setCustomTip}
          people={people}
          setPeople={setPeople}
        />
        <CalculatorOutput
          tipAmount={tipPerPerson}
          totalAmount={totalPerPerson}
          onReset={handleReset}
        />
      </div>
    </div>
  );
}

export default TipCalculator;
