/*Homework №7*/

/*Задание 1
С помощью метода массива sort отсортируйте массив people по возрастанию возраста и выведите результат в консоль.*/

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

people.sort((a, b) => a.age - b.age);

console.log(people);
alert(`Имя: ${people[0].name}, Возраст: ${people[0].age}`+'\n'+
    `Имя: ${people[1].name}, Возраст: ${people[1].age}`+'\n'+
    `Имя: ${people[2].name}, Возраст: ${people[2].age}`+'\n'+
    `Имя: ${people[3].name}, Возраст: ${people[3].age}`+'\n');


/*Задание 2
Реализуйте функцию filter, которая должна работать аналогично методу массива filter. Возьмите за основу функцию map, которую мы реализовывали на уроке.
Чтобы из функции map сделать filter, нужно, в зависимости от результата вызова ruleFunction, принимать решение о том, добавлять в результирующий массив очередной элемент или нет.*/

function isPositive(number) {
    return number > 0;
}
function isMale(person) {
    return person.gender === 'male';
}
function map(array, mapFunction) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(mapFunction(array[i], i, array));
    }
    return result;
}
function filter(array, ruleFunction) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}
console.log(filter([3, -4, 1, 9], isPositive)); // Вывод: [3, 1, 9]
const people2 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];
console.log(filter(people2, isMale));

const positiveNumbers = filter([3, -4, 1, 9], isPositive);
const males = filter(people2, isMale);
alert('Имя: ' + males.map(person => person.name).join(', '));

/*Задание 3
Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».*/

function logCurrentDate() {
    console.log(new Date().toLocaleString());
    alert(new Date().toLocaleString());
}

let secondsPassed = 0;
const interval = setInterval(() => {
    logCurrentDate();
    secondsPassed += 3;

    if (secondsPassed >= 30) {
        clearInterval(interval);
        console.log("30 секунд прошло");
        alert("30 секунд прошло");
    }
}, 3000);

/*Задание 4
Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска. Допишите функцию delayForSecond так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. Используйте setTimeout.*/

function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});

/*Задание 5
Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке:*/

// Функция delayForSecond через 1 секунду пишет в консоль
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) {
            cb(); // Колбэк вызывается после вывода сообщения
        }
    }, 1000);
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`); // Здесь использованы обратные кавычки для интерполяции
}

// Код выше менять нельзя
// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб')); // Исправлено: передаем функцию в виде стрелочной функции
