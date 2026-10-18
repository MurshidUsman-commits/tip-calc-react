function PercentageInputBox({
  tipPercent,
  setTipPercent,
  customTip,
  setCustomTip,
}) {
  const isInvalid =
    customTip !== "" && (Number(customTip) <= 0 || Number(customTip) > 100);

  const tipValues = [5, 10, 15, 25, 50];
  function handleSelectTip(val) {
    if(tipPercent === val && customTip== ""){
      setTipPercent(0)
    } else{
    setTipPercent(Number(val));
    setCustomTip("");}
  }

  function handleCustomTipChange(event) {
    const value = event.target.value;
    if (value < 0 || value > 100) {
      setCustomTip("");
      setTipPercent(0);
      return;
    }
    setCustomTip(value);
    setTipPercent(value === "" ? 0 : Number(value));
  }

  return (
    <div id="tip-box">
      <label>Select Tips %</label>
      <div id="tip-options" className="tip-percentage-options">
        {/* <div class="tip-percentage-buttons"> */}
        {tipValues.map((value) => (
          <button
            key={value}
            data-tip={value}
            className={
              tipPercent === value && customTip === "" ? "active-tip" : ""
            }
            onClick={() => handleSelectTip(value)}
          >
            {value}%
          </button>
        ))}

        {/* <div class="tip-percentage-custom"> */}
        <input
          type="number"
          placeholder="Custom"
          id="custom-tip-input"
          step="5"
          min={0}
          max="100"
          className={isInvalid ? "input-error" : ""}
          value={customTip}
          onChange={handleCustomTipChange}
        />
        {/* </div> */}

        {/* </div> */}

        {/* <!-- <button data-tip="5">5%</button>
            <button data-tip="10">10%</button>
            <button data-tip="15">15%</button>
            <button data-tip="25">25%</button>
            <button data-tip="50">50%</button>  --> */}
      </div>
    </div>
  );
}

export default PercentageInputBox;
