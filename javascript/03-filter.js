
var items = [
	{ name: 'Xbox', price: 299 },
	{ name: 'PS4', price: 499 },
	{ name: 'iPhone', price: 999 },
	{ name: 'Headset', price: 124 }
];

const groceries = [
	{ name: 'Bread', price: 1.99 },
	{ name: 'Eggs', price: 2.99 },
	{ name: 'Milk', price: 2.49 },
	{ name: 'Batteries', price: 9.99 }
];

var expensiveItems = items.filter(item => {
	return item.price > 300
})

var modifiedItems = expensiveItems.map(function (item) {
	return { name: item.name, price: `$${item.price}` }
})

console.log('items original', items)
console.log('expensive!', expensiveItems)
console.log('modifiedItems', modifiedItems)

var itemsUl = document.getElementById('items')

modifiedItems.forEach(function (item) {
	var itemLi = document.createElement('li')
	var liText = document.createTextNode(`${item.name}: ${item.price}`)
	itemLi.appendChild(liText)
	itemsUl.appendChild(itemLi)
})
