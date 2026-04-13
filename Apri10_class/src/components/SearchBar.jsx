import React from 'react';

const SearchBar = ({ search, setSearch }) => {
  function findEmploy(event) {
    setSearch(event.target.value)
  }

  return (
    <input
      type="text"
      value={search}
      onChange={findEmploy}
      placeholder="Search employees..."
    />
  );
};

export default SearchBar;
