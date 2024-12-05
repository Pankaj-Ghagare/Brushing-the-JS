let myobj1={ name1:'thor',age:99,city:'new york',isvillain:true,teammates:['danger','poison']}

console.log(myobj1.name1)
console.log(myobj1["name1"])

////////////////////////////////////////////

myobj1.age=34
console.log(myobj1.age)

/////////////////////////////

//Object.freeze(myobj1)         //freezes the object so value in the object canot be change

/////////////////////////////////////////////////////////

myobj1.sayhello=function ()
{
    console.log('hello')
}

console.log(myobj1.sayhello)

myobj1.sayhello()

console.log(myobj1.sayhello())   // note: if both the function are consoling the o/p then both o/p will print bt 2nd output give result as undifined

////////////////////////////////////

//Q. How to merge 2 objects

let myObj2={mname:'avenger',collection:'2cr'}

// let myobj3={myobj1,myObj2}                   //wrong
// console.log(myobj3)

myObj2= Object.assign(myobj1,myObj2)
console.log(myObj2)

let myobj3={...myObj2,...myobj1}
console.log(myobj3)


/////////////////////////////////////////////////////////////////////////

let objectkeys=Object.keys(myobj3)          //returns the array of keys in object
console.log(objectkeys)


/////////////////////////////////////////////////////////////////////

let objectvalues=Object.values(myobj3)
console.log(objectvalues)                //returns the array of values in object


/////////////////////////////////////////////////////////////



// a -assign    merge 2 objects into 1 object      similar to concat in array
// k - keys     returns the array of keys in object
// v - values    returns the array of value in object