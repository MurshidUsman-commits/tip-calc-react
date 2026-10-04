import { useState } from "react";

function PercentageInputBox() {
  const tipValues = [5, 10, 15, 25, 50];
  const [selectedTip, setSelectedTip] = useState("");
  const [selectedColor,setSelectedColor] = useState(true)
  const [customTip, setCustomTip] = useState("");

  function fixTipValues(value) {
    setSelectedTip(value);
  }

  function handleCustomTipChange(event) {
    const value = event.target.value;
    setCustomTip(value);
  }

  return (
    <div id="tip-box">
      <label>Select Tips %</label>
      <div id="tip-options" class="tip-percentage-options">
        {/* <div class="tip-percentage-buttons"> */}
          {tipValues.map((value) => (
            <button key={value} data-tip={value} onClick={() => fixTipValues(value)}>
              {value}%
            </button>
          ))}

          {/* <div class="tip-percentage-custom"> */}
            <input
              type="number"
              placeholder="Custom"
              id="custom-tip-input"
              step="5"
              min="0"
              max="100"
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
