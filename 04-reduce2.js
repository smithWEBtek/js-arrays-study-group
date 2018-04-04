var items = [{ name: 'Xbox', price: 299 }, { name: 'PS4', price: 499 }, { name: 'iPhone', price: 999 }]

var expensiveItems = items.filter(item => {
	return item.price > 300
})

var modifiedItems = expensiveItems.map(function (item) {
	return { name: item.name, price: `$${item.price}` }
})

console.log(items)
console.log(expensiveItems)
console.log(modifiedItems)

var itemsUl = document.getElementById('items')

modifiedItems.forEach(function (item) {
	var itemLi = document.createElement('li')
	var liText = document.createTextNode(`${item.name}: ${item.price}`)
	itemLi.appendChild(liText)
	itemsUl.appendChild(itemLi)
})

var totalPrice = items.reduce(function (total, item) {
	return total + item.price
}, 0)

var averagePrice = totalPrice / items.length

var averageEl = document.getElementById('average-price')
averageEl.append(`$${averagePrice}`)

console.log(averageEl)
