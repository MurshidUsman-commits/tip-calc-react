import ResultBtn from "./ResultBtn"

function ResultAmounts() {
  let tipAmount = 0;
  let totalAmount = 0;
  // let textTipAmount = document.getElementById("tip-per-person");
  // let arr = localStorage.getItem("tipAmount");
  const arr = [
    { label: "Tip amount", amount: 0 },
    { label: "Total amount", amount: 0 },
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
        <ResultBtn />
      </div>
    </div>
  );
}

export default ResultAmounts;
