import { useState } from "react";
import RateButton from "./RateButton";

export default function Rating({ setIsSubmitted, isSelected, setIsSelected }) {
  const [showMsg, setShowMsg] = useState(false);
  function handleSubmit() {
    if (isSelected.some((elem) => elem)) {
      setIsSubmitted(true);
      return;
    }
    setShowMsg(true);
  }
  return (
    <div className="container">
      <div className="icon-container">
        <img
          src="/src/images/icon-star.svg"
          alt="star icon."
          className="star-icon"
        />
      </div>
      <h1 className="container__h1">How did we do?</h1>
      <p className="container__p">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rate-button-container">
        <RateButton
          setShowMsg={setShowMsg}
          value={1}
          setIsSelected={setIsSelected}
          isSelected={isSelected}
          showMsg={showMsg}
        />
        <RateButton
          setShowMsg={setShowMsg}
          value={2}
          setIsSelected={setIsSelected}
          isSelected={isSelected}
          showMsg={showMsg}
        />
        <RateButton
          setShowMsg={setShowMsg}
          value={3}
          setIsSelected={setIsSelected}
          isSelected={isSelected}
          showMsg={showMsg}
        />
        <RateButton
          setShowMsg={setShowMsg}
          value={4}
          setIsSelected={setIsSelected}
          isSelected={isSelected}
          showMsg={showMsg}
        />
        <RateButton
          setShowMsg={setShowMsg}
          value={5}
          setIsSelected={setIsSelected}
          isSelected={isSelected}
          showMsg={showMsg}
        />
      </div>
      <small
        className="msg"
        style={{ visibility: showMsg ? "visible" : "hidden" }}
      >
        Please select a score
      </small>
      <button type="submit" className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
