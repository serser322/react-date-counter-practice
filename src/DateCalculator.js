import { useState } from "react";
import "./DateCalculator.css";
import DateMessage from "./DateMessage";

export default function DateCalculator() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  // const minusStep = () => {
  //   setStep((currentValue) => currentValue - 1);
  // };
  // const addStep = () => {
  //   setStep((currentValue) => currentValue + 1);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const updateStep = (event) => {
    setStep(Number(event.target.value));
  };

  const updateCount = (event) => {
    setCount(Number(event.target.value));
  };

  const minusCount = () => {
    setCount((currentValue) => currentValue - step);
  };

  const addCount = () => {
    setCount((currentValue) => currentValue + step);
  };

  const handleReset = () => {
    setStep(1);
    setCount(0);
  };

  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        <div className="step_counter">
          <input
            type="range"
            min="1"
            max="10"
            value={step}
            onChange={updateStep}
          />
          <div>Step:{step}</div>
        </div>
        <div>Count:</div>
        <div className="count_counter">
          <button onClick={minusCount}>-</button>
          <input type="text" value={count} onChange={updateCount} />
          <button onClick={addCount}>+</button>
        </div>
      </form>

      <DateMessage dateCount={count} />
      {count !== 0 || step !== 1 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}
