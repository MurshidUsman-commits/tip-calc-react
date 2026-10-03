function InputBox() {
  return (
    <div>
      <div class="input-field">
        <div class="input-labels">
          <label for="bill-input">Bill</label>
          {/* <label id="bill-error-message">Can't be zero</label> */}
        </div>
        <span>
          <img src="./images/icon-dollar.svg" alt="" />
        </span>
        <input type="number" placeholder="0" id="bill-input" step="5" min="0" />
      </div>
    </div>
  );
}

export default InputBox;
