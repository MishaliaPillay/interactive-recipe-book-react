// Filter.jsx

import React from 'react';

function Filter({ filterOptions, selectedFilter, onSelectFilter }) {
    return (
        <select value={selectedFilter} onChange={(e) => onSelectFilter(e.target.value)}>
            <option value="all">All</option>
            {filterOptions.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export default Filter;
