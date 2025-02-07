/*Homework №2*/

/*Задание 1*/
let password = "AdminPassword";
let youPassword = prompt(" Задание 1 \n Введите пороль");

if(youPassword === password){
    alert("Задание 1 \n Пороль введен верно!!!");
    console.log("Пороль введен верно!!!");
}else{
    alert("Задание 1 \n Пороль не верно введен =( ");
    console.log("Пороль не верно введен =( ");
}

/*Задание 2*/
let c = Number(prompt("Задание 2 \n Введите любое число"));

if(c >= 0 && c <= 10){
    alert('Задание 2 \n Верно!!!');
}else{
    alert('Задание 2 \n Не верно');
}

/*Задание 3*/
let d = Number(prompt("Задание 3 \n Введите любое число"));
let e = Number(prompt("Задание 3 \n Введите любое число"));

if(d >= 100 || c >= 100){
    alert('Задание 3 \n Верно!!!');
}else{
    alert('Задание 3 \n Не верно');
}

/*Задание 4*/
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
let sum = Number(a)+Number(b);
alert('Задание 4 \n'  + sum);

/*Задание 5*/
let monthNumber = prompt("Задание 5 \n Введите число месяца или название");

switch(monthNumber){
    case'1':case'январь':case'Январь':case '2':case'Февраль':case'февраль':case '12':case'декабрь':case'Декабрь':
        alert("Задание 5 \n Зима");
        console.log("Задание 5 \n Зима");
        break;
    case'3':case'март':case'Март':case'Апрель':case '4':case'апрель':case '5':case'Май':case'май':
        alert("Задание 5 \n Весна");
        console.log("Задание 5 \n Весна");
        break;
    case'6':case'Июнь':case'июнь':case '7':case'Июль':case'июль':case'8':case'Август':case'август':
        alert("Задание 5 \n Лето");
        console.log("Задание 5 \n Лето");
        break;
    case'9':case'Сентябрь':case'сентябрь':case'10':case'Октябрь':case'октябрь':case'11':case'Ноябрь':case'ноябрь':
        alert("Задание 5 \n Осень");
        console.log("Задание 5 \n Осень");
        break;
    default:
        alert("Задание 5 \n Неверный номер или название месяца");
        console.log("Задание 5 \n Неверный номер или название месяца");
}


