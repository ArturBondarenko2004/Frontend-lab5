const image = document.getElementById("image");
const button = document.getElementById("button");

let click = 0;

button.addEventListener('click', function() {
	click++;
	if(click === 1){
		image.style.width = (image.width*2) + 'px';
		image.style.height = (image.height*2) + 'px';
	}
	if(click === 2){
		image.style.width = '';
		image.style.height = '';
		click = 0;
	}
})
