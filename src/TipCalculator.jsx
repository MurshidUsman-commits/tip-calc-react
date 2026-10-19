import Inputs from "./Inputs";
import CalculatorOutput from "./CalculatorOutput";
import { useEffect, useState } from "react";

export const DEFAULT_BILL = 25;
export const DEFAULT_NO_OF_PEOPLE = 1;
export const DEFAULT_CUSTOM_TIP_PERCENT = "";
export const DEFAULT_FIXED_TIP_PERCENT = 0;

export const defaultInputValues = {
  bill: DEFAULT_BILL,
  fixedTipPercent: DEFAULT_FIXED_TIP_PERCENT,
  customTipPercent: DEFAULT_CUSTOM_TIP_PERCENT,
  numberOfPeople: DEFAULT_NO_OF_PEOPLE,
};

function TipCalculator() {
  const [inputs, setInputs] = useState(defaultInputValues);

  const [errors, setErrors] = useState({
    bill: undefined,
    customTipPercent: undefined,
    numberOfPeople: undefined,
  });

  const [isInputValid, setIsInputValid] = useState(false);

  const [result, setResult] = useState({
    tipPerPerson: 0,
    totalPerPerson: 0,
  });

  useEffect(() => {
    let isValid = true;
    for (const k in errors) {
      if (errors[k]) isValid = false;
    }
    setIsInputValid(isValid);
  }, [errors]);

  useEffect(() => {
    if (!isInputValid) return;

    const { bill, fixedTipPercent, customTipPercent, numberOfPeople } = inputs;

    const tipPercent = fixedTipPercent ?? customTipPercent;

    const tipTotal = bill * (tipPercent / 100);
    const tipPerPerson = tipTotal / numberOfPeople;
    const totalPerPerson = (bill + tipTotal) / numberOfPeople;

    setResult({
      tipPerPerson,
      totalPerPerson,
    });
  }, [inputs, isInputValid]);

  function handleReset() {
    setInputs(defaultInputValues);
  }

  return (
    <div className="tip-calculator-container">
      <div>
        <img src="images\logo.svg" alt="" />
      </div>

      <div className="box-container">
        <Inputs
          inputs={inputs}
          setInputs={setInputs}
          errors={errors}
          setErrors={setErrors}
        />
        <CalculatorOutput result={result} onReset={handleReset} />
      </div>
    </div>
  );
}

export default TipCalculator;
