import { defaultInputValues } from "./TipCalculator";

function Input({
  text,
  logo,
  inputs,
  setInputs,
  errors,
  setErrors,
  validateInp,
  inputKey,
  placeholder,
  min,
  step,
}) {
  const invalidMsg = errors[inputKey];
  const isInvalid = Boolean(invalidMsg);

  function handleInputChange(event) {
    const inputValue = event.target.value;
    if (inputValue === "")
      setInputs((prev) => ({
        ...prev,
        [inputKey]: defaultInputValues[inputKey],
      }));
    setInputs((prev) => ({ ...prev, [inputKey]: inputValue }));

    const invalidMsg = validateInp(inputValue);
    if (invalidMsg) {
      setErrors((prev) => ({ ...prev, [inputKey]: invalidMsg }));
    } else {
      setErrors((prev) => ({ ...prev, [inputKey]: undefined }));
    }
  }

  return (
    <div className="input-field">
      <div className="input-labels">
        <label>{text}</label>

        {isInvalid && (
          <label className="num-input-error-message">{invalidMsg}</label>
        )}
      </div>

      <span>
        <img src={logo} alt="" />
      </span>

      <input
        type="number"
        placeholder={placeholder}
        min={min}
        step={step}
        value={inputs[inputKey]}
        onChange={handleInputChange}
        className={isInvalid ? "input-error" : ""}
      />
    </div>
  );
}

export default Input;
