// Fichero para el testeo

import {
  Dish,
  Category,
  Allergen,
  Menu,
  Restaurant,
  Coordinate,
  RestaurantsManager,
} from "./Fichero2.js";

import {
  BaseException,
  ParameterInvalidException,
  ExistsException,
  NoRegistryException,
} from "./Excepciones.js";

let restManager = RestaurantsManager.getInstance("nachoRestaurant");
console.log(restManager.systemName);
console.log("---------------");

let nueces = new Dish("Nueces", "Nueces", ["Nueces"]);
let boqueron = new Dish("Boqueron", "Boqueron con limon", [
  "Boqueron",
  "limon",
]);
let sardinas = new Dish("Sardinas", "Sardinas a la planca", ["Sardinas"]);
let macarrones = new Dish("Macarrones", "Macarrones con tomate", [
  "Macarrones",
  "Tomate",
]);
let kebab = new Dish("Kebab", "Kebab Mixto", [
  "Pan de pita",
  "Carne de Pollo",
  "Ensalada",
  "Huevo",
]);
let ensalada = new Dish("Ensalada", "Ensalada alineada", [
  "Lechuga",
  "Tomate",
  "Aceite",
  "Vinagre",
]);

let carne = new Category("Carne", "Carne");
let pescado = new Category("Pescado", "Pescado");
let verduras = new Category("Verduras", "Verduras");
let pasta = new Category("Pasta", "Pasta");
let frutosSecos = new Category("Frutos Secos", "Frutos secos");

let huevo = new Allergen("Huevo", "Alergia al Huevo");
let tomate = new Allergen("Tomate ", "Alergia al Tomate");
let pescadoAlergia = new Allergen("Pescado", "Alergia al pescado");
let frutosSecosAlergia = new Allergen(
  "Frutos Secos",
  "Alergia a los frutos secos"
);

let menuCarne = new Menu("Menu Carne", "Menu carnivoro");
let menuVegetariano = new Menu("Menu Vegano", "Menu para vegetariano");
let menuDeLaCasa = new Menu("Menu de la casa", "Menu especial");

let coordenadas = new Coordinate(72.1231, 96.768);
let coordenadas2 = new Coordinate(45.576, 12.121);

let nachoRestaurant = new Restaurant(
  "NachoRestaurant",
  "Restaurante",
  coordenadas
);
let ferniRestaurant = new Restaurant(
  "FerniRestaurant",
  "Restaurant",
  coordenadas2
);

