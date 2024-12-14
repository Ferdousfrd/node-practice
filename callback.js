console.log("Starting")

function task(func){
    console.log("task started")
    setTimeout(func, 1)

}

task(function callback(){
    console.log(name)
})

const name = "ferdouse"

console.log("Ended")