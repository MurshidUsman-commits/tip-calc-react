function PercentageInputBox({
  inputs,
  setInputs,
  errors,
  setErrors,
  inputKey,
}) {
  const tipValues = [5, 10, 15, 25, 50];

  const customTip = inputs.customTipPercent;
  const tipPercent = Number(inputs.fixedTipPercent);

  const isInvalid = Boolean(errors?.customTipPercent);

  function handleSelectTip(value) {
    setInputs((prev) => ({
      ...prev,
      [inputKey]: value,
      customTipPercent: "",
    }));

    setErrors((prev) => ({
      ...prev,
      customTipPercent: undefined,
    }));
  }

  function handleCustomTipChange(event) {
    const value = event.target.value;

    setInputs((prev) => ({
      ...prev,
      [inputKey]: 0,
      customTipPercent: value,
    }));

    let error;

    if (value !== "" && Number(value) <= 0) {
      error = "Tip percentage must be greater than 0";
    } else if (Number(value) > 100) {
      error = "Tip percentage cannot be greater than 100";
    }

    setErrors((prev) => ({
      ...prev,
      customTipPercent: error,
    }));
  }

  return (
    <div id="tip-box">
      <label>Select Tip %</label>

      <div id="tip-options" className="tip-percentage-options">
        {tipValues.map((value) => (
          <button
            type="button"
            key={value}
            className={
              tipPercent === value && customTip === "" ? "active-tip" : ""
            }
            onClick={() => handleSelectTip(value)}
          >
            {value}%
          </button>
        ))}

        <input
          type="number"
          placeholder="Custom"
          id="custom-tip-input"
          min="0"
          max="100"
          step="1"
          value={customTip}
          className={isInvalid ? "input-error" : ""}
          onChange={handleCustomTipChange}
        />
      </div>

      {isInvalid && <p className="error-message">{errors.customTipPercent}</p>}
    </div>
  );
}

export default PercentageInputBox;
