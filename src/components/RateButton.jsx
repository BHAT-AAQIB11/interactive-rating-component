import clsx from "clsx";

export default function RateButton({
  value,
  setIsSelected,
  isSelected,
  setShowMsg,
  showMsg,
}) {
  function handleClick() {
    const arr = new Array(5).fill(false);
    arr[value - 1] = true;
    setIsSelected(arr);
    setShowMsg(false);
  }
  return (
    <button
      className={clsx("rate-button", {
        selected: isSelected[value - 1],
        "none-selected": showMsg, 
      })}
      type="button"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
