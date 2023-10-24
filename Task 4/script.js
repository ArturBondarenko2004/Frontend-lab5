
  let score = 0
  let index = 0;


  let currentTask = randomAnswer();
  function taskQue() {
	 const taskElement = document.getElementById("taskQuest");
	 taskElement.textContent = currentTask.task;
  }

  function randomAnswer() {
	 const num1 = Math.floor(Math.random() * 10) + 1;
	 const num2 = Math.floor(Math.random() * 10) + 1;
	 const result = num1 * num2;
	 return {
		task: `${num1} x ${num2} = `,
		answer: result,
	 };
  }

  function checkAnswer() {
	 const userAnswer = parseInt(document.getElementById("answer").value, 10);
	 const resultElement = document.getElementById("result");
	 index++;
	 if (userAnswer === currentTask.answer) {
		resultElement.textContent = "Красава!";
		score++;
		
	 } else {
		resultElement.textContent = `Фу, жахливо!! Правильна відповідь ${currentTask.answer}`;
	 }
	 document.getElementById("score").textContent = score;

	 if(index === 3){
		alert(`Правильних відповідей ${score} з десяти`);
	 }
  }
  document.getElementById("checkButton").addEventListener("click", () => {
	 checkAnswer();
  });
  document.getElementById("nextButton").addEventListener("click", () => {
	 currentTask = randomAnswer();
	 document.getElementById("answer").value = "";
	 document.getElementById("result").textContent = "";
	 taskQue();
  });
  taskQue();