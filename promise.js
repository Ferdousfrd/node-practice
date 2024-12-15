const promise1 = new Promise((resolve, reject) => {
    console.log("Operation 24")     // the operation, could be anything like fetching data from api
    throw "err"                     // if something went wrong, operation couldnt start or something

    if (true) {
        resolve("Success")          // operation success
    }
    else {
        reject("Failed")            // operation failed
    }
})

promise1.then((val) => {            // succes
    console.log(val)
}).catch((err) => {                 // faile
    console.log(err)
}).finally(() => console.log("CleanUp"))        // gonna run either success or fail

