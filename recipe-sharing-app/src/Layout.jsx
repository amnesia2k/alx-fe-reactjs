import { Outlet, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";

import RecommendationsList from "./components/RecommendationsList";
// import GenerateRecommendations from "./components/GenerateRecommendations";
// import FavoritesList from "./components/FavouritesList";

const Layout = () => {
  return (
    <div>
      <header>
        <h1>Recipe Sharing App</h1>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "15px" }}>
            Home
          </Link>
          <Link to="/add-recipe" style={{ marginRight: "15px" }}>
            Add Recipe
          </Link>
        </nav>
      </header>
      <main>
        <section>
          <AddRecipeForm />
          <SearchBar />
        </section>
        <section>{/* <FavoritesList /> */}</section>
        <section>
          {/* <GenerateRecommendations /> */}
          <RecommendationsList />
        </section>
        <section>
          <RecipeList />
        </section>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
