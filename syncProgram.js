console.log("Hello!")

function intro(handshakeTime){
    const startTime = new Date().getTime()
    console.log(startTime)
    console.log("Shake starts!")
    while(new Date().getTime() < startTime + handshakeTime){
        console.log(new Date().getTime())
    }
    console.log("Handshake done!")
}

intro(10)

console.log("SAY ILU!")