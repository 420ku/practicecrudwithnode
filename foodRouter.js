import { Router } from "express";
import foodController from "../controllers/foodController.js";

const foodRouter = Router();

foodRouter.get("/", async (req, res) => {
  const result = await foodController.getFoods();
  res.status(200).json(result);
});

foodRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await foodController.getFoodsById(id);

  res.status(result.statusCode).json(result.data);
});

foodRouter.get("/food/:type", async (req, res) => {
  try {
    const { type } = req.params;

    const result = await foodController.getFoodsByType(type);
    console.log(result);

    res.status(result.statusCode).json(result.data);
  } catch (error) {
    console.error(error);
  }
});

foodRouter.post("/add", async (req, res) => {
  const result = await foodController.addRecipe(req.body);
  res.status(result.statusCode).json(result.data);
});

foodRouter.post("/ingredients/:recipeId", async (req, res) => {
  try {
    const result = await foodController.addIngredientsToRecipe(
      req.params.recipeId,
      req.body.name,
      req.body.quantity,
      req.body.condition
    );

    res.status(result.statusCode).json(result.data);
  } catch (error) {
    console.error(error);
  }
});

foodRouter.patch("/edit/:recipeId", async (req, res) => {
  try {
    const result = await foodController.editRecipe(
      req.params.recipeId,
      req.body.name,
      req.body.type,
      req.body.instructions
    );
    res.status(result.statusCode).json(result.data);
  } catch (error) {
    console.error(error);
  }
});

foodRouter.patch("/editingredient/:recipeId", async (req, res) => {
  try {
    const result = await foodController.editIngredientsByRecipe(
      req.params.recipeId,
      req.body.name,
      req.body.quantity,
      req.body.condition
    );

    res.status(result.statusCode).json(result.data);
  } catch (error) {
    console.error(error);
  }
});

foodRouter.delete("/removeingredient/:ingredientId", async (req, res) => {
  const result = await foodController.removeIngredient(req.params.ingredientId);
  res.status(result.statusCode).json(result.data);
});

foodRouter.delete("/removerecipewithingredient/:recipeId", async (req, res) => {
  const result = await foodController.removeRecipeWithIngredients(
    req.params.recipeId
  );
  res.status(result.statusCode).json(result.data);
});

export default foodRouter;
