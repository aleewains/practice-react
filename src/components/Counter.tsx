import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState<number>(0);
  const counterCheck = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  return (
    <div>
      <p>Cups Ordered: {count}</p>
      {/* <button onClick={() => setCount((c) => c + 1)}>Order One More</button> */}
      <button onClick={counterCheck}>Order One More</button>
      <button onClick={() => setCount(0)}>Reset</button>
      {count >= 10 ? (
        <p>You have ordered {count} times</p>
      ) : (
        <p>You have ordered {count} times</p>
      )}
    </div>
  );
}
