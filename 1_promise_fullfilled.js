const myPromise = new Promise((resolve, reject) =>
	resolve("myPromise ok")
)

myPromise.then(result => console.log(result))

