import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeItem = ({ recipe }) => {
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  // Check if the recipe is in favorites
  const isFavorite = favorites.includes(recipe.id);

  const handleFavoriteToggle = () => {
    isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id);
  };

  return (
    <div
      style={{
        marginBottom: "15px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        backgroundColor: isFavorite ? "#f9f9f9" : "#fff",
      }}
    >
      <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: "none" }}>
        <h3 style={{ color: "#333" }}>{recipe.title}</h3>
      </Link>
      <p style={{ marginBottom: "10px" }}>{recipe.description}</p>
      <button
        onClick={handleFavoriteToggle}
        style={{
          padding: "5px 10px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: isFavorite ? "#ff6464" : "#007bff",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div style={{ padding: "10px" }}>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <p>No recipes available. Add one!</p>
      )}
    </div>
  );
};

export default RecipeList;
