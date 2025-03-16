/*Homework №4*/

/*Задание 1*/
a = prompt('Задание 1 \n Определяем минимальное число \n Введите первое число');
b = prompt('Задание 1 \n Определяем минимальное число \n Введите воторое число');

function min(a, b) {
	if (a < b) {
		return a;
} else {
	return b;
	}
}

alert('Задание 1 \n' + 'Минимальное число будет ' + min(a, b));

/*Задание 2*/
number = prompt('Задание 2 \n Проверяем число на четность \n Введите число');

function isEven(number) {
    if(number % 2 === 0){
	    return number = "Число " + number + " четное";
    }else{
        return number = "Число " + number + " не четное";
    }
}

alert('Задание 2 \n' +  isEven(number));

/*Задание 3*/
num1 = prompt('Задание 3 \n Квордрат числа \n Введите число');

function sqrNum(num1) {
    return num1 ** 2;
}

alert('Задание 3 \n Квордрат числа равен ' +  sqrNum(num1));

/*Задание 4*/
let age = prompt('Задание 4 \n Сколько тебе лет?');
function years(age) {
    if(age < 0){
	    return age = 'Вы ввели неправильное значение';
    }else if(age >=0 && age <= 12){
        return age = 'Привет, друг!';
    }else{
        return age = 'Добро пожаловать!';
    }
}

alert('Задание 4 \n' +  years(age));

/*Задание 5*/
a1 = prompt('Задание 5 \n Введите первое число');
b1 = prompt('Задание 5 \n Введите воторое число');

function min(a1, b1) {
	if (!isNaN(a1, b1) && b1 !== '' && a1 !=='') {
		return  a1 * b1;
    } else {
        return a1, b1 = 'Одно или оба значения не являются числом';
	}
}

alert('Задание 5 \n' + min(a1, b1));

/*Задание 6*/
a2 = prompt('Задание 6 \n Введите число');

function numCube(a2){
    if(!isNaN(a2) && a2 !==''){
        return a2 = a2 + ' в кубе равняется ' + (a2**3);
    }else{
        return a2 = 'Переданный параметр не является числом';
    }
}

alert('Задание 6 \n' + numCube(a2));

/*Задание 7
Создайте два объекта, circle1 и circle2, каждый из которых имеет свойство radius.
Оба объекта должны иметь:
Метод getArea, который возвращает площадь круга, вычисляемую через радиус.Метод getPerimeter, который возвращает периметр окружности.*/
function Circle(radius) {
    this.radius = radius;
    this.getArea = function() {
        return Math.PI * this.radius * this.radius;
    };
    this.getPerimeter = function() {
        return 2 * Math.PI * this.radius;
    };
}
const circle1 = new Circle(5);
const circle2 = new Circle(10);

alert(`Площадь круга 1: ${circle1.getArea()}`+'\n'+`Периметр круга 1: ${circle1.getPerimeter()}`+'\n'+`Площадь круга 2: ${circle2.getArea()}`+'\n'+`Периметр круга 2: ${circle2.getPerimeter()}`);
console.log(`Площадь круга 1: ${circle1.getArea()}`);
console.log(`Периметр круга 1: ${circle1.getPerimeter()}`);

console.log(`Площадь круга 2: ${circle2.getArea()}`);
console.log(`Периметр круга 2: ${circle2.getPerimeter()}`);


