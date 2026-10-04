import { useState } from "react";

function PeopleInputBox() {
  const [people, setPeople] = useState("");

  function handleInputChange(event) {
    const inputValue = event.target.value;
    setPeople(inputValue);
  }

  return (
    <div>
      <div className="input-field">

        <div className="input-labels">
          <label>Number of People</label>

          {people !== "" && Number(people) <= 0 && (
            <label className="num-input-error-message">
              Can't be zero
            </label>
          )}
        </div>

        <span>
          <img src="./images/icon-person.svg" alt="" />
        </span>

        <input
          type="number"
          placeholder="0"
          id="people-input"
          min="0"
          onChange={handleInputChange}
        />

      </div>
    </div>
  );
}

export default PeopleInputBox;