//this operator splits all the elements of array in individual element

let fruits=['banana','mango','chiku','berry']
let animals=['cow','buffelo','goat']
console.log(...fruits)
let livings= [...fruits,...animals]
console.log(livings)

/////////////////////////////////////////////////

let obj1={
    name:'pankaj',
    surname:'ghagare',
    fathersname:'vishnu'
}

let obj2={
    marks:345,
    college:'dyp'
}

let obj3={...obj1,...obj2}

console.log(obj3)

/////////////////////////////////////////////