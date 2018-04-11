var items = [
	{ name: 'Xbox', price: 299 },
	{ name: 'PS4', price: 499 },
	{ name: 'iPhone', price: 999 }
]

var expensiveItems = items.filter(item => {
	return item.price > 300
})

var modifiedItems = expensiveItems.map(function (item) {
	return { name: item.name, price: `$betty${item.price}` }
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
