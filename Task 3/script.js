// Створюємо елементи
const h1 = document.createElement('h1');
h1.textContent = 'Таблиця множення';
document.body.appendChild(h1);

const scoreElement = document.createElement('p');
scoreElement.textContent = 'Загальний рахунок: 0';
document.body.appendChild(scoreElement);

const taskElement = document.createElement('p');
taskElement.textContent = 'Завдання: ';
document.body.appendChild(taskElement);

const form = document.createElement('form');
form.id = 'quizForm';
document.body.appendChild(form);

for (let i = 1; i <= 4; i++) {
    const input = document.createElement('input');
    input.type = 'radio';
    input.id = `option${i}`;
    input.name = 'answer';
    form.appendChild(input);

    const label = document.createElement('label');
    label.htmlFor = `option${i}`;
    label.id = `label${i}`;
    form.appendChild(label);
    form.appendChild(document.createElement('br'));
}

const checkButton = document.createElement('button');
checkButton.type = 'button';
checkButton.id = 'checkButton';
checkButton.textContent = 'Перевірити';
form.appendChild(checkButton);

const resultElement = document.createElement('p');
resultElement.id = 'result';
document.body.appendChild(resultElement);

// Опишемо питання та відповіді
const questions = [
    { question: '2 x 2', options: ['4', '6', '8', '10'], answer: '4' },
    { question: '3 x 5', options: ['8', '10', '12', '15'], answer: '15' },
    { question: '7 x 9', options: ['56', '63', '72', '81'], answer: '63' },
    { question: '6 x 8', options: ['36', '42', '48', '54'], answer: '48' },
];

let currentQuestionIndex = 0;
let score = 0;

// Завантажуємо перше питання
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    taskElement.textContent = `Завдання: ${currentQuestion.question}`;
    for (let i = 1; i <= 4; i++) {
        const option = document.getElementById(`option${i}`);
        const label = document.getElementById(`label${i}`);
        option.value = `option${i}`;
        label.textContent = `Відповідь ${i}: ${currentQuestion.options[i - 1]}`;
    }
}

// Перевірка відповіді та завантаження наступного питання
// Перевірка відповіді та завантаження наступного питання
function checkAnswer() {
	const selectedAnswer = document.querySelector('input[name="answer"]:checked');
	if (!selectedAnswer) {
		 alert('Будь ласка, виберіть відповідь.');
		 return;
	}

	const userAnswer = selectedAnswer.nextSibling.textContent.split(': ')[2];
	const correctAnswer = questions[currentQuestionIndex].answer;
	if (userAnswer === correctAnswer) {
		 score++;
	}

	currentQuestionIndex++;
	if (currentQuestionIndex < questions.length) {
		 loadQuestion();
	} else {
		 showResult();
	}
}


// Відображення результату
function showResult() {
    scoreElement.textContent = `Загальний рахунок: ${score} з ${questions.length}`;
    form.style.display = 'none';

    if (score === questions.length) {
        resultElement.textContent = 'Вітаємо! Ви відповіли правильно на всі питання.';
    } else {
        resultElement.textContent = `Ви відповіли правильно на ${score} з ${questions.length} питань.`;
    }
}

// Початкова загрузка питання та налаштування подій
loadQuestion();
document.getElementById('checkButton').addEventListener('click', checkAnswer);
