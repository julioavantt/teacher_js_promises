const myPromise = new Promise((resolve, reject) =>
	resolve("myPromise ok")
)

myPromise
	.then(result => console.log(result))
	.catch(error => console.log(error))
	.finally(() => console.log("❤️ Me amo"))
