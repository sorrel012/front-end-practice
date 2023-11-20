const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers);

const movies = [
  {
      title: 'Amadeus',
      score: 99
  },
  {
      title: 'Stand By Me',
      score: 85
  },
  {
      title: 'Parasite',
      score: 95
  },
  {
      title: 'Alien',
      score: 90
  }
];

const goodMovies = movies.filter(movie => movie.score > 80);
console.log(goodMovies);