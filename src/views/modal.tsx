import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div>
        Hello This is the Page
        <button style={{ padding: "5px" }} onClick={() => setModal(true)}>
          Press
        </button>
      </div>
      {modal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            zIndex: 99,
            background: "rgba(200,200,200,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setModal(false)}
        >
          <div
            style={{
              background: "white",
            }}
          >
            <p>
              dsk;lvnsfdjkgbnrsj sdfvbklsfbnrfjkvbfv sdv sdvujsbvsdr vsdvsdb
            </p>
            <button
              onClick={(e) => {
                e.preventDefault;
                setModal(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
