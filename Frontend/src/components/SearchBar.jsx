import { useState } from "react";

export default function SearchBar({ setQuery }) {
  const [text, setText] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setText(value);
    setQuery(value);
  };

  return (
    <input
      className="input w-full md:w-[400px]"
      placeholder="🔍 Search by blog title, tags or category"
      value={text}
      onChange={handleSearch}
    />
  );
}