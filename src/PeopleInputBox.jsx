

function PeopleInputBox() {
  return (
    <div>
      <div class="input-field">
        <div class="input-labels">
          <label for="people-input">Number of People</label>
          {/* <label id="people-error-message">Can't be zero</label> */}
        </div>
        <span>
          <img src="./images/icon-dollar.svg" alt="" />
        </span>
        <input type="number" placeholder="0" id="people-input" step="5" min="0" />
      </div>
    </div>
  )
}

export default PeopleInputBox