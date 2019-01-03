// // datatype - Array

// const superHeroes = ['Iron man', 'Spider man', 'Capt. America', 'Thor']

// console.log(superHeroes)

// console.log(superHeroes[0], superHeroes[1])

// // superHeroes.length gives the length of array superHeroes

// console.log(superHeroes[superHeroes.length - 1])

// console.log(`We have ${superHeroes.length} heroes`)

// // above we have used special character ` (tilde)
// // its speciality in JS is that when we place a ${some operation}
// //  it works as a JS code


let numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

// numbers[1] = 'Something'

// console.log(numbers);

// start

// numbers.shift()
// console.log(numbers)

// console.log(numbers.shift());
// console.log(numbers)

// numbers.unshift('Something')
// console.log(numbers);


// ---------------------------------------------

// end

// numbers.pop()
// console.log(numbers);


// console.log(numbers.pop());
// console.log(numbers);

// numbers.push('Seven')
// console.log(numbers);

// ----------------------------------------------

// middle


// splice(position,no. of items,adding element)
numbers.splice(2, 1, 'Something')
console.log(numbers);
