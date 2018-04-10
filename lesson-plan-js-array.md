# JS Array Methods Live Lecture

## forEach
### Overview
* Pull up the MDN documentation for the method [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * Go over the main parts of the docs - syntax,& description
    * Explain to them that forEach takes in a callback function as its parameter
    * The callback passed in also takes in as many as 3 arguments, although you will most likely only use the first 2 - currentValue and index
    * The first argument to the callback is the current element being processed in the array
### Live code example
* Pull up your code editor and create two files called `array.js`  and  `index.html`

  * Inside `index.html` code or copy/paste the following
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="index.css">

</head>

<body>
  <h1>My Items</h1>
  <ul id="items">
  </ul>
  <script src="array.js"></script>
</body>

</html>
```

* Inside `array.js` live code the following snippet and open the html file in your browser and open the console so the students can see the items logged

```js
var items = [{name: 'Xbox', price: 299}, {name: 'PS4', price: 499}, {name: 'iPhone', price: 999}];

items.forEach(function(item) {
  console.log(item);
});
```

* Assume we want to iterate over the items array and show them on the page…we could use forEach for that…make it a point that they are not required to know all of the following DOM methods…the focus is on the array method
```js
var items = [{ name: 'Xbox', price: 299 }, { name: 'PS4', price: 499 }, { name: 'iPhone', price: 999 }]

var itemsDiv = document.getElementById('items')

const itemsUl = document.getElementById('items')

modifiedItems.forEach(function(item) {
  const itemLi = document.createElement('li')
  const liText = document.createTextNode(`${item.name}: ${item.price}`)
  itemLi.appendChild(liText)
  itemsUl.appendChild(itemLi)
})
```

### Reasons to use
  * An alternative to for loops
  * You need to iterate over an array

### Ask if there are any questions regarding forEach

- - - -

## map
### Overview
* Pull up the MDN documentation for the method [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * Go over the main parts of the docs - syntax,& description
    * Explain to them that map takes in a callback function as its parameter
    * The callback passed in also takes in as many as 3 arguments, although you will most likely only use the first 2 - currentValue and index
    * The return value of map is a brand new array with each element being the result of the callback function
### Live code
* In your  `array.js`  use the previous example and ask “What if we wanted there to be a $ in front of the price and then present them on the page? Then code out the following under the current items array

```js
var items = [{ name: 'Xbox', price: 299 }, { name: 'PS4', price: 499 }, { name: 'iPhone', price: 999 }]

var modifiedItems = items.map(function(item){
  return {name: item.name, price: `$${item.price}`}
})

console.log(items)
console.log(modifiedItems)

var itemsDiv = document.getElementById('items')
modifiedItems.forEach(function(item) {
  var itemEl = document.createElement('li')
  var liText = document.createTextNode(`${item.name}: ${item.price}`)
  itemEl.appendChild(liText)
  itemsDiv.appendChild(itemEl)
});
```

### Reasons to use
  * You need to modify the elements of an array and return a new array

### Ask if there are any questions regarding map

- - - -

## filter
### Overview
* Pull up the MDN documentation for the method [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * Go over the main parts of the docs - syntax,& description
    * Explain to them that filter takes in a callback function as its parameter
    * The callback passed in also takes in as many as 3 arguments, although you will most likely only use the first 2 - currentValue and index
    * The return value of filter is a brand new array with each element that evaluates to a true expression inside the callback
### Live code
* In your  `array.js`  use the previous example and ask “What if we wanted to take the items and filter the ones that are priced above 300; and then present them on the page? Then code out the following under the current items array

```js
var items = [{ name: 'Xbox', price: 299 }, { name: 'PS4', price: 499 }, { name: 'iPhone', price: 999 }]

var expensiveItems = items.filter(item => {
  return item.price > 300
})

var modifiedItems = expensiveItems.map(function(item) {
  return { name: item.name, price: `$${item.price}` }
})

console.log(items)
console.log(expensiveItems)
console.log(modifiedItems)

var itemsUl = document.getElementById('items')

modifiedItems.forEach(function(item) {
  var itemLi = document.createElement('li')
  var liText = document.createTextNode(`${item.name}: ${item.price}`)
  itemLi.appendChild(liText)
  itemsUl.appendChild(itemLi)
})

```

### Reasons to use
  * You need to select a subset of items in an existing array and group them in a new array

### Ask if there are any questions regarding filter

- - - -

## reduce
### Overview
* Pull up the MDN documentation for the method [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
  * Go over the main parts of the docs - syntax,& description
    * Explain to them that reduce takes in a callback function and
    * The callback passed in also takes in as many as 4 arguments, although you will most likely only use the first 2 - accumulator and currentValue
    * The return value of reduce is a single value equal to the accumulator
### Live code
* In your  `array.js`  use the previous example and ask “What if we wanted to calculate the average price of the items and then display it on the page? Then code out the following under the current items array

```js
var items = [{ name: 'Xbox', price: 299 }, { name: 'PS4', price: 499 }, { name: 'iPhone', price: 999 }]

var expensiveItems = items.filter(item => {
  return item.price > 300
})

var modifiedItems = expensiveItems.map(function(item) {
  return { name: item.name, price: `$${item.price}` }
})

console.log(items)
console.log(expensiveItems)
console.log(modifiedItems)

var itemsUl = document.getElementById('items')

modifiedItems.forEach(function(item) {
  var itemLi = document.createElement('li')
  var liText = document.createTextNode(`${item.name}: ${item.price}`)
  itemLi.appendChild(liText)
  itemsUl.appendChild(itemLi)
})

var totalPrice = items.reduce(function(total, item) {
  return total + item.price
}, 0)

var averagePrice = totalPrice / items.length

var averageEl = document.getElementById('average-price')
averageEl.append(`$${averagePrice}`)

console.log(averageEl)

```

### Why would you use this method?
  * You need to drill down a single value from an array of items.

### Ask if there are any questions regarding reduce