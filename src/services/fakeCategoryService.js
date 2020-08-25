export const categories = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Hanging Plants" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Garden Plants" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Indoor Plants" },
];

export function getCategories() {
  return categories.filter((g) => g);
}
