import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [selectId, setSelectId] = useState(0);
  const data = [
    {
      id: 1,
      title: "data 1",
      content: "jkgvnjgv fvnrfvbjbnvf fvbfdbndfbjkdfnbd ffd vbdfjbndfb",
    },
    {
      id: 2,
      title: "data 2",
      content: "jkgvnjgv fvnrfvbjbnvf fvbfdbndfbjkdfnbd ffd vbdfjbndfb",
    },
    {
      id: 3,
      title: "data 3",
      content: "jkgvnjgv fvnrfvbjbnvf fvbfdbndfbjkdfnbd ffd vbdfjbndfb",
    },
  ];
  return (
    <>
      <div>
        {data.map((item) => (
          <div style={{ padding: "5px" }}>
            <div
              style={{
                background: "gray",
                display: "flex",
                justifyContent: "space-around",
              }}
              onClick={() => setSelectId(item.id)}
            >
              <span>{item.title}</span>
              <span>{item.id === selectId ? "-" : "+"}</span>
            </div>
            <div>{item.id === selectId && item.content}</div>
          </div>
        ))}
      </div>
    </>
  );
}
