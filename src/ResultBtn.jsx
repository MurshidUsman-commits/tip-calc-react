function ResultBtn({ onReset}) {
  return (
    <button
      type="button"
      onClick={onReset}
      className="reset-button"
    >
      RESET
    </button>
  );
}
export default ResultBtn;
