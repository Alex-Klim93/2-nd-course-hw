/*Homework №6*/

/*Задание 1
Преобразовать строку 'js' в верхний регистр.*/

let str1 = 'js';
alert(str1.toUpperCase());

/*Задание 2
Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр символов не влияет на результат.*/
const products = ['Хлеб Бородинский', 'Молоко Молочник', 'Коровка Молоко', 
    'Груша Конференция'];
    
    const search = 'молоко';
    
    products.forEach((product) => {
       if (product.toLowerCase().startsWith(search.toLowerCase())) {
          console.log(product);
          alert(product);
       }
    });


/*Задание 3
Округлить число 32.58884:
До меньшего целого.
До большего целого.
До ближайшего целого.*/
let num3 = 32.58884;
let num31 = Math.floor(num3);
let num32 = Math.ceil(num3);
let num33 = Math.round(num3);

alert('Округление до меньшего целого: '+num31+'\nОкругление до большего целого: '+num32+'\nОкругление до ближайшего целого: '+num33);


/*Задание 4
Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.*/
let numbers = [52, 53, 49, 77, 21, 32];
let min = Math.min(...numbers);
let max = Math.max(...numbers);

alert('Mинимальное число: '+min+'\nМаксимальное число: '+ max);
console.log('Mинимальное число: '+min+'\nМаксимальное число: '+ max);

/*Задание 5
Создать функцию, которая выводит в консоль случайное число от 1 до 10.*/
function getRandomInt(min, max){
    min = 1;
    max = 10;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    alert(getRandomInt());
    console.log(getRandomInt());

/*Задание 6
Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. Длина массива должна быть в два раза меньше переданного числа.*/

function num6(numRandom = []){
    let num66 = prompt('Введите случайное число: ');
    for(i = 0;i<num66/2;i++){
        numRandom[i] = Math.floor(Math.random() * (num66 - 0 + 1)) + 0;
    }
    alert(numRandom);
    console.log(numRandom);
}
    num6();

/*Задание 7
Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.*/
    
function num7(){
    let min = prompt('Введите случайное число: ');
    let max = prompt('Введите случайное число: ');
    if(max < min){
        let res7 = Math.floor(Math.random() * (min - max + 1)) + max;
        alert(res7);
        console.log(res7);
    }else if(max > min){
        let res77 = Math.floor(Math.random() * (max - min + 1)) + min;
        alert(res77);
        console.log(res77);
    }
}
num7();


/*Задание 8
Вывести в консоль текущую дату.*/

var now = new Date();
alert( now );

/*Задание 9
Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.*/

var days = 73;
var currentDate = new Date();
var res = currentDate.setTime(currentDate.getTime() + days * 24 * 60 * 60 * 1000);
currentDate = new Date(res);
alert(currentDate);

/*Задание 10
Написать функцию, которая принимает дату и возвращает ее в формате:
Дата: [число] [месяц на русском] [год] — это [день недели на русском].
Время: [часы]:[минуты]:[секунды]*/

function date10(){
    const currentDate = new Date();
    const options = { day: 'numeric', month: 'long',year: 'numeric', weekday: 'long',  
     };
    const formattedDate = currentDate.toLocaleDateString('ru-RU', options);
    let currentDate10 = new Date();
    let options10 = {hour: '2-digit', minute:'2-digit', second:'2-digit'};
    console.log(currentDate10.toLocaleTimeString('ru-RU', options10)); // "18:30"
    console.log(formattedDate); // Например, "Среда, 13 октября 2021 г."
    alert(formattedDate + ' ' + currentDate10.toLocaleTimeString('ru-RU', options10));
}
    date10();