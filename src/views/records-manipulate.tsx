// Used for badges, todos, from records all those types

export default function App() {
  const [data, setData] = useState({ name: "", address: "" });
  const [records, setRecords] = useState(() => {
    const stored = localStorage.getItem("Records");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("Records", JSON.stringify(records));
  }, [records]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name || !data.address) return;

    setRecords((prev) => [...prev, data]);
    setData({ name: "", address: "" });
  };

  return (
    <div className="App">
      <h1>Hello Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Name"
        />

        <input
          type="text"
          name="address"
          value={data.address}
          onChange={handleChange}
          placeholder="Address"
        />

        <button type="submit">Add</button>
      </form>

      <div style={{ marginTop: "10px" }}>
        {records.map((item, index) => (
          <p key={index}>
            <strong>{item.name}</strong> — {item.address} -{" "}
            <span
              onClick={() =>
                setRecords((prev) => {
                  return prev.filter((_, id) => id != index);
                })
              }
            >
              X
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}
