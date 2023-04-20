console.log("before promise")

const myPromise = new Promise((resolve, reject) =>
	resolve("myPromise ok")
)

myPromise.then(result => console.log(result))

console.log("after promise")
