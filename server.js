import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

const server = jsonServer.create();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Custom route
server.get("/recipes/:id/details", (req, res) => {
  const recipeId = parseInt(req.params.id, 10);
  const db = router.db; // lowdb instance

  const recipe = db.get("recipes").find({ id: recipeId }).value();
  if (!recipe) {
    res.status(404).send({ error: "Recipe not found" });
    return;
  }

  const user = db.get("users").find({ id: recipe.user_id }).value();
  const category = db
    .get("categories")
    .find({ id: recipe.category_id })
    .value();
  const ingredients = db
    .get("recipeIngredients")
    .filter({ recipe_id: recipeId })
    .map((ri) => {
      const ingredient = db
        .get("ingredients")
        .find({ id: ri.ingredient_id })
        .value();
      return {
        id: ri.id,
        recipe_id: ri.recipe_id,
        ingredient_id: ri.ingredient_id,
        amount: ri.amount,
        ingredient: ingredient,
      };
    })
    .value();
  const steps = db.get("steps").filter({ recipe_id: recipeId }).value();
  const reviews = db.get("reviews").filter({ recipe_id: recipeId }).value();

  const result = {
    ...recipe,
    user,
    category,
    ingredients,
    steps,
    reviews,
  };

  res.json(result);
});

server.use(router);
server.listen(process.env.PORT || 3000, () => {
  console.log(`JSON Server is running on port ${process.env.PORT || 3000}`);
});
