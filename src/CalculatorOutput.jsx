import ResultAmounts from "./ResultAmounts";

function CalculatorOutput({
  result: { tipPerPerson, totalPerPerson },
  onReset,
}) {
  return (
    <div className="calculator-output-section">
      <div>
        <ResultAmounts
          tipAmount={tipPerPerson}
          totalAmount={totalPerPerson}
          onReset={onReset}
        />
      </div>
    </div>
  );
}

export default CalculatorOutput;
