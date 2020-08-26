import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      className=" search-box"
      placeholder="search..."
      value={value}
      onChange = { e => onChange(e.currentTarget.value) }
    />
  );
};

export default SearchBox;