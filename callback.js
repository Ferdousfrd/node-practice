
function task(cb) {          // cb is the callback func
    setTimeout(() => {
        cb(null, "data")    // first argument null means no error
    }, 0)
}

task((err, data) => {     // error is the first argument for our cb func
    if (err) {
        throw err
    } else {
        console.log("data", data)
    }
})

