const myPromise = new Promise((resolve, reject) =>
	reject("myPromise error")
)

myPromise
	//.then(result => console.log(result))
	.catch(error => console.log(error))
