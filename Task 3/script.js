let index = 0;
let score = 0;
const questions = [
	{
	  task: "3 x 3 = ?",
	  options: {
		 optionA: 6,
		 optionB: 8,
		 optionC: 9,
	  },
	  correctAnswer: "optionC",
	},
	{
	  task: "5 x 5 = ?",
	  options: {
		 optionA: 30,
		 optionB: 25,
		 optionC: 12,
	  },
	  correctAnswer: "optionB",
	},
	{
		task: "8 x 8 = ?",
		options: {
		  optionA: 30,
		  optionB: 28,
		  optionC: 64,
		},
		correctAnswer: "optionC",
	 },
	 {
		task: "3 x 7 = ?",
		options: {
		  optionA: 21,
		  optionB: 28,
		  optionC: 12,
		},
		correctAnswer: "optionA",
	 },
	 {
		task: "5 x 6 = ?",
		options: {
		  optionA: 30,
		  optionB: 28,
		  optionC: 12,
		},
		correctAnswer: "optionA",
	 },
	 {
		task: "7 x 7 = ?",
		options: {
		  optionA: 30,
		  optionB: 28,
		  optionC: 49,
		},
		correctAnswer: "optionC",
	 }
 ];
 function taskQue() {
	const question = questions[index];
	const taskElement = document.getElementById("taskQue");
	const optionAElement = document.getElementById("optionA");
	const optionBElement = document.getElementById("optionB");
	const optionCElement = document.getElementById("optionC");
	taskElement.textContent = question.task;
	optionAElement.textContent = question.options.optionA;
	optionBElement.textContent = question.options.optionB;
	optionCElement.textContent = question.options.optionC;
 }
 function checkAnswer() {
	const selectedAnswer = document.querySelector('input[name="answer"]:checked');
	if (!selectedAnswer) {
	  return;
	}
	const userAnswer = selectedAnswer.value;
	const question = questions[index];
	if (userAnswer === question.correctAnswer) {
	  score++;
	  document.getElementById("result").textContent = "Вау, клас!!!!!!Відповідь правильна!";
	} else {
	  document.getElementById("result").textContent = "Відповідь зовсім не правильна.А от вірна така: " + question.options[question.correctAnswer];
	}
	document.getElementById("score").textContent = score;
	document.querySelector('input[name="answer"]:checked').checked = false;
	document.getElementById("checkButton").disabled = true;
	document.getElementById("nextButton").disabled = false;
 }
 document.getElementById("checkButton").addEventListener("click", checkAnswer);
 document.getElementById("nextButton").addEventListener("click", () => {
	index++;
	if (index < questions.length) {
	  taskQue();
	  document.getElementById("result").textContent = "";
	  document.getElementById("checkButton").disabled = false;
	  document.getElementById("nextButton").disabled = true;
	} else {
	  alert("Кінець. Загальний рахунок: " + score) + "правильних відповіденй з 6";
	}
 });
 taskQue();