function test() {
  // AÑADIMOS CATEGORIAS
  restManager.addCategory(carne, pescado, verduras, pasta, frutosSecos);
  // las recorremos
  console.log("**Categorias**");
  for (const category of restManager.getterCategories()) {
    console.log("Category: " + category.name);
  }

  // AÑADIMOS MENUS
  restManager.addMenu(menuCarne, menuVegetariano, menuDeLaCasa);
  // Lo recorremos
  console.log("**Menus**");
  for (const menu of restManager.getterMenus()) {
    console.log("Menu: " + menu.name);
  }

  // AÑADIMOS PLATOS
  restManager.addDish(nueces, boqueron, sardinas, macarrones, kebab, ensalada);
  // Lo recorremos
  console.log("**Platos**");
  for (const dish of restManager.getterDishes()) {
    console.log("Dish: " + dish.name);
  }
  // AÑADIMOS ALERGENOS
  restManager.addAllergen(huevo, tomate, pescadoAlergia, frutosSecosAlergia);
  // Lo recorremos
  console.log("**Alergenos**");
  for (const allergen of restManager.getterAllergens()) {
    console.log("Allergen: " + allergen.name);
  }

  // AÑADIMOS RESTAURANTES
  restManager.addRestaurant(nachoRestaurant, ferniRestaurant);
  // Lo recorremos
  console.log("**Restaurantes**");
  for (const restaurant of restManager.getterRestaurants()) {
    console.log("Restaurant: " + restaurant.name);
  }

  // ASIGNAMOS CATEGORIAS A PLATOS

  restManager.assignCategoryToDish(nueces, frutosSecos);
  restManager.assignCategoryToDish(boqueron, pescado);
  restManager.assignCategoryToDish(sardinas, pescado);
  restManager.assignCategoryToDish(macarrones, pasta);
  restManager.assignCategoryToDish(kebab, carne);
  restManager.assignCategoryToDish(ensalada, verduras);

  // ASIGNAMOS ALERGENOS

  restManager.assignAllergenToDish(nueces, frutosSecosAlergia);
  restManager.assignAllergenToDish(boqueron, pescado);
  restManager.assignAllergenToDish(sardinas, pescado);
  restManager.assignAllergenToDish(macarrones, tomate, huevo);
  restManager.assignAllergenToDish(kebab, huevo);
  restManager.assignAllergenToDish(ensalada, tomate, huevo);

  // ASIGNAMOS PLATOS AL MENU

  restManager.assignDishToMenu(menuCarne, sardinas, boqueron, kebab);
  restManager.assignDishToMenu(menuVegetariano, ensalada, macarrones, nueces);
  restManager.assignDishToMenu(menuDeLaCasa, sardinas, boqueron, kebab);
  console.log("---------------");

  // Platos que su categoría sea pescado
  for (const dish of restManager.getDishesInCategory(pescado)) {
    console.log("Plato con la categoria pescado: " + dish.name);
  }
  // Platos que su categoría sea carne
  for (const dish of restManager.getDishesInCategory(carne)) {
    console.log("Plato con la categoria carne: " + dish.name);
  }
  // Platos que su categoría sea pasta
  for (const dish of restManager.getDishesInCategory(pasta)) {
    console.log("Plato con la categoria pasta: " + dish.name);
  }
  // Platos que su categoría sea verduras
  for (const dish of restManager.getDishesInCategory(verduras)) {
    console.log("Plato con la categoria verduras: " + dish.name);
  }
  // Platos que su categoría sea frutos secos
  for (const dish of restManager.getDishesInCategory(frutosSecos)) {
    console.log("Plato con la categoria frutos secos: " + dish.name);
  }
  console.log("---------------");

  // HACEMOS LO MISMO PERO CON LAS ALERGIAS

  // Platos que su alergia es pescado
  for (const dish of restManager.getDishesWithAllergen(pescadoAlergia)) {
    console.log("Plato con las alergia al pescado: " + dish.name);
  }
  // Platos que su alergia es a los frutos secos
  for (const dish of restManager.getDishesWithAllergen(frutosSecosAlergia)) {
    console.log("Plato con las alergia a frutos Secos: " + dish.name);
  }
  // Platos que su alergia es tomate
  for (const dish of restManager.getDishesWithAllergen(tomate)) {
    console.log("Plato con las alergia al tomate: " + dish.name);
  }
  // Platos que su alergia es huevo
  for (const dish of restManager.getDishesWithAllergen(huevo)) {
    console.log("Plato con las alergia al huevo: " + dish.name);
  }

  // Vamos a eliminar platos,categorias etc y despues iteraremos en el array de nuevo para ver si se ha eliminado
  restManager.removeDish(sardinas, nueces);
  restManager.removeCategory(carne, verduras);
  restManager.removeAllergen(pescadoAlergia, frutosSecosAlergia);
  console.log("---------------");
  console.log("**Platos**");

  for (const dish of restManager.getterDishes()) {
    console.log("Dish: " + dish.name);
  }
  console.log("**Categorias**");
  for (const category of restManager.getterCategories()) {
    console.log("Category: " + category.name);
  }
  console.log("**Alergenos**");
  for (const allergen of restManager.getterAllergens()) {
    console.log("Allergen: " + allergen.name);
  }

  console.log("---------------");
  console.log("Platos del menu de la casa, desasignando sardinas");
  restManager.deassignDishToMenu(menuDeLaCasa, sardinas);

  for (const dish of restManager.getDishesInMenu(menuDeLaCasa)) {
    console.log(dish.name);
  }
  // Ahora cambiamos las posiciones
  console.log("-----CAMBIAMOS POSICIONES MENU-----");
  restManager.changeDishesPositionsInMenu(menuDeLaCasa, boqueron, kebab);
  for (const dish of restManager.getDishesInMenu(menuDeLaCasa)) {
    console.log(dish.name);
  }

  // AHORA QUITAMOS LA CATEGORIA DE UN PLATO
  console.log("---------------");
  restManager.deassignAllergenToDish(macarrones, tomate);
  // Platos que su alergia es tomate
  for (const dish of restManager.getDishesWithAllergen(tomate)) {
    console.log("Plato con las alergia al tomate: " + dish.name);
  }

  // COMO HEMOS BORRADO LA ENSALADA VAMOS A CREARLA CON LOS METODOS CREATE

  restManager.createDish("Ensalada", "Ensalada alineada", [
    "Lechuga",
    "Tomate",
    "Aceite",
    "Vinagre",
  ]);

  // Y EFECTIVAMENTE VUELVE A ESTAR
  console.log("**Platos**");
  for (const dish of restManager.getterDishes()) {
    console.log("Dish: " + dish.name);
  }

  let newDish = restManager.createDish("Ensalada", "Ensalada alineada", [
    "Lechuga",
    "Tomate",
    "Aceite",
    "Vinagre",
  ]);

  console.log(newDish.name);
}

test();
