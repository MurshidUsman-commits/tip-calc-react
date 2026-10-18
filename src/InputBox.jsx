function InputBox({ bill, setBill }) {
  function handleInputChange(event) {
    const inputValue = event.target.value;
    setBill(inputValue === "" ? "" : Number(inputValue));
    console.log(event.target.value);
  }

  const isInvalid = bill !== "" && Number(bill) <= 0;

  return (
    <div className="input-field">
      <div className="input-labels">
        <label>Bill</label>

        {isInvalid && (
          <label className="num-input-error-message">Can't be zero</label>
        )}
      </div>

      <span>
        <img src="./images/icon-dollar.svg" alt="" />
      </span>

      <input
        type="number"
        placeholder="25"
        id="bill-input"
        step="5"
        min="25"
        value={bill}
        onChange={handleInputChange}
        className={isInvalid ? "input-error" : ""}
      />
    </div>
  );
}

export default InputBox;
