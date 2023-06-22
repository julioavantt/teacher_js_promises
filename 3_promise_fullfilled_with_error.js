const myPromise = new Promise((resolve, reject) =>
	resolve("myPromise ok")
)

myPromise
	.then(result => {
		throw new Error("Tremendo error")
		console.log(result)
	})
	.catch(error => console.log(3, error))
