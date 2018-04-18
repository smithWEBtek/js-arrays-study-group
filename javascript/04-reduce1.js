const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// const reducer = (accumulator, currentValue) => {
// 	return accumulator + currentValue;
// }

const totaler = (accumulator, currentValue) => {
	return accumulator + currentValue;
}

const multiplier = (accumulator, currentValue) => {
	return accumulator * currentValue;
}

// 1 + 2 + 3 + 4
console.log('[totaler]', array1.reduce(totaler));

// console.log(array1.reduce(totaler));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log('[multiplier]', array1.reduce(multiplier));
// expected output: 15



// array1.forEach((element, index) => {
// 	console.log(element);
// 	console.log(index);
// })