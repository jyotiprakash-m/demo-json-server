# demo-json-server

## Overview

`json-server` is a simple and powerful tool that allows you to create a full fake REST API with zero coding in less than 30 seconds. It is perfect for prototyping, testing, and developing front-end applications.

## Installation

To install `json-server`, you can use npm:

```bash
npm install -g json-server
```

## Usage

1. Create a `db.json` file with your data structure. For example:

```json
{
  "users": [
    {
      "id": 1,
      "username": "johndoe",
      "email": "johndoe@example.com",
      "password": "password123",
      "first_name": "John",
      "last_name": "Doe",
      "created_at": "2024-08-07T12:00:00Z"
    }
  ],
  "recipes": [
    {
      "id": 1,
      "user_id": 1,
      "title": "Spaghetti Bolognese",
      "description": "A classic Italian pasta dish.",
      "prep_time": 15,
      "cook_time": 30,
      "total_time": 45,
      "servings": 4,
      "category_id": 1,
      "created_at": "2024-08-07T12:00:00Z",
      "updated_at": "2024-08-07T12:00:00Z"
    }
  ],
  "ingredients": [
    { "id": 1, "name": "Spaghetti" },
    { "id": 2, "name": "Ground Beef" },
    { "id": 3, "name": "Tomato Sauce" }
  ],
  "recipeIngredients": [
    { "id": 1, "recipe_id": 1, "ingredient_id": 1, "amount": "200g" },
    { "id": 2, "recipe_id": 1, "ingredient_id": 2, "amount": "500g" },
    { "id": 3, "recipe_id": 1, "ingredient_id": 3, "amount": "300ml" }
  ],
  "steps": [
    {
      "id": 1,
      "recipe_id": 1,
      "step_number": 1,
      "instruction": "Cook the spaghetti according to the package instructions."
    },
    {
      "id": 2,
      "recipe_id": 1,
      "step_number": 2,
      "instruction": "In a separate pan, cook the ground beef until browned."
    },
    {
      "id": 3,
      "recipe_id": 1,
      "step_number": 3,
      "instruction": "Add the tomato sauce to the beef and simmer for 10 minutes."
    }
  ],
  "categories": [{ "id": 1, "name": "Dinner" }],
  "reviews": [
    {
      "id": 1,
      "recipe_id": 1,
      "user_id": 1,
      "rating": 5,
      "comment": "Delicious and easy to make!",
      "created_at": "2024-08-07T12:00:00Z"
    }
  ]
}
```

2. Start the server by running:

```bash
npx json-server db.json --port 4000
```

3. Your API will be available at `http://localhost:4000`.

## API Endpoints

### Users

#### API Endpoints

- **_GET /users_**: Retrieve all users
- **_GET /users/:id_**: Retrieve a single user by ID
- **_POST /users_**: Create a new user
- **_PUT /users/:id_**: Update an existing user
- **_DELETE /users/:id_**: Delete a user

### Recipes

#### API Endpoints

- **_GET /recipes_**: Retrieve all recipes
- **_GET /recipes/:id_**: Retrieve a single recipe by ID
- **_POST /recipes_**: Create a new recipe
- **_PUT /recipes/:id_**: Update an existing recipe
- **_DELETE /recipes/:id_**: Delete a recipe

### Ingredients

#### API Endpoints

- **_GET /ingredients_**: Retrieve all ingredients
- **_GET /ingredients/:id_**: Retrieve a single ingredient by ID
- **_POST /ingredients_**: Create a new ingredient
- **_PUT /ingredients/:id_**: Update an existing ingredient
- **_DELETE /ingredients/:id_**: Delete an ingredient

### Recipe Ingredients

#### API Endpoints

- **_GET /recipeIngredients_**: Retrieve all recipe ingredients
- **_GET /recipeIngredients/:id_**: Retrieve a single recipe ingredient by ID
- **_POST /recipeIngredients_**: Create a new recipe ingredient
- **_PUT /recipeIngredients/:id_**: Update an existing recipe ingredient
- **_DELETE /recipeIngredients/:id_**: Delete a recipe ingredient

### Steps

#### API Endpoints

- **_GET /steps_**: Retrieve all steps
- **_GET /steps/:id_**: Retrieve a single step by ID
- **_POST /steps_**: Create a new step
- **_PUT /steps/:id_**: Update an existing step
- **_DELETE /steps/:id_**: Delete a step

### Categories

#### API Endpoints

- **_GET /categories_**: Retrieve all categories
- **_GET /categories/:id_**: Retrieve a single category by ID
- **_POST /categories_**: Create a new category
- **_PUT /categories/:id_**: Update an existing category
- **_DELETE /categories/:id_**: Delete a category

### Reviews

#### API Endpoints

- **_GET /reviews_**: Retrieve all reviews
- **_GET /reviews/:id_**: Retrieve a single review by ID
- **_POST /reviews_**: Create a new review
- **_PUT /reviews/:id_**: Update an existing review
- **_DELETE /reviews/:id_**: Delete a review

## Customization

You can customize the server behavior by using middleware or by modifying the `db.json` structure.

## Conclusion

`json-server` is a great tool for developers looking to quickly set up a mock API for testing and development purposes. For more information, visit the [json-server GitHub repository](https://github.com/typicode/json-server).

### Start Command

The command to start your app with each deploy using Cargo is:

```bash
cargo run
```
