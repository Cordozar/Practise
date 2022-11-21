'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i += 1) {
  const watchedFilm = prompt('Один из последних просмотренных фильмов?', '');
  const assessmentFilm = prompt('На сколько оцените его?');
  personalMovieDB.movies[watchedFilm] = assessmentFilm;
}
