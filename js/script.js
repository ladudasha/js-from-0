"use strict";

// 005

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// }

// obj.a = 10
// console.log(obj);

// 006

// let number = 4;
// console.log(4/0);
// console.log('string' * 9);

// const persone = 'Alex';
// const person = '5';

// const bool = true;

// console.log(something);

// const obj = {
//      name: 'john',
//      age: 25,
//      isMarried: false
// }
// console.log(obj.name);

//             0           1            2   3          4   5
// let arr = ['plam.png', 'orange.jpg', 6, 'apple.bmp', {}, []]

// 007

// alert('hello')

// const result = confirm('are you here');
// console.log(result);

// const answer = +prompt('Вам есть 18', '18');
// console.log (typeof(answer));

// const answers = []
// answers[0] = numberOfFilms
// answers[1] = prompt('Как ваше фамилия?','')
// answers[3] = prompt('Сколько вам лет?','')

// document.write(answers);
// console.log (typeof(answers));

// const category = 'toys';

// console.log(`https//someurl.com/${category}/5` );

// const user = 'Darya'
// alert(`Hello, ${user}`);

// console.log('arr' + " - object");

// let incr = 10;
// let decr = 10;

// incr++;
// decr--;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);
// console.log(2 + 2 * 2 != '6');
// console.log(4+4 == '8');
// console.log(4+4 === '8');

// const isChecked = false;
// const isClose = true;

// console.log(isChecked || !isClose)

//Урок 011 start of console application

// const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt ('Один из последних просмотренных фильмов?', ''),
//       b = prompt ('На сколько оцените его?', ''),
//       c = prompt ('Один из последних просмотренных фильмов?', ''),
//       d = prompt ('На сколько оцените его?', '');

//     personalMovieDB.movies[a] = b;
//     personalMovieDB.movies[c] = d;

//     console.log(personalMovieDB);

// урок 0013 Условие
// пример 1

// if (4 == 4) {
//     console.log('0k');
// } else {
//     console.log('Error');
// }

// пример 2

// const num = 150;

// if (num < 49) {
//     console.log('Error');

// } else if (num > 100) {
//     console.log('Много');
// }
// else {
//          console.log('ok');
//      }

// пример 2. другой синтаксис. с помощью тернарного оператора

// const num = 50;
// (num === 50) ? console.log('ok') : console.log('Error');

// пример другой конструкии. Проверка только на строегое сравнение

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('No');
//         break;
//     case 100:
//         console.log('Not');
//         break;
//     case 50:
//         console.log('yes');
//         break;
//     default:
//         console.log('No this time');
//         break;
// }

// УРОК 0014 ЦИКЛЫ

// 1 WHILE

//  let num = 5;

//  while (num < 55) {
//     console.log(num);
//     num++;
//  }

// 2  ЦИКЛ DO

// let num = 50;
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// 3  ЦИКЛ FOR
// let num = 50;
// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//       break;
//     }
//     console.log(i);

// };

// УРОК 15 ЗАДАНИЯ НА ЦИКЛЫ И УСЛОВИЯ

// const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

//     for (let i = 0; i < 2; i++) {
//         const a = prompt ('Один из последних просмотренных фильмов?', ''),
//               b = prompt ('На сколько оцените его?', '');

//    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     console.log('done');
//    } else {
//     console.log('error');
//     i--;
//    }
// }
// console.log(personalMovieDB);

// 3)

// if (personalMovieDB.count < 10) {
//     console.log ('Просмотрено довольно мало фильмов', '');
// }
// else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//     console.log ('Вы классический зритель');
// }
// else if (personalMovieDB.count >= 30 ){
//     console.log ('Вы киноман');
// }
// else {
//     console.log ('Произошла ошибка');
// }

// let message = (personalMovieDB.count < 10) ? 'Просмотрено довольно мало фильмов' :
//     (personalMovieDB.count >= 10 && personalMovieDB.count < 30) ? 'Вы классический зритель' :
//         (personalMovieDB.count >= 30) ? 'Вы киноман' :
//         'Произошла ошибка';

// console.log(message);

// const a = 3;
// const b = 5;

// switch (a + b) {
//     case 6:
//         console.log ('1');
//         break;
//     case 8:
//         console.log ('2');
//     case 9:
//         console.log ('3');
//         break;
//     default:
//         console.log ('4');

// }



// УРОК 0016 ФУНКЦИИ
// СТРЕЛОЧНЫЕ ФУНКЦИИ

// let num = 20;
// function showfirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showfirstMessage('hello world!');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//     let num = 50;

//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
//     console.log('hello');
// };
// logger();

// // срелочная

// const culc = (a,b) => a + b;

// let count = 2;
// console.log (count++);
// // console.log (++count);
// console.log (count);

// 017 методы и свойства строк и чисел

// const str = 'test';

// console.log(str.length);
// console.log(str.toLocaleUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('fruit'));
// console.log(fruit.indexOf('п'));

// const logg = 'Hello world';

// console.log(logg.slice(6, 11));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, ));

// // Числа
//  const num = 12.2;
//  console.log (Math.round(num));

//  const test = '12.2px';
//  console.log(parseInt(test));
//  console.log(parseFloat(test));





// Урок 0018
// Практика ч3 используем функнии

// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//   }
// }
// start();

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = prompt("На сколько оцените его?", "");

//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//       console.log("done");
//     } else {
//       console.log("error");
//       i--;
//     }
//   }
// }
// rememberMyFilms();

// function detectPrsonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов", "");
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
//   } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
//   } else {
//     console.log("Произошла ошибка");
//   }
// }
// detectPrsonalLevel();

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//   }
// }

// writeYourGenres();


// 019 CALLBACK - функции


function laernJS(lang, callback) {
  console.log (`Я учу ${lang}`);
  callback();
}

function done() {
  console.log('Я прошел этот урок!');
}

laernJS('JavaScript', done); 


