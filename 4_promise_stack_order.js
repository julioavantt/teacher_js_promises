console.log("before promise")

const myPromise = new Promise((resolve, reject) =>
	resolve("myPromise ok")
)

console.log(myPromise)

myPromise.then(result => console.log(1, result))

console.log("after promise")
