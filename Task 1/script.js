////////////////// TASK 1 //////////////\
let task1 = document.createElement("div");
task1.classList.add("task1");
document.body.appendChild(task1);

let task1Data = [
	{ type: "checkbox", value: "ua", textLabel: "Ukrainian", name: "selectLang" },
	{ type: "checkbox", value: "eng", textLabel: "English", name: "selectLang" },
	{ type: "checkbox", value: "sp", textLabel: "Spanish", name: "selectLang" },
];

let checkboxesContainer = document.createElement("div");
task1.appendChild(checkboxesContainer);

task1Data.forEach(elem => {
	const checkboxWrapper = document.createElement("div");
	const input = document.createElement("input");
	input.type = elem.type;
	input.value = elem.value;
	input.name = elem.name;
	const label = document.createElement("label");
	label.textContent = elem.textLabel;
	checkboxWrapper.appendChild(input);
	checkboxWrapper.appendChild(label);
	checkboxesContainer.appendChild(checkboxWrapper);
});

let createButton = document.createElement("button");
createButton.textContent = "OK";
task1.appendChild(createButton);

let resultP = document.createElement("p");
task1.appendChild(resultP);

createButton.addEventListener('click', function() {
	let selectedVal = [];
	const checkboxes = task1.querySelectorAll('input[type="checkbox"]');
	checkboxes.forEach(function(checkbox) {
		if (checkbox.checked) {
			selectedVal.push(checkbox.value);
		}
		resultP.innerHTML = selectedVal.join(',');
		
	});
});

