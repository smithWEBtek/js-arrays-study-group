
var items = [
	{ name: 'Xbox', price: 299 },
	{ name: 'PS4', price: 499 },
	{ name: 'iPhone', price: 999 }
];

var itemsDiv = document.getElementById('items')
var itemsUl = document.getElementById('items')


console.log('[Brads items]', items)
console.log('[itemsUl]', itemsUl);
console.log('[itemsDiv]', itemsDiv);

items.forEach(function (item) {
	const itemLi = document.createElement('li')
	const liText = document.createTextNode(`${item.name}: ${item.price}`)
	itemLi.appendChild(liText)
	itemsUl.appendChild(itemLi)
})







var animalsDiv = document.getElementById('animals')
var animalsUl = document.getElementById('animals')
var modifiedAnimals = animals.map(function (animal) {
	return { name: animal.name, species: `${animal.species}` }
})

animals.forEach(function (animal) {
	const animalLi = document.createElement('li')
	const liText = document.createTextNode(`${animal.name}: ${animal.species}`)
	animalLi.appendChild(liText)
	animalsUl.appendChild(animalLi)
})
