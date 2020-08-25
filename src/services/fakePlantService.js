import * as categoriesAPI from "./fakeCategoryService";

const plants = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Jade Plant",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "Indoor Plants" },
    imageURL: "https://images.unsplash.com/photo-1597334133882-7027ac9bd95e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Peace Lily",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Hanging plants" },
    imageURL: "https://images.unsplash.com/photo-1513347650-efb9c18ea41a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Succelent",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Garden Plants" },
    liked: true,
    imageURL: "https://images.unsplash.com/photo-1513347650-efb9c18ea41a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Hibiscus Plant",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Garden Plants" },
    liked: true,
    imageURL: "https://images.unsplash.com/photo-1513347650-efb9c18ea41a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Snake Plant",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "Indoor Plants" },
    imageURL: "https://images.unsplash.com/photo-1513347650-efb9c18ea41a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Tulip",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Garden Plants" },
    imageURL: "https://images.unsplash.com/photo-1513347650-efb9c18ea41a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "Succelent",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Garden Plants" },
    imageURL: "https://images.unsplash.com/photo-1513347650-efb9c18ea41a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182g",
    title: "Succelent",
    category: { _id: "5b21ca3eeb7f6fbccd471821", name: "Garden Plants" },
    imageURL: "https://images.unsplash.com/photo-1513347650-efb9c18ea41a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Aloe vera",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Indoor Plants" },
    imageURL: "https://images.unsplash.com/photo-1567689265664-1c48de61db0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"
  }
  
];

export function getPlants() {
  return plants;
}

export function getPlant(id) {
  return plants.find((m) => m._id === id);
}

export function savePlant(plant) {
  let plantInDb = plants.find((m) => m._id === plant._id) || {};
  plantInDb.title = plant.title;
  plantInDb.category = categoriesAPI.categories.find((g) => g._id === plant.categoryId);
  plantInDb.numberInStock = plant.numberInStock;
  plantInDb.dailyRentalRate = plant.dailyRentalRate;

  if (!plantInDb._id) {
    plantInDb._id = Date.now().toString();
    plants.push(plantInDb);
  }

  return plantInDb;
}

