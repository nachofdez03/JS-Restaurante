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
