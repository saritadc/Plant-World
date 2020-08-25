import * as categoriesAPI from "./fakeCategoryService";

const plants = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Jade Plant",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "Indoor Plants" },
    numberInStock: 6,
    dailyRentalRate: 2.5,

  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Peace Lily",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Hanging Plants" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Shutter Island",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Garden Plants" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Hibiscus Plant",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Garden Plants" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Snake Plant",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "Indoor Plants" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Tulip",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Garden Plants" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "Succelent",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Garden Plants" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182g",
    title: "Succelent",
    category: { _id: "5b21ca3eeb7f6fbccd471821", name: "Garden Plants" },
    numberInStock: 5,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Aloe vera",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Indoor Plants" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
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

// export function deleteplant(id) {
//   let plantInDb = plants.find((m) => m._id === id);
//   plants.splice(plants.indexOf(plantInDb), 1);
//   return plantInDb;
// }
