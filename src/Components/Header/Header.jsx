import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ChefHatImage from "./ChefHat.png";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Fliter";
import { Heart, ArrowLeft } from "@phosphor-icons/react"; // Import Phosphor icons

function Header({
  setSearchQuery,
  filterValue,
  setFilterValue,
  onSelectFilter,
  toggleLikedRecipes,
  toggleShowAll,
}) {
  const filterOptions = [
    "Breakfast",
    "Dinner",
    "Lunch",
    "Dessert",
    "Keto",
    "Vegan",
    "Vegetarian",
  ];

  return (
    <header className="Header">
      <div className="HeaderContainer">
        <Link to="/" className="HeaderLink">
          <img className="HeaderPhoto" src={ChefHatImage} alt="chef hat" />
          <span className="HeaderText">Whisked Away</span>
        </Link>

        {/* Filter and SearchBar (conditionally rendered on larger screens) */}
        <nav className={`nav ${window.innerWidth > 700 ? "" : "hide"}`}>
          <section className="filter">
            <Filter
              filterOptions={filterOptions}
              filterValue={filterValue}
              setFilterValue={setFilterValue}
              onSelectFilter={onSelectFilter}
            />
          </section>
          <section className="searchbar">
            <SearchBar setSearchQuery={setSearchQuery} />
          </section>
        </nav>

        <div className={`actions ${window.innerWidth > 700 ? "hide" : ""}`}>
          <button className="likedButton" onClick={toggleLikedRecipes}>
            Favorites
            <Heart size={24} />
          </button>
          <button className="likedButton" onClick={toggleShowAll}>
            All
            <ArrowLeft size={24} weight="bold" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
