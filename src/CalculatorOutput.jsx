import ResultAmounts from "./ResultAmounts";

function CalculatorOutput({ tipAmount, totalAmount, onReset}) {
  return (
    <div className="calculator-output-section">
      <div>
        <ResultAmounts
          tipAmount={tipAmount}
          totalAmount={totalAmount}
          onReset={onReset}
        />
      </div>
    </div>
  );
}

export default CalculatorOutput;
