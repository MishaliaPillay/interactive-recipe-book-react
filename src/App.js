import React, { useState } from 'react';
import RecipeLinks from './Components/RecipeLinks/RecipeLinks';
import Header from './Components/Header/Header';
import recipesData from "./Components/Data";
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterValue, setFilterValue] = useState('all');
    const [likedRecipes, setLikedRecipes] = useState([]);
    const [showOnlyLiked, setShowOnlyLiked] = useState(false); // State to track whether to show only liked recipes

    const onSelectFilter = (value) => {
        setFilterValue(value);
    };

    const toggleLike = (recipeId) => {
        if (likedRecipes.includes(recipeId)) {
            // If the recipe is already liked, remove it from likedRecipes
            const updatedLikedRecipes = likedRecipes.filter(id => id !== recipeId);
            setLikedRecipes(updatedLikedRecipes);
        } else {
            // If the recipe is not liked, add it to likedRecipes
            setLikedRecipes([...likedRecipes, recipeId]);
        }
    };

    const toggleShowOnlyLiked = () => {
        // Toggle the state variable to show only liked recipes or all recipes
        setShowOnlyLiked(!showOnlyLiked);
    };
    const toggleShowAll = () => {
        setShowOnlyLiked(false); // Set showOnlyLiked to false to show all recipes
    };
    
    return (
        <BrowserRouter>
            <Header
                setSearchQuery={setSearchQuery}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
                onSelectFilter={onSelectFilter}
                toggleLikedRecipes={toggleShowOnlyLiked} 
                showOnlyLiked={showOnlyLiked} /// Pass toggleShowOnlyLiked as toggleLikedRecipes to Header component
                toggleShowAll={toggleShowAll}
            />
            <Routes>
                <Route path="/" element={<RecipeLinks recipes={recipesData} searchQuery={searchQuery} filterValue={filterValue} likedRecipes={likedRecipes} toggleLike={toggleLike} showOnlyLiked={showOnlyLiked} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
