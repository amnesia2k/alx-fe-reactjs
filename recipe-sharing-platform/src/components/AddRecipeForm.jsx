import { useState } from "react";

const AddRecipeForm = () => {
  // State for form fields and errors
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.ingredients)
      newErrors.ingredients = "Ingredients are required";
    if (!formData.steps) newErrors.steps = "Preparation steps are required";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully:", formData);
      // Submit data to API or handle the form data
      setFormData({ title: "", ingredients: "", steps: "" }); // Reset the form
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Add New Recipe
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <span className="text-red-500 text-sm">{errors.title}</span>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="List your ingredients"
          />
          {errors.ingredients && (
            <span className="text-red-500 text-sm">{errors.ingredients}</span>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label htmlFor="steps" className="block text-sm font-medium">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Describe how to prepare the dish"
          />
          {errors.steps && (
            <span className="text-red-500 text-sm">{errors.steps}</span>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
