const myPromise = new Promise((resolve, reject) => reject("error"))

myPromise
	.then(result => console.log(1, result)) // resolve
	.catch(error => console.log(2, error))
