// Filter.jsx

import React from "react";
import "./filter.css";
function Filter({ filterOptions, selectedFilter, onSelectFilter }) {
  return (
    <select className="item"
      value={selectedFilter}
      onChange={(e) => onSelectFilter(e.target.value)}
    >
      <option className="option" value="all">All</option>
      {filterOptions.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Filter;
