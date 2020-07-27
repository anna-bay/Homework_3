/////////////////////////////////////recursive factorial
const recursive_factorial = (n) => {
	if (n==1) {
		return 1
	}
 
 	return n*recursive_factorial(n-1)

}
console.log(recursive_factorial(3))

////////////////////////////////////////// recursive sum_factorial
const recursive_sum_factorial = (n) => {
	let sum = 0
	for (let i = 1; i <= n; i++) {
		sum += recursive_factorial(i)
	}
	return sum 
 
}
console.log(recursive_sum_factorial(3))


/////////////////////////////////////Fibonachi
const fibonachi = (n) => {
	
let fibonachi_numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21]

	for (let i = 0; i < fibonachi_numbers.length; i++) {
		 if (n==0) {
		 	return 0
		 }
		 else if (n==1) {
		 	return 1
		 }
	}
		 return fibonachi_numbers[n-2] + fibonachi_numbers[n-1]

}
console.log(fibonachi(4))

//////////////////////////////////////////////////Recursive_fibonachi
const recursive_fibonachi = (n) => {
	if (n==0) {
		 	return 0
		 }
	else if (n==1) {
		 	return 1
		 }
	return recursive_fibonachi(n-2) + recursive_fibonachi(n-1)
}
console.log(recursive_fibonachi(7))

////////////////////////////////////Prime Number


// const isPrime = (n) => {
// 	if (n<=1 || n%2 == 0 || n == NaN) {
// 		return false
// 	}
	
// 	if () {
// 		return true
// 	}
	
// }

// console.log(isPrime(5))

//////////////////////////////count number of substring in a string
const countSubString = (basestring, charstring) => {
	let arr = []
	let str = basestring.split("")
	// console.log(str)
	for (let i = 0; i < str.length; i++) {
		if (str[i] == charstring) {
			arr.push(str.indexOf(str[i]))
		
		}
		return arr
	}

			return false

}
console.log(countSubString("Hello", "l"))

////////////////////////////////////Square Array

const squareArray = (arr) =>{
	
	return arr.map(element => element * element)
	
}
console.log(squareArray([1,2,3]))





