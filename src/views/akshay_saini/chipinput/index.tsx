import React, { useState } from "react";
import "./styles.css";

function ChipsInput() {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [idCounter, setIdCounter] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      const newChip = {
        id: idCounter,
        label: inputValue.trim(),
      };
      setChips([...chips, newChip]);
      setIdCounter(idCounter + 1);
      setInputValue("");
    }
  };

  const handleDeleteChip = (idToDelete) => {
    setChips(chips.filter((chip) => chip.id !== idToDelete));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
      />
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {chips.map((chip) => (
          <div
            key={chip.id}
            style={{
              display: "flex",
              alignItems: "center",
              margin: "5px",
              backgroundColor: "lightgray",
              borderRadius: "20px",
              padding: "5px 10px",
            }}
          >
            <span>{chip.label}</span>
            <button
              onClick={() => handleDeleteChip(chip.id)}
              style={{
                background: "transparent",
                border: "none",
                marginLeft: "8px",
                cursor: "pointer",
                color: "red",
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
