// Implementacion Antigua, La nueva esta en Fichero2.js
/*
class Dish {
  #name;
  #description;
  #ingredients;
  #image;
  #Categories;
  #Allergens;

  constructor(name, description, ingredients, image) {
    this.#name = name;
    this.#description = description;
    this.#ingredients = ingredients;
    this.#image = image;
    this.#Categories = [];
    this.#Allergens = [];
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
  get Categories() {
    return this.#Categories;
  }
  get Allergens() {
    return this.#Allergens;
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
  #Dishes;

  constructor(name, description) {
    this.#name = name;
    this.#description = description;
    this.#Dishes = [];
  }
  get name() {
    return this.#name;
  }
  get description() {
    return this.#description;
  }
  get Dishes() {
    return this.#Dishes;
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
let RestaurantsManager = (function () {
  let instance;

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

    get systemName() {
      return this.#systemName;
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
    removeRestaurant(...Restaurants) {
      for (const restaurant of Restaurants) {
        let index = this.#restaurants.indexOf(restaurant);
        if (index != -1) {
          this.#restaurants.splice(index, 1);
        }
      }
    }
    assignCategoryToDish(dish, ...Categories) {
      // Si el plato no esta en el sistema lo introducimos
      if (!this.#dishes.includes(dish)) {
        this.#dishes.push(dish);
      }
      // Si las categorias no estan en el sistema las introducimos
      for (const category of Categories) {
        if (!this.#categories.includes(category)) {
          this.#categories.push(category);
        }
      }
      // Ahora asignamos las categorias al plato
      for (const category of Categories) {
        if (!dish.Categories.includes(category)) {
          dish.Categories.push(category);
        }
      }
    }
    deassignCategoryToDish(dish, ...Categories) {
      for (const category of Categories) {
        // Conseguimos el indice
        let index = dish.Categories.indexOf(category);
        if (!index == -1) {
          dish.Categories.splice(index, 1);
        }
      }
    }
    // Igual pero para las alergias
    assignAllergenToDish(dish, ...Allergens) {
      // Si el plato no esta en el sistema lo introducimos
      if (!this.#dishes.includes(dish)) {
        this.#dishes.push(dish);
      }
      // Si las categorias no estan en el sistema las introducimos
      for (const allergen of Allergens) {
        if (!this.#allergens.includes(allergen)) {
          this.#allergens.push(allergen);
        }
      }
      // Ahora asignamos las categorias al plato
      for (const allergen of Allergens) {
        if (!dish.Allergens.includes(allergen)) {
          dish.Allergens.push(allergen);
        }
      }
    }
    deassignAllergenToDish(dish, ...Allergens) {
      for (const allergen of Allergens) {
        // Conseguimos el indice
        let index = dish.Allergens.indexOf(allergen);
        if (!index == -1) {
          dish.Allergens.splice(index, 1);
        }
      }
    }
    assignDishToMenu(menu, ...Dishes) {
      // Si el menu no esta en el sistema lo introducimos
      if (!this.#menus.includes(menu)) {
        this.#menus.push(menu);
      }
      for (const dish of Dishes) {
        if (!this.#dishes.includes(dish)) {
          this.#dishes.push(dish);
        }
      }
      for (const dish of Dishes) {
        if (!menu.Dishes.includes(dish)) {
          menu.Dishes.push(dish);
        }
      }
    }
    deassignDishToMenu(menu, ...Dishes) {
      for (const dish of Dishes) {
        // Conseguimos el indice
        let index = menu.Dishes.indexOf(dish);
        if (!index == -1) {
          menu.Dishes.splice(index, 1);
        }
      }
    }
    changeDishesPositionsInMenu(menu, dish, dish2) {
      if (
        !this.#menus.includes(menu) ||
        !this.#dishes.includes(dish) ||
        !this.#dishes.includes(dish2)
      ) {
        console.error("Error: Menu or dishes not found in the system.");
        return;
      }
      let index = this.#menus.indexOf(menu); // Sacamos el menu del array
      let indice1 = this.#menus[index].Dishes.indexOf(dish); // Sacamos de ese menu la posicion del plato1
      let indice2 = this.#menus[index].Dishes.indexOf(dish2); // Sacamos de ese menu la posicion del plato2

      this.#menus[index].Dishes[indice1] = dish2;
      this.#menus[index].Dishes[indice2] = dish;
    }

    getDishesInCategory(category) {
      let categorias = [];

      for (const dish of this.#dishes) {
        if (dish.Categories.includes(category)) {
          categorias.push(dish);
        }
      }
      let iterador = categorias[Symbol.iterator]();
      return iterador;
    }
    getDishesWithAllergen(allergen) {
      let alergias = [];

      for (const dish of this.#dishes) {
        if (dish.Allergens.includes(allergen)) {
          alergias.push(dish);
        }
      }
      let iterador = alergias[Symbol.iterator]();
      return iterador;
    }
    findDishes(plato, callback) {
      let platos = this.#dishes.filter(
        (dish) => dish === plato && callback(dish)
      );
      return platos[Symbol.iterator]();
    }

    createDish(name, description, ingredients, image) {
      let dish = this.#dishes.find((dish) => dish.name == name);

      // Si esta registrado lo devuelve
      if (dish) {
        return dish;
      } else {
        // Si no lo crea y lo registra
        dish = new Dish(name, description, ingredients, image);
        this.#dishes.push(dish);
      }
    }
    createMenu(name, description) {
      let menu = this.#menus.find((menu) => menu.name == name);

      // Si esta registrado lo devuelve
      if (menu) {
        return menu;
      } else {
        // Si no lo crea y lo registra
        menu = new Menu(name, description);
        this.#menus.push(menu);
      }
    }
    createAllergen(name, description) {
      let allergen = this.#allergens.find((allergen) => allergen.name == name);

      if (allergen) {
        return allergen;
      } else {
        allergen = new Allergen(name, description);
        this.#allergens.push(allergen);
      }
    }
    createCategory(name, description) {
      let category = this.#categories.find((category) => category.name == name);

      // Si esta registrado lo devuelve
      if (category) {
        return category;
      } else {
        // Si no lo crea y lo registra
        category = new Category(name, description);
        this.#categories.push(category);
      }
    }
    createRestaurant(name, description, location) {
      let restaurant = this.#restaurants.find(
        (restaurant) => restaurant.name == name
      );

      // Si esta registrado lo devuelve
      if (restaurant) {
        return restaurant;
      } else {
        // Si no lo crea y lo registra
        restaurant = new Restaurant(name, description, location);
        this.#restaurants.push(restaurant);
      }
    }
  }
  return {
    getInstance: function (systemName) {
      if (!instance) {
        instance = new RestaurantsManager(systemName);
      }
      return instance;
    },
  };
})();

export {
  Dish,
  Category,
  Allergen,
  Menu,
  Restaurant,
  Coordinate,
  RestaurantsManager,
};
*/
