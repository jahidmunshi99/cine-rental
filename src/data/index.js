const Movies = [
  {
    id: crypto.randomUUID(),
    cover: "iron-man.png",
    title: "Iron Man",
    genre: "Action/Adventure/Sci-fi",
    rating: 3,
    price: 120,
  },
  {
    id: crypto.randomUUID(),
    cover: "avatar.png",
    title: "Avatar",
    genre: "Action/Adventure/Sci-fi",
    rating: 1,
    price: 150,
  },
  {
    id: crypto.randomUUID(),
    cover: "marriage-strory.jpg",
    title: "Marriage Story",
    genre: "Drama/Romance",
    rating: 2,
    price: 220,
  },
  {
    id: crypto.randomUUID(),
    cover: "once-in-ho.jpg",
    title: "Once Upon a Time in Hollywood",
    genre: "Comedy/Drama",
    rating: 5,
    price: 60,
  },
  {
    id: crypto.randomUUID(),
    cover: "pain-and-gain.jpg",
    title: "Pain & Gain",
    genre: "Action/Comedy",
    rating: 4,
    price: 120,
  },
  {
    id: crypto.randomUUID(),
    cover: "parasite.jpg",
    title: "Parasite",
    genre: "Thriller/Drama",
    rating: 5,
    price: 120,
  },
];

function movieList() {
  return Movies;
}

export default movieList;
