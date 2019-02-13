const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getFilmTitles = function (film_array) {
  const result = film_array.map((film) => {
    return film.title
  })
  return result;
};

Cinema.prototype.filmByTitle = function (title) {
    return this.films.find(film => film.title === title);
    //return film[0]

  }

Cinema.prototype.filmByGenre = function (genre) {
  return this.films.filter(film => film.genre === genre);
  //return film[0]
  };

Cinema.prototype.filmsByYear = function (year) {
  const films = this.films.filter(film => film.year === year);
  if (films.length > 0) {
  return true}
  else {
    return false
  }
};

Cinema.prototype.filmsLength = function (length) {
  return this.films.every(film => film.length >= length);
};

Cinema.prototype.timeTotal = function () {
  const total = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0)
  return total
};
  module.exports = Cinema;
