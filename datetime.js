// let birthDate= new Date()
// console.log(birthDate)

// console.log(birthDate.toDateString())
// console.log(birthDate.toLocaleString())
// console.log(birthDate.toString())
//console.log(birthDate.getTime())       //return milliseconds value of current time 


////////////////////

// console.log(birthDate.getDay())
// console.log(birthDate.getMonth())
// console.log(birthDate.getHours())


// let timenow= Date.now()
// console.log(timenow)    //returns milisecond value from 1 jan 1970
// console.log(timenow/1000)    //returns second value from 1 jan 1970

//convert milliseconds value into seconds

let currTime= Date.now()
console.log(currTime)
console.log(Math.round((currTime/1000)))
