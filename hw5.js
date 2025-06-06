/*Homework №5*/

/*Задание 1
Дан массив: [1, 5, 4, 10, 0, 3].
Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 
10. После вывода значения 10 в консоль цикл должен прекратить свою работу.*/
let num = [1,5,4,10,0,3];
for (let i = 0; i < num.length; i++) {
    alert(num[i]);
    console.log(num[i]);
    if (num[i] == 10) break;
 }

/*Задание 2
Дан массив: [1, 5, 4, 10, 0, 3].
Найдите индекс значения 4 в этом массиве.*/

// Вот простой массив чисел для примера
let array = [1, 5, 4, 10, 0, 3];
// Проверяем, есть ли число 5 в нашем массиве
for (let i = 0; i < array.length; i++) {
    if (array[i] == 4){
        alert(array[i]);
        console.log(array[i]);
 }
}

/*Задание 3
Дан массив чисел: [1, 3, 5, 10, 20].
С помощью метода join выведите элементы массива через пробел (пустую строку ' ').*/
let array1 = [1, 5, 4, 10, 0, 3];
let joinedText = array1.join(" ");
alert(joinedText);
console.log(joinedText); // Лог: "1 5 4 10 0 3"

/*Задание 4
С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]].*/
let arrey2 = [];
let value = 1;

for (let i = 0; i < 3; i++) {
  arrey2[i] = [];
  for (let j = 0; j < 3; j++) {
    arrey2[i][j] = value;
  }
}
alert(arrey2);
console.log(arrey2);


/*Задание 5
Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.*/
let arrey5 = [1,1,1];
    for(i=0;i<3;i++){
        arrey5.push(2);
    }
    alert(arrey5);
    console.log(arrey5);

/*Задание 6
Дан массив: [9, 8, 7, 'a', 6, 5].
С помощью метода sort отсортируйте массив и удалите букву 'a' из массива. Затем выведите массив.*/
let arrey6 = [9, 8, 7, 'a', 6, 5];
arrey6.sort();
arrey6.pop()
alert(arrey6);

/*Задание 7
Дан массив: [9, 8, 7, 6, 

Попросите пользователя угадать число с помощью метода prompt. Если значение, которое ввел пользователь, есть в массиве, выведите в alert «Угадал», в противном случае — «Не угадал».*/
let array7 = [9, 8, 7, 6, 5];
let num7 = prompt('Угадай число: ');
    for (let i = 0; i <= array7.length; i++) {
      if (array7[i] != num7 && i == array7.length){
        alert('«Не угадал»');
        console.log('«Не угадал»');
    }
    if (array7[i] == num7){
        alert('«Угадал»');
        console.log('«Угадал»');
        break;
     }
 }

/*Задание 8
Дана строка: 'abcdef'. Выведите в консоль 'fedcba'.*/
let str = 'abcdef';
let strArray = str.split('');
strArray.reverse();
alert(strArray.join(''));

/*Задание 9
Дан массив: [[1, 2, 3],[4, 5, 6]]. Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].*/
let array9 = [
    [1, 2, 3],
    [4, 5, 6]
];
alert(array9);

/*Задание 10
Создайте массив с произвольными числами (диапазон от 1 до 10). Переберите его с помощью цикла for. В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.*/
let array10 = [2,8,4,6,7,1,3,5,10,9];
for (let i = 0; i < array10.length-1; i++) {
        alert(array10[i]+array10[i+1]);
        console.log(array10[i]+array10[i+1]);
}

/*Задание 11
Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.*/

function sqr (number11 = [1,2,3,4,5,6,7,8,9]){
        let numSqr = number11.map(number11 => number11*number11);
        alert(numSqr);
        console.log(numSqr);
    }
    sqr();

/*Задание 12
Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.*/

function line (text = ['Кот','Собака','Слон','Лошадь']){
        let numLine = text.map(number11 => number11.length);
        alert(numLine);
        console.log(numLine);
    }
    line();

/*Задание 13
Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив, содержащий только отрицательные значения.*/

function line13 (num13 = [11, -18, 10, -17, 21, 31, -16]){
        let negativeNumber = num13.filter(num13 => num13 < 0);
        alert(negativeNumber);
        console.log(negativeNumber);
    }
    line13();

/*Задание 14
Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода 
Math.random() в диапазоне от 0 до 10.
В данном массиве найдите все четные значения и добавьте их в новый массив. Результат работы программы необходимо вывести в консоль — это будут два массива: исходный массив и массив с четными значениями.*/

function numRandom (num14 = []){
        for (i14 = 0; i14 <= 10; i14++){
          num14.push(Math.floor(Math.random() * (10 - 0 + 1)) + 0);
        }
        let num14num = num14.filter(num14 => num14 % 2 === 0);
        alert('Масив рендомных числе ' + num14 + '\n' + 'Масив четных  числе ' + num14num);
        console.log('Масив рендомных числе ' + num14 + '\n' + 'Масив четных  числе ' + num14num);
        
    }
    numRandom();

/*Задание 15
Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью Math.random() в диапазоне от 1 до 10.
Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.*/

let sum15 = 0;
function average (num15 = []){
        for (i15 = 0; i15 <= 5; i15++){
          num15.push(Math.floor(Math.random() * (10 - 0 + 1)) + 0);
          sum15 += num15[i15];
          
        }
        sum15 = sum15 / num15.length;
        alert('Рфндомный масив ' + num15 + '\n' + 'Среднее арифметическое масива ' + sum15);
        console.log(num15 + '\n' + sum15);
    }
    average();