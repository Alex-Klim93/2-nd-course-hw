/*Homework №3*/

/*Задание 1*/
let hi = prompt("Задание 1 \n Введите сколько раз вас поприветствовать?");

let i = 1;

while(i <= hi){
    alert("Задание 1 \n Привет!");
    console.log("Задание 1 \n +  Привет!");
    i++;
}

/*Задание 2*/
let num = 1;

while(num <= 5){
    alert("Задание 2 \n" +  num);
    console.log("Задание 2 \n" +  num);
    num++;
}

/*Задание 3*/
let numHw3 = 7;

while(numHw3 >= 7 && numHw3 <= 22){
    alert("Задание 3 \n" +  numHw3);
    console.log("Задание 3 \n" +  numHw3);
    numHw3++;
}

/*Задание 4*/
const obj = {"Коля":'200',"Вася":'300',"Петя": '400'}
for (let name in obj){
    alert(`Задание 4 \n ${name}: ${obj[name]}`);
    console.log(`Задание 4 \n ${name}: ${obj[name]}`);
}

/*Задание 5*/
let itNum = 0;
for(n=1000; n > 50; n/=2){
  itNum++;
  if(n/2 < 50){
    alert('Задание 5 \n Количество итерайций ' + itNum + ', Результат деления' + n);
    console.log('Задание 5 \n Количество итерайций ' + itNum + ', Результат деления' + n);
}
}

/*Задание 6*/
let weekNum = 1;

for(dayNum = 1; dayNum>0; dayNum++ && weekNum++){
    if(dayNum > 31){
        dayNum = 0;
        if(weekNum == 7){
            weekNum = 0;
            alert('Задание 6 \n Сегодня пятница,' + dayNum + '-е число. Необходимо подготовить отчет.');
            console.log('Задание 6 \n Сегодня пятница,' + dayNum + '-е число. Необходимо подготовить отчет.');
        }
    }else{
        if(weekNum == 7){
            weekNum = 0;
            alert('Задание 6 \n Сегодня пятница,' + dayNum + '-е число. Необходимо подготовить отчет.');
            console.log('Задание 6 \n Сегодня пятница,' + dayNum + '-е число. Необходимо подготовить отчет.');
        }
    }
}
