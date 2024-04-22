// SearchBar.jsx
import { MagnifyingGlass } from "@phosphor-icons/react";
import React from "react";
import "./SearchBar.css";
function SearchBar({ setSearchQuery }) {
  //takes the value of the input field, and call searchquery function
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase()); // Pass the lowercase search query to the parent component
  };

  return (
    <section className="searchCtn">
      {" "}
      <MagnifyingGlass margin={20} weight="bold" color="#FFB534" size={20} />
      <input
        className="search"
        type="text"
        placeholder="Search recipes..."
        onChange={handleSearch}
      />
    </section>
  );
}

export default SearchBar;
