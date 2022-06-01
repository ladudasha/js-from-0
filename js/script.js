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

// incr++
// decr--

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

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('Один из последних просмотренных фильмов?', ''),
      b = prompt ('На сколько оцените его?', ''),
      c = prompt ('Один из последних просмотренных фильмов?', ''),
      d = prompt ('На сколько оцените его?', '');

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

    console.log(personalMovieDB);
    
