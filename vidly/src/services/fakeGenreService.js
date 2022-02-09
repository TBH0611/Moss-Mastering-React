export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
  {_id: "aeea812057fe47d786b3-d5fd", name: "Drama"}
];

export function getGenres() {
  return genres.filter(g => g);
}
