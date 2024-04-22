import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard"; // Import the RecipeCard component
import "./RecipeLinks.css";

function RecipeLinks({
  recipes,
  searchQuery,
  filterValue,
  toggleLike,
  likedRecipes,
  showOnlyLiked,
}) {
  // Extract the recipes array from the recipes object
  const recipesArray = recipes.recipes;

  // Filter recipes based on the search query, filter value, and whether the recipe is liked
  const filteredRecipes = recipesArray.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterValue === "all" ||
        recipe.tags.includes(filterValue) ||
        recipe.mealType.includes(filterValue)) &&
      (!showOnlyLiked || likedRecipes.includes(recipe.id)) // Consider whether to show only liked recipes
  );

  //Checks whether a user has opened a recipe and closes other open recipes - so that one recipe is opened at a time.
  const [openRecipeId, setOpenRecipeId] = useState(null);
  useEffect(() => {
    setOpenRecipeId(null);
  }, [filterValue]);

  //The recipe name is the link to the recipe and when the name is clicked it toggles the rest of the recipes visibility -opens and closes the recipe container
  const toggleRecipe = (recipeId) => {
    setOpenRecipeId(openRecipeId === recipeId ? null : recipeId);
  };

  return (
    <>
      <h1 className="title">Recipes</h1>
      <ul>
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isOpen={openRecipeId === recipe.id}
            toggleRecipe={toggleRecipe}
            toggleLike={toggleLike} likedRecipes={likedRecipes}
          />
        ))}
      </ul>
    </>
  );
}

export default RecipeLinks;
