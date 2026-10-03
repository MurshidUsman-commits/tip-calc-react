import InputBox from "./InputBox"
import PeopleInputBox from "./PeopleInputBox"
import PercentageInputBox from "./PercentageInputBox"


function InputAmount() {
  return (
    <div className="calculator-input-section">
      <div><InputBox/></div>
      <div><PercentageInputBox/></div>
      <div><PeopleInputBox/></div>
    </div>
  )
}

export default InputAmount