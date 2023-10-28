import { useState } from "react";
import "./DateCalculator.css";
import DateMessage from "./DateMessage";

export default function DateCalculator() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const minusStep = () => {
    setStep((currentValue) => currentValue - 1);
  };
  const addStep = () => {
    setStep((currentValue) => currentValue + 1);
  };

  const minusCount = () => {
    setCount((currentValue) => currentValue - step);
  };

  const addCount = () => {
    setCount((currentValue) => currentValue + step);
  };

  return (
    <div className="container">
      <div className="step_counter">
        <button onClick={minusStep}>-</button>
        <div>Step:{step}</div>
        <button onClick={addStep}>+</button>
      </div>
      <div className="count_counter">
        <button onClick={minusCount}>-</button>
        <div>Count:{count}</div>
        <button onClick={addCount}>+</button>
      </div>
      <div>Current Value : {count} </div>
      <DateMessage dateCount={count} />
    </div>
  );
}
