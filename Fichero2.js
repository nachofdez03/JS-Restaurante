// Implementación nueva de la práctica

class Dish {
  #name;
  #description;
  #ingredients;
  #image;

  constructor(name, description, ingredients = [], image) {
    this.#name = name;
    this.#description = description;
    this.#ingredients = [];
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

    // Añadimos las categorias
    addCategory(...Categories) {
      for (const category of Categories) {
        this.#categories.push(category);
      }
    }

    // Borramos la cateogoria
    removeCategory(...Categories) {
      for (const category of Categories) {
        let index = this.#categories.indexOf(category);
        if (index != -1) {
          this.#categories.splice(index, 1);
        }
      }
    }

    // Añadimos el Menu
    addMenu(...menus) {
      for (const menu of menus) {
        this.#menus.push({
          menu,
          dishes: [],
        });
      }
    }

    // Borramos el menu
    removeMenu(...menus) {
      for (const menu of menus) {
        let index = this.#menus.findIndex((m) => m.menu == menu);
        if (index != -1) {
          this.#menus.splice(index, 1);
        }
      }
    }

    // Añadimos Alergia
    addAllergen(...Allergens) {
      for (const allergen of Allergens) {
        this.#allergens.push(allergen);
      }
    }

    // Borramos Alergia
    removeAllergen(...Allergens) {
      for (const allergen of Allergens) {
        let index = this.#allergens.indexOf(allergen);
        if (index != -1) {
          this.#allergens.splice(index, 1);
        }
      }
    }

    // Añadimos un plato
    addDish(...dishes) {
      for (const dish of dishes) {
        this.#dishes.push({
          dish,
          categories: [],
          allergens: [],
        });
      }
    }

    // Borramos un plato
    removeDish(...dishes) {
      for (const dish of dishes) {
        let index = this.#dishes.findIndex((d) => d.dish === dish);
        if (index != -1) {
          this.#dishes.splice(index, 1);
        }
      }
    }

    // Añadimos un restaurante
    addRestaurant(...Restaurants) {
      for (const restaurant of Restaurants) {
        this.#restaurants.push(restaurant);
      }
    }

    // Borramos restaurante
    removeRestaurant(...Restaurants) {
      for (const restaurant of Restaurants) {
        let index = this.#restaurants.indexOf(restaurant);
        if (index != -1) {
          this.#restaurants.splice(index, 1);
        }
      }
    }

    // Asignamos la categoria a un plato
    assignCategoryToDish(dish, ...categories) {
      // Si el plato no esta en el sistema lo introducimos
      const theDish = this.#dishes.find((d) => d.dish == dish);
      if (!theDish) {
        this.#dishes.push({
          dish,
          allergens: [],
          categories: [],
        });
      }

      // Si las categorias no estan en el sistema las introducimos
      for (const category of categories) {
        if (!this.#categories.includes(category)) {
          this.#categories.push(category);
        }
      }

      /* Ahora asignamos las categorias al plato, con esta linea conseguimos el objeto literal 
         donde va a estar el plato donde tenemos que asignarles las categorias */

      for (const category of categories) {
        if (!theDish.categories.includes(category)) {
          theDish.categories.push(category);
        }
      }
    }

    // Desasignamos una categoria a un plato
    deassignCategoryToDish(dish, ...categories) {
      const theDish = this.#dishes.find((d) => d.dish == dish);

      for (const category of categories) {
        let index = theDish.categories.indexOf(category);
        if (!index == -1) {
          theDish.categories.splice(index, 1);
        }
      }
    }
    // Igual pero para las alergias
    assignAllergenToDish(dish, ...allergens) {
      const theDish = this.#dishes.find((d) => d.dish == dish);

      // Si no existe el plato, lo añadimos
      if (!theDish) {
        this.#dishes.push({
          dish,
          categories: [],
          allergens: [],
        });
      }

      // Si no existe la alergia, la añadimos
      for (const allergen of allergens) {
        if (!this.#allergens.includes(allergen)) {
          this.#allergens.push(allergen);
        }
      }

      // Asignamos la alergia al plato
      for (const allergen of allergens) {
        if (!theDish.allergens.includes(allergen)) {
          theDish.allergens.push(allergen);
        }
      }
    }

    // Lo mismo pero con alergias
    deassignAllergenToDish(dish, ...allergens) {
      const theDish = this.#dishes.find((d) => d.dish == dish);

      for (const allergen of allergens) {
        let index = theDish.allergens.indexOf(allergen);
        if (!index == -1) {
          theDish.allergens.splice(index, 1);
        }
      }
    }
    assignDishToMenu(menu, ...dishes) {
      // Conseguimos el objeto literal donde esta el menu
      let theMenu = this.#menus.find((m) => (m.menu = menu));

      // Si el menu no existe
      if (!theMenu) {
        this.#menus.push({
          menu,
          dishes: [],
        });
      }

      // Si algun plato no existe
      for (const dish of dishes) {
        if (!this.#dishes.includes(dish)) {
          this.#dishes.push(dish);
        }
      }

      // Asignamos los platos al menu
      for (const dish of dishes) {
        if (!theMenu.dishes.includes(dish)) {
          theMenu.dishes.push(dish);
        }
      }
    }
    deassignDishToMenu(menu, ...dishes) {
      const theMenu = this.#menus.find((m) => m.menu == menu);

      for (const dish of dishes) {
        let index = theMenu.dishes.indexOf(dish);
        if (!index == -1) {
          theMenu.dishes.splice(index, 1);
        }
      }
    }
    changeDishesPositionsInMenu(menu, dish, dish2) {
      const theMenu = this.#menus.find((m) => m.menu == menu);

      if (
        !theMenu ||
        theMenu.dishes.indexOf(dish) == -1 ||
        theMenu.dishes.indexOf(dish) == -1
      )
        throw new Exception();

      let index = theMenu.dishes.indexOf(dish); // Indice Plato 1
      let index2 = theMenu.dishes.indexOf(dish2); // Indice Plato 2

      // Los intercambiamos
      theMenu.dishes[index] = dish2;
      theMenu.dishes[index2] = dish;
    }

    getDishesInCategory(category) {
      let categorias = [];

      for (const dish of this.#dishes) {
        let index = dish.categories.indexOf(category);
        if (index != -1) {
          categorias.push(category);
        }
      }
      let iterador = categorias[Symbol.iterator]();
      return iterador;
    }
    getDishesWithAllergen(allergen) {
      let alergias = [];

      for (const dish of this.#dishes) {
        let index = dish.allergens.indexOf(allergen);
        if (index != -1) {
          alergias.push(allergen);
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

    // Creamos plato
    createDish(name, description, ingredients, image) {
      let index = this.#dishes.findIndex((dish) => dish.name == name);
      // Si esta registrado lo devuelve
      if (index != -1) {
        return this.#dishes[index];
      } else {
        // Si no lo crea y lo registra
        let dish = new Dish(name, description, ingredients, image);
        this.#dishes.push({
          dish,
          categories: [],
          allergens: [],
        });
      }
    }
    // Creamos Menu
    createMenu(name, description) {
      let index = this.#menus.findIndex((menu) => menu.name == name);
      // Si esta registrado lo devuelve
      if (index != -1) {
        return this.#menus[index];
      } else {
        // Si no lo crea y lo registra
        let menu = new Menu(name, description);
        this.#menus.push({
          menu,
          dishes: [],
        });
      }
    }
    // Creamos Alergia
    createAllergen(name, description) {
      let index = this.#allergens.findIndex(
        (allergen) => allergen.name == name
      );
      // Si esta registrado lo devuelve
      if (index != -1) {
        return this.#allergens[index];
      } else {
        // Si no lo crea y lo registra
        let allergen = new Allergen(name, description);
        this.#allergens.push(allergen);
      }
    }
    // Creamos la categoria
    createCategory(name, description) {
      let index = this.#categories.findIndex(
        (categorie) => categorie.name == name
      );
      // Si esta registrado lo devuelve
      if (index != -1) {
        return this.#categories[index];
      } else {
        // Si no lo crea y lo registra
        let categorie = new Category(name, description);
        this.#categories.push(categorie);
      }
    }
    createRestaurant(name, description, location) {
      let index = this.#restaurants.findIndex(
        (restaurant) => restaurant.name == name
      );
      // Si esta registrado lo devuelve
      if (index != -1) {
        return this.#restaurants[index];
      } else {
        // Si no lo crea y lo registra
        let restaurant = new Restaurant(name, description, location);
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
