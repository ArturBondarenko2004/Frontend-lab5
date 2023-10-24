const gallery = document.getElementById('gallery');
const imageHt = [
  '/Task 8/car.jpeg',
  '/Task 8/car.jpeg',
  '/Task 8/car.jpeg',
  '/Task 8/car.jpeg',
  '/Task 8/car.jpeg',
  '/Task 8/car.jpeg',
  '/Task 8/car.jpeg',
  '/Task 8/car.jpeg',
  '/Task 8/car.jpeg',
  '/Task 8/car.jpeg',
  '/Task 8/car.jpeg',
  '/Task 8/car.jpeg',
  '/Task 8/car.jpeg',
  '/Task 8/car.jpeg',
  '/Task 8/car.jpeg',
  '/Task 8/car.jpeg',
];
let index = 0;
for (let row = 0; row < 4; row++) {
  const tableRow = document.createElement('tr');
  for (let col = 0; col < 4; col++) {
	 const tableCell = document.createElement('td');
	 const image = document.createElement('img');
	 image.src = imageHt[index];
	 image.alt = `Image ${index + 1}`;
	 image.classList.add('image', 'active');

	 image.addEventListener('click', () => {
		if (image.classList.contains('active')) {
		  image.classList.remove('active');
		  image.classList.add('inactive');
		} else {
		  image.classList.remove('inactive');
		  image.classList.add('active');
		}
	 });

	 tableCell.appendChild(image);
	 tableRow.appendChild(tableCell);
	 index++;
  }
  gallery.appendChild(tableRow);
}