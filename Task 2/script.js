const task2 = document.createElement("div");
document.body.appendChild(task2);

const task2Data = [
	{type: "checkbox", value:"gmail", labelText:"mountain@gmail.com"},
	{type: "checkbox", value:"gmail", labelText:"tree@gmail.com"},
	{type: "checkbox", value:"gmail", labelText:"world@gmail.com"},
	{type: "checkbox", value:"gmail", labelText:"cloud@gmail.com"},
	{type: "checkbox", value:"gmail", labelText:"river@gmail.com"},
	{type: "checkbox", value:"gmail", labelText:"wood@gmail.com"},
	{type: "checkbox", value:"gmail", labelText:"field@gmail.com"},
	{type: "checkbox", value:"gmail", labelText:"snow@gmail.com"},
	{type: "checkbox", value:"gmail", labelText:"rain@gmail.com"},
	{type: "checkbox", value:"gmail", labelText:"wind@gmail.com"},
];

 let checkboxContainer = document.createElement("div");
 task2.appendChild(checkboxContainer);
 const selectedVal = [];

 task2Data.forEach(elem =>{
 const checkboxWrap = document.createElement("div");
 const input = document.createElement("input");
 input.type = elem.type;
 input.value = elem.value;
 const labelText = document.createElement("label");
 labelText.textContent = elem.labelText;
checkboxWrap.appendChild(input);
checkboxWrap.appendChild(labelText);
checkboxContainer.appendChild(checkboxWrap);

input.addEventListener('change', function() {
	selectedVal.length = 0;
	const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]:checked');
   
	checkboxes.forEach(function(checkbox){
		const label = checkbox.nextElementSibling;
		if(label.tagName === "LABEL"){
			selectedVal.push(label.textContent)
		};
		result.innerText = selectedVal.join(";")
		if (checkboxes.length > 0) {
			document.body.classList.add("border");
		} else {
			document.body.classList.remove("border");
		}
	 });
   });
 });
 let result = document.createElement("p")
 task2.appendChild(result)