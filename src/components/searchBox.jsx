import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="search-container">
    <div className="search-box">
      <input
        type="text"
        name="query"
        className=""
        placeholder="search your favourite plant..."
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
    </div>
  );
};

export default SearchBox;