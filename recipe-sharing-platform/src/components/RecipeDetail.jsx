import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import recipeData from "../data.json"


const RecipeDetail = () => {

  const [recipeDetails, setRecipeDetails] = useState(null)

  const {id} = useParams()

  useEffect(() => {
    const recipe = recipeData.find((e) => e.id === parseInt(id, 10))
    setRecipeDetails(recipe)
  }, [id])

  if (!recipeDetails) {
    return (
      <div className="container mx-auto text-center py-10">
        <p className="text-lg text-gray-500">Recipe not found!</p>
      </div>
    );
  }

  return (
 <div className="container mx-auto p-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={recipeDetails.image}
          alt={recipeDetails.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">{recipeDetails.title}</h1>
          <p className="text-gray-600 mt-4">{recipeDetails.summary}</p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            {recipeDetails.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700 mt-2">
            {recipeDetails.instructions?.map((step, index) => (
              <li key={index} className="mt-1">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail