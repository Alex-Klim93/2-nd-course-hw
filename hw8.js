/*Homework №8*/

/*Задание 1. Скрытие и показ текста*/

        const header = document.querySelector('#header');
        const button = document.querySelector('#toggleButton');

        button.addEventListener('click', () => {
            if (header.style.display === 'none') {
                header.style.display = 'block';
                button.textContent = 'Скрыть';
            } else {
                header.style.display = 'none';
                button.textContent = 'Показать';
            }
        });

/*Задание 2. Изменение стиля элемента*/

        const paragraph = document.querySelector('#text');
        const button2 = document.querySelector('#colorButton');

        button2.addEventListener('click', () => {
                paragraph.style.color = 'blue';
        });

/*Задание 3. Динамическое изменение текста*/

        const header3 = document.querySelector('#header3');
        const button3 = document.querySelector('#textButton3');

        button3.addEventListener('click', () => {
            if (header3.textContent === 'Исходный текст заголовка') {
                header3.textContent = 'Привет, мир!';
            } else {
                header3.textContent = 'Исходный текст заголовка';
            }
        });

/*Задание 4. Поиск и изменение элементов по классу*/

        const changeTextButton4 = document.querySelector('#changeTextButton4');

        changeTextButton4.addEventListener('click', () => {
            const descriptions4 = document.querySelectorAll('.description4');
            descriptions4.forEach(element => {
                element.textContent = 'Измененный текст4';
            });
        });

/*Задание 5. Работа с querySelectorAll*/
const changeTextButton5 = document.querySelector('#changeTextButton5');

changeTextButton5.addEventListener('click', () => {
    const descriptions5 = document.querySelectorAll('.description5');
    descriptions5.forEach(element5 => {
        element5.textContent = 'Новый текст';
    });
});

/*Задание 7. Добавление нового элемента в DOM*/
const addParagraphButton6 = document.querySelector('#addParagraphButton6');

addParagraphButton6.addEventListener('click', () => {
    const newParagraph6 = document.createElement('p');
    newParagraph6.textContent = 'Новый абзац';
    document.body.appendChild(newParagraph6);
});

/*Задание 7. Удаление элемента*/
const removeElementButton7 = document.querySelector('#removeElementButton7');

removeElementButton7.addEventListener('click', () => {
    const firstDescription7 = document.querySelector('.description7');
    if (firstDescription7) {
        firstDescription7.remove();
    }
});