'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start() {
    do {
      personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
    } while (
      !personalMovieDB.count ||
      isNaN(personalMovieDB.count) ||
      personalMovieDB.count.includes(' ')
    );
  },
  detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },
  rememberMyFilms() {
    for (let i = 0; i < 2; i += 1) {
      let watchedFilm;
      let assessmentFilm;
      do {
        watchedFilm = prompt('Один из последних просмотренных фильмов?', '');
      } while (
        !watchedFilm ||
        watchedFilm.length > 50 ||
        watchedFilm.trim().length === 0
      );
      do {
        assessmentFilm = prompt('На сколько оцените его?');
      } while (!assessmentFilm || isNaN(assessmentFilm));
      personalMovieDB.movies[watchedFilm] = +assessmentFilm;
    }
  },
  showMyDB() {
    if (!personalMovieDB.privat) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр по номером ${i}`);

      if (!genre || genre.trim().length === 0 || !isNaN(genre)) {
        console.log('Вы ввели некорректные данные или не ввлеи их вовсе');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }

    personalMovieDB.genres.forEach((genre, i) => {
      console.log(`Любимый жанр #${i + 1} - это ${genre}`);
    });
  },
};

// personalMovieDB.start();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres();

// console.log(personalMovieDB);
