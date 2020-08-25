export const categories = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Hanging Plants", imageURL: "https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=649&q=80" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Garden Plants", imageURL: "https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=649&q=80" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Indoor Plants", imageURL: "https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=649&q=80" },
];

export function getCategories() {
  return categories.filter((g) => g);
}


