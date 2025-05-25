// Задание 1: Функции min/max/equal
function min(a, b) {
    return a < b ? a : b;
}

function max(a, b) {
    return a > b ? a : b;
}

function equal(a, b) {
    return a === b;
}

function runTask1() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1)) {
        document.getElementById('task1-result').textContent = 'Введите первое число';
        return;
    }
    
    if (isNaN(num2)) {
        document.getElementById('task1-result').textContent = 'Введите второе число';
        return;
    }
    
    const result = `
        min(${num1}, ${num2}) = ${min(num1, num2)}<br>
        max(${num1}, ${num2}) = ${max(num1, num2)}<br>
        equal(${num1}, ${num2}) = ${equal(num1, num2)}
    `;
    
    document.getElementById('task1-result').innerHTML = result;
}

// Задание 2: Переменные admin и name
function runTask2() {
    const name = "Александр";
    const admin = name;
    
    document.getElementById('task2-result').textContent = 
        `Значение переменной admin: "${admin}"`;
}

// Задание 3: Проверка возраста
function runTask3() {
    askAge();
}

function askAge() {
    let age;
    let confirmed = false;
    
    while (!confirmed) {
        age = prompt('Сколько вам лет?', '');
        
        if (age === null) {
            document.getElementById('task3-result').textContent = 
                'Вы отменили ввод возраста';
            return;
        }
        
        if (!/^\d+$/.test(age)) {
            alert('Пожалуйста, введите только цифры');
            continue;
        }
        
        confirmed = confirm(`Вы уверены, что вам ${age} лет?`);
        
        if (confirmed) {
            document.getElementById('task3-result').textContent = 
                `Подтвержденный возраст: ${age} лет`;
        } else {
            document.getElementById('task3-result').textContent = 
                'Повторная проверка возраста...';
        }
    }
}

// Задание 4: Стилизация страницы (резюме)
function changeLastName() {
    const newLastName = document.getElementById('new-last-name').value;
    if (newLastName.trim() !== '') {
        document.getElementById('resume-last-name').textContent = newLastName;
    } else {
        alert('Введите новую фамилию');
    }
}

function changeBackgroundColor() {
    const colors = ['#f8d5d5', '#d5f8e5', '#d5e5f8', '#f8f4d5', '#e9d5f8', '#ffffff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('resume-task').style.backgroundColor = randomColor;
}

// Задание 4: Взаимодействие со страницей (анкета)
function validateForm() {
    // Проверка имени
    const name = document.getElementById('user-name').value;
    if (!/^[a-zA-Zа-яА-Я\s]+$/.test(name)) {
        alert('Имя должно содержать только буквы');
        return;
    }
    
    // Проверка возраста
    const age = document.getElementById('user-age').value;
    if (!/^\d+$/.test(age) || parseInt(age) <= 0) {
        alert('Возраст должен быть положительным числом');
        return;
    }
    
    // Проверка пола
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        alert('Укажите ваш пол');
        return;
    }
    
    // Проверка навыков
    const skills = document.querySelectorAll('input[name="skills"]:checked');
    if (skills.length === 0) {
        alert('Укажите хотя бы один навык');
        return;
    }
    
    // Проверка образования
    const education = document.getElementById('education').value;
    
    // Проверка условий для принятия
    let isAccepted = false;
    const mathChecked = document.getElementById('math').checked;
    const programmingChecked = document.getElementById('programming').checked;
    
    // Условие 1: знание математики и программирования
    if (mathChecked && programmingChecked) {
        isAccepted = true;
    }
    
    // Условие 2: высшее образование и 2 любых навыка
    if (education === 'university' && skills.length >= 2) {
        isAccepted = true;
    }
    
    // Показать результат
    const resultText = isAccepted 
        ? 'Поздравляем! Вас приняли.' 
        : 'К сожалению, вы не подходите по критериям.';
    
    document.getElementById('result-text').textContent = resultText;
    document.getElementById('form-result').style.display = 'block';
    
    // Блокировка чекбоксов после отправки
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach(checkbox => {
        checkbox.disabled = true;
    });
}
