function PeopleInputBox({ people, setPeople }) {
  const isInvalid = people !== "" && Number(people) <= 0;

  function handleInputChange(event) {
    const inputValue = event.target.value;
    setPeople(inputValue === "" ? "" : Number(inputValue));
  }

  return (
    <div className="input-field">
      <div className="input-labels">
        <label>Number of People</label>

        {isInvalid && (
          <label className="num-input-error-message">Can't be zero</label>
        )}
      </div>

      <span>
        <img src="./images/icon-person.svg" alt="" />
      </span>

      <input
        type="number"
        placeholder="1"
        id="people-input"
        min="1"
        step="1"
        className={isInvalid ? "input-error" : ""}
        value={people}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default PeopleInputBox;
