const myPromise = new Promise((resolve, reject) =>
	reject("error")
)

myPromise
	.then(result => console.log(result)) // resolve
	.catch(error => console.log(error))
