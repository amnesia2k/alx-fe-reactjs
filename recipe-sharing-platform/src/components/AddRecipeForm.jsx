import { Controller, useForm } from "react-hook-form";

const AddRecipeForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Send the data to the server or perform any necessary actions
  };
  return (
    <div className="flex justify-center items-center h-screen max-w-3xl w-full mx-auto">
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Add New Recipe
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Recipe Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium">
              Recipe Title
            </label>
            <Controller
              name="title"
              control={control}
              rules={{ required: "Title is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  id="title"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter recipe title"
                />
              )}
            />
            {errors.title && (
              <span className="text-red-500 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label htmlFor="ingredients" className="block text-sm font-medium">
              Ingredients
            </label>
            <Controller
              name="ingredients"
              control={control}
              rules={{
                required: "Ingredients are required",
                minLength: {
                  value: 5,
                  message: "Ingredients list must have at least 5 items",
                },
              }}
              render={({ field }) => (
                <textarea
                  {...field}
                  id="ingredients"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="List your ingredients"
                />
              )}
            />
            {errors.ingredients && (
              <span className="text-red-500 text-sm">
                {errors.ingredients.message}
              </span>
            )}
          </div>

          {/* Preparation Steps */}
          <div>
            <label htmlFor="steps" className="block text-sm font-medium">
              Preparation Steps
            </label>
            <Controller
              name="steps"
              control={control}
              rules={{ required: "Preparation steps are required" }}
              render={({ field }) => (
                <textarea
                  {...field}
                  id="steps"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Describe how to prepare the dish"
                />
              )}
            />
            {errors.steps && (
              <span className="text-red-500 text-sm">
                {errors.steps.message}
              </span>
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
    </div>
  );
};

export default AddRecipeForm;
