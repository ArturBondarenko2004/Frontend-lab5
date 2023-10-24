const productsData = [
	{ name: 'Брюки' },
	{ name: 'Сорочка' },
	{ name: 'Шорти' },
	{ name: 'ТУфлі' },
	{ name: 'Пес' },
	{ name: 'шануріна' }
];
const productList = document.getElementById('product-list');
productsData.forEach(product => {
	const row = document.createElement('tr');
	const nameCell = document.createElement('td');
	nameCell.textContent = product.name;
	const buttonCell = document.createElement('td');
	const addButton = document.createElement('button');
	addButton.classList.add('addProduct');
	addButton.textContent = 'Замовити';
	addButton.setAttribute('name', product.name);
	buttonCell.appendChild(addButton);
	row.appendChild(nameCell);
	row.appendChild(buttonCell);
	productList.appendChild(row);
});

const addButton = document.querySelectorAll('.addProduct');
const cart = document.querySelector('.cart tbody');
const item = {};

addButton.forEach(button => {
	button.addEventListener('click', () => {
		const productName = button.getAttribute('name');

		if (item[productName]) {
			item[productName]++;
		} else {
			item[productName] = 1;
		}
		updateCart();
	});
});

function updateCart() {
	cart.innerHTML = '';

	for (const productName in item) {
		const cartItem = document.createElement('tr');

		const nameCell = document.createElement('td');
		nameCell.textContent = productName;
		const quantityCell = document.createElement('td');
		quantityCell.textContent = item[productName];
		cartItem.appendChild(nameCell);
		cartItem.appendChild(quantityCell);
		cart.appendChild(cartItem);
	}
}

const resetButton = document.querySelector('.reset-cart');
resetButton.addEventListener('click', () => {
	for (const productName in item) {
		delete item[productName];
	}
	updateCart();
});
