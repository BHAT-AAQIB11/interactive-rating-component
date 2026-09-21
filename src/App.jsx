import { useState } from "react";
import Rating from "./components/Rating";
import Thanks from "./components/Thanks";

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSelected, setIsSelected] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  let selected = isSelected.indexOf(true) + 1;
  return (
    <main className="main">
      {!isSubmitted && (
        <Rating
          setIsSubmitted={(value) => setIsSubmitted(value)}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
      )}
      {isSubmitted && <Thanks rate={selected} />}
    </main>
  );
}
