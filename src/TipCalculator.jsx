import InputAmount from "./InputAmount";
import CalculatorOutput from "./CalculatorOutput";

function TipCalculator() {
  return (
    <div className="tip-calculator-container">
      <div>
        <InputAmount />
        <CalculatorOutput />
      </div>
    </div>
  );
}

export default TipCalculator;
