import PercentageInputBox from "./PercentageInputBox.jsx";
import Input from "./InputCmd.jsx";

function Inputs({ inputs, setInputs, errors, setErrors }) {
  return (
    <div className="calculator-input-section">
      <Input
        text="Bill"
        inputKey="bill"
        logo="./images/icon-dollar.svg"
        inputs={inputs}
        setInputs={setInputs}
        errors={errors}
        setErrors={setErrors}
        placeholder="25"
        min="25"
        step="5"
        validateInp={(inp) => {
          if (inp < 25) return "Bill cannot be less than 25";
          if (inp > 5000) return "Bill cannot be greater than 5000";
          return undefined;
        }}
      />

      <PercentageInputBox
        inputKey="fixedTipPercent"
        inputs={inputs}
        setInputs={setInputs}
        errors={errors}
        setErrors={setErrors}
      />

      <Input
        text="Number of People"
        inputKey="numberOfPeople"
        logo="./images/icon-person.svg"
        inputs={inputs}
        setInputs={setInputs}
        errors={errors}
        setErrors={setErrors}
        validateInp={(inp) => {
          if (inp < 1) return "Number of people cannot be less than 1";
          if (inp > 10) return "Number of people cannot be greater than 10";
          return undefined;
        }}
        placeholder="1"
        min="1"
        step="1"
      />
    </div>
  );
}

export default Inputs;
