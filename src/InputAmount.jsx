import PercentageInputBox from "./PercentageInputBox.jsx";
import InputCmd from "./InputCmd.jsx";

function InputAmount({
  bill,
  setBill,
  tipPercent,
  setTipPercent,
  customTip,
  setCustomTip,
  people,
  setPeople,
}) {
  return (
    <div className="calculator-input-section">
      <InputCmd
        text="Bill"
        logo="./images/icon-dollar.svg"
        value={bill}
        setValue={setBill}
        placeholder="25"
        min="25"
        step="5"
      />

      <PercentageInputBox
        tipPercent={tipPercent}
        setTipPercent={setTipPercent}
        customTip={customTip}
        setCustomTip={setCustomTip}
      />

      <InputCmd
        text="Number of People"
        logo="./images/icon-person.svg"
        value={people}
        setValue={setPeople}
        placeholder="1"
        min="1"
        step="1"
      />
    </div>
  );
}

export default InputAmount;
