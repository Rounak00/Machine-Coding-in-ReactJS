import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [inp, setInp] = useState("");

  const data = ["Ghost", "sala khadoos", "loru", "Akem", "Gun", "Item"];

  const showData = data.filter((item) =>
    item.toLowerCase().includes(inp.toLowerCase())
  );
  return (
    <>
      <input type="text" value={inp} onChange={(e) => setInp(e.target.value)} />
      <div style={{ padding: "10px" }}>
        {showData.map((it) => (
          <p>{it}</p>
        ))}
      </div>
    </>
  );
}
