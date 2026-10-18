import ResultBtn from "./ResultBtn";

function ResultAmounts({ tipAmount, totalAmount, onReset }) {
  const arr = [
    { label: "Tip amount", amount: tipAmount },
    { label: "Total amount", amount: totalAmount },
  ];

  return (
    <div className="result-amt">
      <div className="calculation-results">
        {arr.map((element, index) => (
          <div className="result-row" key={index}>
            <div>
              <div className="result-label">{element.label}</div>
              <div className="result-per-person">/ person</div>
            </div>

            <div className="result-value">${element.amount.toFixed(2)}</div>
          </div>
        ))}
      </div>
      <div className="result-btn">
        <ResultBtn onReset={onReset} />
      </div>
    </div>
  );
}

export default ResultAmounts;
