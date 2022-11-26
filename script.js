'use strict';

let numberOfFilms;

function start() {
  do {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
  } while (
    numberOfFilms === '' ||
    numberOfFilms === null ||
    isNaN(numberOfFilms)
  );
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function detectPersonalLevel() {
  if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

detectPersonalLevel();

function rememberMyFilms() {
  for (let i = 0; i < 2; i += 1) {
    let watchedFilm;
    let assessmentFilm;
    do {
      watchedFilm = prompt('Один из последних просмотренных фильмов?', '');
    } while (
      watchedFilm === null ||
      watchedFilm === '' ||
      watchedFilm.length > 50
    );
    do {
      assessmentFilm = prompt('На сколько оцените его?');
    } while (
      assessmentFilm === null ||
      isNaN(assessmentFilm) ||
      assessmentFilm === ''
    );
    personalMovieDB.movies[watchedFilm] = +assessmentFilm;
  }
}

rememberMyFilms();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres() {
  let favoriteGenre;
  for (let i = 1; i < 4; i += 1) {
    do {
      favoriteGenre = prompt(`Ваш любимый жанр под номером ${i}`, '');
    } while (
      favoriteGenre === null ||
      favoriteGenre === '' ||
      !isNaN(favoriteGenre)
    );
    personalMovieDB.genres[i - 1] = favoriteGenre;
  }
}

writeYourGenres();

showMyDB(personalMovieDB.privat);
