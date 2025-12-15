import { useState } from "react";

export default function ProductCard() {

  const[count, setCount] = useState(0);

  function incrementar() {
    setCount(count + 1);
  }


return (
    <div style={{ padding: 20, border: '1px solid #ccc' }}>
      <h2>Producto desde Remote</h2>
      <button onClick={incrementar}>Totales: {count}</button>
    </div>
)
}