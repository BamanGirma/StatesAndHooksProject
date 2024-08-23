import React, {useState} from 'react'

 function IncreaseDecreaseCount() {
  const [count,setCount] = useState(0);
   
  // function to increase the count
  const increaseCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount(prevCount => prevCount - 1);
  }

  const resetCount = () => {
    setCount(0);
  }
  return (
    <div>
      <div className='title'>
      <h2>initial click count: {count}</h2>
      </div>
      <div className='btn'>
      <button onClick={resetCount}>Reset count</button>
      <button onClick={increaseCount}>Increase count</button>
      <button onClick={decreaseCount}>Decrease count</button>
      </div>
    </div>
  )
}

export default IncreaseDecreaseCount