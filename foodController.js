import foodModel from "../model/foodModel.js";

const foodController = {
  getFoods: async function () {
    return await foodModel.getFoods();
  },

  getFoodsById: async function (recipeId) {
    try {
      const result = await foodModel.getFoodsById(recipeId);

      if (result.length === 1) {
        return { statusCode: 200, data: result[0] };
      }
      return { statusCode: 404, data: "no result found" };
    } catch (error) {
      return { statusCode: 404, data: error.message };
    }
  },

  getFoodsByType: async function (type) {
    try {
      const result = await foodModel.getFoodsByType(type);
      console.log(result);
      if (result.length > 0) {
        console.log(result);
        return { statusCode: 200, data: result };
      }
      return { statusCode: 404, data: "No results found for the given type" };
    } catch (error) {
      return { statusCode: 500, data: error.message };
    }
  },

  addRecipe: async (body) => {
    try {
      const result = await foodModel.addRecipe(body);
      return { statusCode: 201, data: result[0] };
    } catch (error) {
      return { statusCode: 400, data: error.message };
    }
  },

  addIngredientsToRecipe: async function (recipeId, name, quantity, condition) {
    try {
      const result = await foodModel.addIngredientsToRecipe(
        recipeId,
        name,
        quantity,
        condition
      );
      if (result.length === 1) {
        return { statusCode: 201, data: result };
      }
      return { statusCode: 404, data: "ID does not exist" };
    } catch (error) {
      return { statusCode: 404, data: error.message };
    }
  },

  editRecipe: async function (recipeId, name, type, instructions) {
    try {
      const result = await foodModel.editRecipe(
        recipeId,
        name,
        type,
        instructions
      );
      if (result.length === 1) {
        return { statusCode: 201, data: result[0] };
      }
      return { statusCode: 404, data: "ID does not exist" };
    } catch (error) {
      return { statusCode: 404, data: error.message };
    }
  },

  editIngredientsByRecipe: async function (
    recipeId,
    name,
    quantity,
    condition
  ) {
    try {
      const result = await foodModel.editIngredientsByRecipe(
        recipeId,
        name,
        quantity,
        condition
      );
      if (result.length > 0) {
        return { statusCode: 201, data: result[0] };
      }
      return { statusCode: 404, data: "ID does not exist" };
    } catch (error) {
      return { statusCode: 404, data: error.message };
    }
  },

  removeIngredient: async function (ingredientId) {
    try {
      const result = await foodModel.removeIngredient(ingredientId);
      if (result.length === 1) {
        return { statusCode: 200, data: result[0] };
      }
      return { statusCode: 404, data: "ID does not exist" };
    } catch (error) {
      return { statusCode: 400, data: error.message };
    }
  },

  removeRecipeWithIngredients: async function (recipeId) {
    try {
      const result = await foodModel.removeRecipeWithIngredients(recipeId);
      if (result.length === 1) {
        return { statusCode: 200, data: result[0] };
      }
      return { statusCode: 404, data: "ID does not exist" };
    } catch (error) {
      return { statusCode: 400, data: error.message };
    }
  },
};
export default foodController;
