import React, { useState } from 'react';
import { Heart } from '@phosphor-icons/react';

function RecipeCard({ recipe, isOpen, toggleRecipe, toggleLike }) {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
        toggleLike(recipe.id);
    };

    return (
        <li className='recipeCtn' key={recipe.id}>
           <section> <img src={recipe.image} alt={recipe.name} className='recipeIcons' />
            <button className='recipeBtn' onClick={() => toggleRecipe(recipe.id)}>
                {recipe.name}
                
            </button><button className='heartBtn'>
               
                <Heart size={32} weight={liked ? "fill" : "regular"} onClick={handleLike} />
            </button></section>
            {isOpen && (
                <div>
                    <img src={recipe.image} alt={recipe.name} style={{ maxWidth: '300px' }} />
                    <h3>Ingredients:</h3>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h3>Instructions:</h3>
                    <ol>
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
                    <p>Prep Time: {recipe.prepTimeMinutes} minutes</p>
                    <p>Cook Time: {recipe.cookTimeMinutes} minutes</p>
                    <p>Servings: {recipe.servings}</p>
                    <p>Difficulty: {recipe.difficulty}</p>
                    <p>Cuisine: {recipe.cuisine}</p>
                    <p>Calories Per Serving: {recipe.caloriesPerServing}</p>
                    <p className='tags'>Tags: {recipe.tags.join(', ')}</p>
                    <p>Rating: {recipe.rating}</p>
                    <p>Review Count: {recipe.reviewCount}</p>
                    <p>Meal Type: {recipe.mealType.join(', ')}</p>
                </div>
            )}
        </li>
    );
}

export default RecipeCard;
