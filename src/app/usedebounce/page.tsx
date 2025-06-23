import React, { useState, useEffect } from "react";
import useDebounce from "./components/useDebounce";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500); // wait 500ms after user stops typing

  useEffect(() => {
    if (debouncedQuery.trim()) {
      console.log("Search for:", debouncedQuery);
      // Make API call here
    }
  }, [debouncedQuery]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Type to search..."
    />
  );
};

export default SearchComponent;
