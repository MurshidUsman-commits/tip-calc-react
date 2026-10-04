import { useState } from "react";

function InputBox() {
  const [Bill, setBill] = useState("");

  function handleInputChange(event) {
    const inputValue = event.target.value;
    setBill(inputValue);
  }

  return (
    <div>
      <div className="input-field">

        <div className="input-labels">
          <label>Bill</label>

          {Bill !== "" && Number(Bill) <= 0 && (
            <label
              id="bill-error-message"
              className="num-input-error-message"
            >
              Can't be zero
            </label>
          )}
        </div>

        <span>
          <img src="./images/icon-dollar.svg" alt="" />
        </span>

        <input
          type="number"
          placeholder="0"
          id="bill-input"
          step="5"
          min="0"
          onChange={handleInputChange}
          className={
            Number(Bill) <= 0
              ? "input-error"
              : ""
          }
        />

      </div>
    </div>
  );
}

export default InputBox;