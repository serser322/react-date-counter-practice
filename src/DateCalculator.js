import { useState } from 'react'
import './DateCalculator.css'

export default function DateCalculator() {
  const [step, setStep] = useState(0)
  const [count, setCount] = useState(0)

  const minusStep = () => {
    setStep (currentValue => currentValue -1)
  }
  const addStep = () => {
    setStep((currentValue) => currentValue + 1 )
  }

  return (
    <div className='container'>
      <div className='step_counter'>
        <button onClick={minusStep}>-</button>
        <div>Step:{step}</div>
        <button onClick={addStep}>+</button>
      </div>
      <div className='count_counter'>
        <button>-</button>
        <div>Count:{count}</div>
        <button>+</button>
      </div>

    </div>
  )
}