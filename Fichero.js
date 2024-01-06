class Dish {
  #name;
  #description;
  #ingredients;
  #image;
  constructor(name, description, ingredients, image) {
    this.#name = name;
    this.#description = description;
    this.#ingredients = ingredients;
    this.#image = image;
  }
  get name() {
    return this.#name;
  }
  get description() {
    return this.#description;
  }
  get ingredients() {
    return this.#ingredients;
  }
  get image() {
    return this.#image;
  }
  set name(newName) {
    this.#name = newName;
  }
}

class Category {
  #name;
  #description;

  constructor(name, description) {
    this.#name = name;
    this.#description = description;
  }
  get name() {
    return this.#name;
  }
  get description() {
    return this.#description;
  }
  set name(newName) {
    this.#name = newName;
  }
}

class Allergen {
  #name;
  #description;

  constructor(name, description) {
    this.#name = name;
    this.#description = description;
  }
  get name() {
    return this.#name;
  }
  get description() {
    return this.#description;
  }
  set name(newName) {
    this.#name = newName;
  }
}

class Menu {
  #name;
  #description;

  constructor(name, description) {
    this.#name = name;
    this.#description = description;
  }
  get name() {
    return this.#name;
  }
  get description() {
    return this.#description;
  }
  set name(newName) {
    this.#name = newName;
  }
}

class Restaurant {
  #name;
  #description;
  #location;

  constructor(name, description, location) {
    this.#name = name;
    this.#description = description;
    this.#location = location;
  }
  get name() {
    return this.#name;
  }
  get description() {
    return this.#description;
  }
  get location() {
    return this.#location;
  }
  set name(newName) {
    this.#name = newName;
  }
}
class Coordinate {
  #latitude;
  #longitude;
  constructor(latitude, longitude) {
    this.#latitude = latitude;
    this.#longitude = longitude;
  }
  get latitude() {
    return this.#latitude;
  }
  get longitude() {
    return this.#longitude;
  }
}

class RestaurantsManager {
  #systemName;
  #categories;
  #allergens;
  #dishes;
  #menus;
  #restaurants;

  constructor(systemName) {
    this.#systemName = systemName;
    this.#categories = [];
    this.#allergens = [];
    this.#dishes = [];
    this.#menus = [];
    this.#restaurants = [];
  }

  getterDishes() {
    let iterador = this.#dishes[Symbol.iterator]();
    return iterador;
  }

  getterCategories() {
    let iterador = this.#categories[Symbol.iterator]();
    return iterador;
  }
  getterMenus() {
    let iterador = this.#menus[Symbol.iterator]();
    return iterador;
  }
  getterAllergens() {
    let iterador = this.#allergens[Symbol.iterator]();
    return iterador;
  }
  getterRestaurants() {
    let iterator = this.#restaurants[Symbol.iterator]();
    return iterator;
  }
  addCategory(...Categories) {
    for (const category of Categories) {
      this.#categories.push(category);
    }
  }
  removeCategory(...Categories) {
    for (const category of Categories) {
      let index = this.#categories.indexOf(category);
      if (index != -1) {
        this.#categories.splice(index, 1);
      }
    }
  }
  addMenu(...Menus) {
    for (const menu of Menus) {
      this.#menus.push(menu);
    }
  }
  removeMenu(...Menus) {
    for (const menu of Menus) {
      let index = this.#menus.indexOf(menu);
      if (index != -1) {
        this.#menus.splice(index, 1);
      }
    }
  }
  addAllergen(...Allergens) {
    for (const allergen of Allergens) {
      this.#allergens.push(allergen);
    }
  }
  removeAllergen(...Allergens) {
    for (const allergen of Allergens) {
      let index = this.#allergens.indexOf(allergen);
      if (index != -1) {
        this.#allergens.splice(index, 1);
      }
    }
  }
  addDish(...Dishes) {
    for (const dish of Dishes) {
      this.#dishes.push(dish);
    }
  }
  removeDish(...Dishes) {
    for (const dish of Dishes) {
      let index = this.#dishes.indexOf(dish);
      if (index != -1) {
        this.#dishes.splice(index, 1);
      }
    }
  }
  addRestaurant(...Restaurants) {
    for (const restaurant of Restaurants) {
      this.#restaurants.push(restaurant);
    }
  }
  removeDish(...Restaurants) {
    for (const restaurant of Restaurants) {
      let index = this.#restaurants.indexOf(restaurant);
      if (index != -1) {
        this.#restaurants.splice(index, 1);
      }
    }
  }
}

let a = new Dish("hola", 2, 3, 4);
console.log(a.name);
a.name = "aa";
console.log(a.name);
