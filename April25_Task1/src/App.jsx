import { useState, useEffect } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    const res = await fetch(
      `https://demo.dataverse.org/api/search?q=${debouncedSearch}`
    );
    const data = await res.json();
    setData(data.data.items);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timeout);
  }, [search]);

  useEffect(() => {
    if (debouncedSearch) {
      fetchApi();
    }
  }, [debouncedSearch]);

  return (
    <>
      <h1>Debouncing</h1>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;