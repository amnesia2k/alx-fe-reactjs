import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeItem = ({ recipe }) => {
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  const isFavorite = favorites.includes(recipe.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div
      style={{
        marginBottom: "15px",
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <Link to={`/recipe/${recipe.id}`}>
        <h3>{recipe.title}</h3>
      </Link>
      <p>{recipe.description}</p>
      <button onClick={handleFavoriteToggle} style={{ marginTop: "10px" }}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
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
