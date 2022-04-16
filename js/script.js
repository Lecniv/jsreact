"use strict";
//console.log(1);
//let number = 5;
//const LeftBorder = 3;
//{
//    var number = 2;
//}
//console.log(number);
//alert("7");
//let result = confirm ("Are you ok?");
//console.log(result);
//const answer = prompt("Сколько вам лет?","28");
//console.log(answer);
//console.log(typeof(answer));
//const answers = [];
//answers[0]=prompt("Ваше имя?","");
//answers[1]=prompt("Ваша фамилия?","");
//answers[2]=prompt("Сколько Вам лет?","");
//document.write(answers);
//document.write(typeof(answers));
let numberOfFilms = prompt("сколько фильмов вы уже просмотрели?","");
let personalMouvieDb ={
    count: numberOfFilms,
    mouvies: {},    //пустой объект
    actors: {},
    genres: [],     //пустой массив
    privat: false
};
const   a = prompt("Название фильма", ""),
        b = prompt("оценка", ""),
        c = prompt("Название фильма", ""),
        d = prompt("оценка", "");
        personalMouvieDb.mouvies[a]=b;
        personalMouvieDb.mouvies[c]=d;
//через (.) в консоли не показывает 
        console.log(personalMouvieDb);