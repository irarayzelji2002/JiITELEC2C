const data = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    genre: "Drama",
    releaseYear: 1994,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    duration: 142, // in minutes
  },
  {
    id: 2,
    title: "The Godfather",
    genre: "Crime",
    releaseYear: 1972,
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan", "Robert Duvall"],
    duration: 175, // in minutes
  },
  {
    id: 3,
    title: "Inception",
    genre: "Sci-Fi",
    releaseYear: 2010,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    director: "Christopher Nolan",
    cast: [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Ellen Page",
      "Tom Hardy",
    ],
    duration: 148, // in minutes
  },
  {
    id: 4,
    title: "Pulp Fiction",
    genre: "Crime",
    releaseYear: 1994,
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman", "Bruce Willis"],
    duration: 154, // in minutes
  },
  {
    id: 5,
    title: "The Dark Knight",
    genre: "Action",
    releaseYear: 2008,
    description:
      "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    director: "Christopher Nolan",
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Maggie Gyllenhaal",
    ],
    duration: 152, // in minutes
  },
  // New Movie Objects
  {
    id: 6,
    title: "Forrest Gump",
    genre: "Drama",
    releaseYear: 1994,
    description:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field"],
    duration: 142, // in minutes
  },
  {
    id: 7,
    title: "The Matrix",
    genre: "Sci-Fi",
    releaseYear: 1999,
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    director: "The Wachowskis",
    cast: [
      "Keanu Reeves",
      "Laurence Fishburne",
      "Carrie-Anne Moss",
      "Hugo Weaving",
    ],
    duration: 136, // in minutes
  },
  {
    id: 8,
    title: "Schindler's List",
    genre: "Biography",
    releaseYear: 1993,
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    director: "Steven Spielberg",
    cast: ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes", "Embeth Davidtz"],
    duration: 195, // in minutes
  },
  {
    id: 9,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Adventure",
    releaseYear: 2001,
    description:
      "A young hobbit, Frodo Baggins, embarks on a perilous journey to destroy the One Ring and save Middle-earth from the dark lord Sauron.",
    director: "Peter Jackson",
    cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen", "Sean Astin"],
    duration: 178, // in minutes
  },
  {
    id: 10,
    title: "Inglourious Basterds",
    genre: "Adventure",
    releaseYear: 2009,
    description:
      "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
    director: "Quentin Tarantino",
    cast: [
      "Brad Pitt",
      "Diane Kruger",
      "Christoph Waltz",
      "Michael Fassbender",
    ],
    duration: 153, // in minutes
  },
];

//PRACTICE
function getMovies() {
  return data;
}

function getMovie(id) {
  return data.find((d) => d.id === id);
}

// const movies = getMovies();
// console.log(movies);
// const title = movies[0].title;
// const director = movies[0].director;
// console.log(title, director);

//DESTRUCTURING
const movie = getMovie(1);
const movie2 = getMovie(1);
// const title = movie.title;
// const director = movie.title;
// const releaseYear = movie.releaseYear;
// console.log(title, director, releaseYear);

//OBJECT DESTRUCTURING
const { title, director, releaseYear, cast } = movie;
console.log(title, director, releaseYear, cast);

//ARRAY DESTRUCTURING
// const primaryCast = cast[0];
// const secondaryCast = cast[1];
const [primaryCast, ...otherCast] = cast;
console.log(primaryCast, otherCast);

const updatedMovie = { ...movie, language: "English", releaseYear: 2010 };
//rest operator adding .. in front add it to movie object
// putting in fornt of ... overwrites
console.log(updatedMovie);
const movies = { movie1: { ...movie }, movie2: { ...movie2 } };
console.log(movies);

//TERNARY OPERATOR
const newRelease = releaseYear > 2000 ? "New Release" : "Old";
console.log(newRelease);

//ARROW FUNCTION
// function sum(num, num1) {
//   num *= num1;
//   return num;
// }

const sum = (num, num1) => {
  num *= num;
  return num + num1;
};
console.log(sum(1, 2));

//-----------EXERISE--------------
//Extract title, genre,d escription for ID 4
const extractDetailsForId4 = (id) => {
  var movie = data.find((d) => d.id === id);
  const { title, genre, description } = movie;
  return { title: title, genre: genre, description: description };
};
console.log(extractDetailsForId4(4));

//Extract title, genre,d escription, cast for ID 5
const extractDetailsForId5 = (id) => {
  var movie = data.find((d) => d.id === id);
  const { title, genre, description, cast } = movie;
  return { title: title, genre: genre, description: description, cast: cast };
};
console.log(extractDetailsForId5(5));

//Add Cast
const addCast = (id) => {
  var movie = data.find((d) => d.id === id);
  const newCast = [...cast, "Gab Montano"];
  return { ...movie, cast: newCast };
};
console.log(addCast(3));

//Add Languges
const addLanguage = (id) => {
  var movie = data.find((d) => d.id === id);
  const languages = ["English", "Tagalog"];
  return { ...movie, languages: languages };
};
console.log(addLanguage(3));

//Convert to arrow function
function toCaps(fname, surname) {
  const name = fname + " " + surname;
  return name.toUpperCase();
}
console.log(toCaps("gab", "Montano"));

const upperCase = (fname, surname) => {
  const name = fname + " " + surname;
  return name.toUpperCase();
};
console.log(upperCase("ira", "jI"));
