function InputCmd({ text, logo, value, setValue, placeholder, min, step }) {
  function handleInputChange(event) {
    const inputValue = event.target.value;
    setValue(inputValue === "" ? "" : Number(inputValue));
  }

  const isInvalid = value !== "" && Number(value) <= 0;

  return (
    <div className="input-field">
      <div className="input-labels">
        <label >{text}</label>

        {isInvalid && (
          <label className="num-input-error-message">Can't be zero</label>
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
        value={value}
        onChange={handleInputChange}
        className={isInvalid ? "input-error" : ""}
      />
    </div>
  );
}

export default InputCmd;
