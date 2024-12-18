import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RecipeDetails from "./components/RecipeDetails";
import Layout from "./Layout";
import AddRecipeForm from "./components/AddRecipeForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} />
      <Route path="add-recipe" element={<AddRecipeForm />} />
      <Route path="recipe/:recipeId" element={<RecipeDetails />} />
    </>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
