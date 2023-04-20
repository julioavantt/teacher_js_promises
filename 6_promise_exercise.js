const myPromise = new Promise((resolve, reject) =>
	setTimeout(() => {
		resolve("lazy")
	}, 10000)
)

myPromise.then(result => console.log(result))
