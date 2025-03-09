/*Игра первая.
Угадай случайное число от 1 до 100.*/

function numRandom (mysterious){
    mysterious = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    //alert(mysterious);
    let guess = prompt('Попробуй угадай число от 1 до 100 \n Введи чесло: ' );
      while(guess != mysterious) {
      if(guess == mysterious){
        alert('Вы отгодали число \n Загаданное число: ' + mysterious );
        console.log('Вы отгодали число \n Загаданное число: ' + mysterious );
      }else if(guess != mysterious && guess < mysterious){
        guess = prompt('Не верно!!! \n Загаданное число больше. \n Попробуйте еще раз. Ваше число: ' );
        console.log('Не верно!!! \n Загаданное число больше. \n Попробуйте еще раз. Ваше число: ' );
      }else if(guess != mysterious && guess > mysterious){
        guess = prompt('Не верно!!! \n Загаданное число меньше. \n Попробуйте еще раз. Ваше число: ' );
        console.log('Не верно!!! \n Загаданное число меньше. \n Попробуйте еще раз. Ваше число: ' );
      }
    }
    alert('Верно!!! ♫♫♫ Вы выграли!!! ♫♫♫ \n Загаданное число: ' + mysterious );
    console.log('Верно!!! ♫♫♫ Вы выграли!!! ♫♫♫ \n Загаданное число: ' + mysterious );
}

/*Игра вторая.
Простая арифметика*/

function arithmetic (a,b){
    a = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    b = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    let task = [sum = a+b,minus = a-b,multiply = a*b,divide = a/b]
    let i = Math.floor(Math.random() * (3 - 0 + 1)) + 0;

    if(task[i] == sum){
        let answer = prompt('Чему равно сложение: '+ a+'+'+b);
        if(answer == task[i]){
            alert('Верно!!! \n Ответ: ' + task[i]);
            console.log('Верно!!! \n Ответ: ' + task[i]);
        }else{
            alert('Не верно!!! \n Правильный ответ: ' + task[i]);
            console.log('Не верно!!! \n Правельный ответ: ' + task[i]);
        }
    }else if(task[i] == minus){
        let answer = prompt('Чему равно вычитание: '+ a+'-'+b);
        if(answer == task[i]){
            alert('Верно!!! \n Ответ: ' + task[i]);
            console.log('Верно!!! \n Ответ: ' + task[i]);
        }else{
            alert('Не верно!!! \n Правильный ответ: ' + task[i]);
            console.log('Не верно!!! \n Правельный ответ: ' + task[i]);
        }
    }else if(task[i] == multiply){
        let answer = prompt('Чему равно умножение: '+ a+'*'+b);
        if(answer == task[i]){
            alert('Верно!!! \n Ответ: ' + task[i]);
            console.log('Верно!!! \n Ответ: ' + task[i]);
        }else{
            alert('Не верно!!! \n Правильный ответ: ' + task[i]);
            console.log('Не верно!!! \n Правельный ответ: ' + task[i]);
        }
    }else if(task[i] == divide){
        let answer = prompt('Чему равно деление: '+ a+'/'+b);
        if(answer == task[i]){
            alert('Верно!!! \n Ответ: ' + task[i]);
            console.log('Верно!!! \n Ответ: ' + task[i]);
        }else{
            alert('Не верно!!! \n Правильный ответ: ' + task[i]);
            console.log('Не верно!!! \n Правельный ответ: ' + task[i]);
        }
    } 
}

/*Игра третья.
Переверни текст*/
function reverseText (text){
    text = prompt('Введите текс который нужно развернуть: ');
    let textT = text.split('');
    textT.reverse();
    let newText = textT.join('');

    alert(newText);
    console.log('Верно!!! ♫♫♫ Вы выграли!!! ♫♫♫ \n Загаданное число: ' + mysterious );
}

/*Игра четвертая.
Викторина*/
    
    function quizZ() {
        const quiz = [
            {
                question: "Какой цвет небо?",
                options: ["1. Красный", "2. Синий", "3. Зеленый"],
                correctAnswer: 2 // номер правильного ответа
            },
            {
                question: "Сколько дней в неделе?",
                options: ["1. Шесть", "2. Семь", "3. Восемь"],
                correctAnswer: 2
            },
            {
                question: "Сколько у человека пальцев на одной руке?",
                options: ["1. Четыре", "2. Пять", "3. Шесть"],
                correctAnswer: 2
            }
        ];
        let correctAnswers = 0;
        for(i=0;i<3;i++){
            let ans = prompt(quiz[i].question+'\n Варианты ответа: ' + '\n ' + quiz[i].options[0]+ '\n ' + quiz[i].options[1] + '\n ' + quiz[i].options[2])
            let ansS=[];
            ansS.push(ans);
            if(ans == quiz[i].correctAnswer){
                correctAnswers++;
            }
            
        }
        alert('Количество векрных ответов: '+ correctAnswers+'\n Верный ответ на первый вопрос: '+quiz[0].options[1]+'\n Верный ответ на второй вопрос: '+quiz[1].options[1]+'\n Верный ответ на третий вопрос: '+quiz[2].options[1]);
        console.log('Количество векрных ответов: '+ correctAnswers+'\n Верный ответ на первый вопрос: '+quiz[0].options[1]+'\n Верный ответ на второй вопрос: '+quiz[1].options[1]+'\n Верный ответ на третий вопрос: '+quiz[2].options[1]);
    }

