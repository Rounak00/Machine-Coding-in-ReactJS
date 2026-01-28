import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [page, setPage] = useState(1);

  const data = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

  const contentPerPage = 2;

  // slice logic
  const startIndex = (page - 1) * contentPerPage;
  const endIndex = startIndex + contentPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / contentPerPage);

  return (
    <>
      <h3>Pagination using slice</h3>

      {currentData.map((item, index) => (
        <div key={index}>{item}</div>
      ))}

      <br />

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>

      <span style={{ margin: "0 10px" }}>
        Page {page} of {totalPages}
      </span>

      <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </>
  );
}
