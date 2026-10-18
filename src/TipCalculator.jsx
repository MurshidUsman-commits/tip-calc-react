import InputAmount from "./InputAmount";
import CalculatorOutput from "./CalculatorOutput";
import { useEffect, useState } from "react";

export const DEFAULT_BILL = 25;
export const DEFAULT_NO_OF_PEOPLE = 1;
export const DEFAULT_CUSTOM_TIP_PERCENT = "";
export const DEFAULT_FIXED_TIP_PERCENT = 0;

function TipCalculator() {
  const [inputs, setInputs] = useState({
    bill: DEFAULT_BILL,
    fixedTipPercent: DEFAULT_FIXED_TIP_PERCENT,
    customTipPercent: DEFAULT_CUSTOM_TIP_PERCENT,
    numberOfPeople: DEFAULT_NO_OF_PEOPLE,
  });

  const [isInputValid, setIsInputValid] = useState(false);

  const [result, setResult] = useState({
    tipPerPerson: 0,
    totalPerPerson: 0,
  });

  useEffect(() => {
    let isValid = true;
    if (bill < 25) isValid = false;
    if (people < 1) isValid = false;
    if (customTip === "") {
      if (tipPercent < 1) isValid = false;
    }
    setIsInputValid(isValid);
  }, [bill, people, customTip, tipPercent]);

  useEffect(() => {
    if (!isInputValid) return;

    const tipTotal = bill * (tipPercent / 100);
    const tipPerPerson = tipTotal / people;
    const totalPerPerson = (bill + tipTotal) / people;

    setResult({
      tipPerPerson,
      totalPerPerson,
    });
  }, [bill, people, customTip, tipPercent, isInputValid]);

  function handleReset() {
    setBill(DEFAULT_BILL);
    setTipPercent(DEFAULT_FIXED_TIP_PERCENT);
    setCustomTip(DEFAULT_CUSTOM_TIP_PERCENT);
    setPeople(DEFAULT_NO_OF_PEOPLE);
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
        <CalculatorOutput result={result} onReset={handleReset} />
      </div>
    </div>
  );
}

export default TipCalculator;
