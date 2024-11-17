import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [], // All recipes
  searchTerm: "", // Current search term
  filteredRecipes: [], // Recipes filtered by search term
  favorites: [], // List of favorite recipe IDs
  recommendations: [], // List of recommended recipes

  // Add a new recipe to the store
  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      const filtered = updatedRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return { recipes: updatedRecipes, filteredRecipes: filtered };
    }),

  // Set (initialize or replace) the recipes
  setRecipes: (recipes) =>
    set(() => ({
      recipes,
      filteredRecipes: recipes, // Default to all recipes initially
    })),

  // Update the search term and filter recipes based on it
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),

  // Delete a recipe from the store (and from favorites if applicable)
  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      const filtered = updatedRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      const updatedFavorites = state.favorites.filter(
        (favoriteId) => favoriteId !== id
      ); // Remove the recipe from favorites
      return {
        recipes: updatedRecipes,
        filteredRecipes: filtered,
        favorites: updatedFavorites,
      };
    }),

  // Update a specific recipe's data
  updateRecipe: (id, updatedData) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedData } : recipe
      );
      const filtered = updatedRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return { recipes: updatedRecipes, filteredRecipes: filtered };
    }),

  // Add a recipe to the favorites list
  addFavorite: (recipeId) =>
    set((state) => {
      if (!state.favorites.includes(recipeId)) {
        return { favorites: [...state.favorites, recipeId] };
      }
      return state; // Avoid duplicate entries
    }),

  // Remove a recipe from the favorites list
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Generate personalized recipe recommendations based on favorites
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter((recipe) =>
        state.favorites.includes(recipe.id)
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
