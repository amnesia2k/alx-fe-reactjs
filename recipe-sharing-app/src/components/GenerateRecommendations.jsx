import useRecipeStore from "./recipeStore";

const GenerateRecommendations = () => {
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  return (
    <button
      onClick={generateRecommendations}
      style={{
        marginBottom: "20px",
        padding: "10px",
        backgroundColor: "#007bff",
        color: "#fff",
      }}
    >
      Generate Recommendations
    </button>
  );
};

export default GenerateRecommendations;
