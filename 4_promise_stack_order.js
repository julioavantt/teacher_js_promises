console.log("before promise") // 1

const myPromise = new Promise((resolve, reject) =>
	resolve("myPromise ok")
)

console.log(myPromise) // 4 // 2

myPromise.then(result => console.log(1, result)) // 3 // 4

console.log("after promise") // 3
