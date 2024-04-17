import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ChefHatImage from './ChefHat.png';
import SearchBar from '../SerachBar/SearchBar';
import Filter from '../Fliter';
import { List, X, Heart , ArrowLeft} from '@phosphor-icons/react'; // Import Phosphor icons

function Header({ setSearchQuery, filterValue, setFilterValue, onSelectFilter, toggleLikedRecipes, toggleShowAll }){
    const filterOptions = ['Breakfast', "Dinner", "Lunch", 'Dessert', 'Keto', 'Vegan', 'Vegetarian'];
    const [isMenuVisible, setIsMenuVisible] = useState(false); // State to toggle menu visibility

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
        // Toggle search bar visibility
        const searchBar = document.querySelector('.searchbar');
        if (searchBar) {
            searchBar.classList.toggle('showSearchBar');
        }
    };


    return (
        <header className={`Header ${isMenuVisible ? 'menuVisible' : ''}`}>
            <div className="HeaderContainer">
                <Link to="/" className="HeaderLink">
                    <img className="HeaderPhoto" src={ChefHatImage} alt="chef hat" />
                    <span className="HeaderText">Whisked Away</span>
                </Link>

                <section className={`menuToggle ${isMenuVisible ? 'hide' : ''}`} onClick={toggleMenu}>
                    <List size={32} />
                </section>

                <section className='filter'>
                    <Filter filterOptions={filterOptions} filterValue={filterValue} setFilterValue={setFilterValue} onSelectFilter={onSelectFilter} />
                </section>

                <section className={`searchbar ${isMenuVisible ? 'showSearchBar' : ''}`}>
                    <SearchBar setSearchQuery={setSearchQuery} />
                </section>

                <button className="likedButton" onClick={toggleLikedRecipes}>
                  Favorites
                    <Heart size={24} />
                </button>
<button className="likedButton" onClick={toggleShowAll}>All<ArrowLeft size={24} weight="bold" /></button>
                <section className={`closeButton ${!isMenuVisible ? 'hide' : ''}`} onClick={toggleMenu}>
                    <X size={32} />
                </section>
            </div>
        </header>
    );
}

export default Header;
