import React, { useEffect, useState } from "react";
import recipeData from '../data.json'

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // fetch(recipeData)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error("Error:", error));
    setRecipes(recipeData)
  }, []);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">
        Recipe Sharing Platform
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{recipe.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{recipe.summary}</p>
              <a
                href={`/recipe/${recipe.id}`}
                className="block mt-4 text-blue-500 hover:underline"
              >
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
