// let myArr= new Array('apple','banana','chiku','kiwi')    //declaring array by array constructor
// console.log(myArr)


// let myArr2=['cricket','football','hockey','basketball']
// console.log(myArr2)
// let myArr3=myArr2
// myArr3[4]='volyball' 

// console.log(myArr3)
// console.log(myArr2)    

//Changes made in 1 array happens in both the array


let arr2=['mango','banana','chiku','berry','avacado','cherry']
// console.log(arr2)
// console.log(arr2.length)               //length means total number of elements in array
// //console.log(arr2.push('watermelon'))     //returns the length of array

// arr2.pop()
// console.log(arr2)


// arr2.unshift('guava')
// console.log(arr2)

// arr2.shift()
// console.log(arr2)

// console.log(arr2.includes('mango'))
// console.log(arr2.indexOf('banana'))


/////////////////////////////////////////


console.log(arr2.join())           //converts all the elements of array into string

let arr3=['papaya','grapes','tomato']

/////////////////////////////////

// arr2.push(arr3)
// console.log(arr2)

///////////////////////////////////////////
arr2.concat(arr3)
console.log()       //this returns a new array and we have need to recieve that array         -important
                    //that means not mutate the original array
///////////////////////////////////

console.log(arr2.slice(1,3))
console.log(arr2)

//////////////////////////////////
console.log(arr2.splice(1,3))
console.log(arr2)

//////////////////////////////////////////


l -length
p -push
p -pop
u -unshift 
s -shift
c -concat
s -slice
sp -splice
i -includes
in -indexof
j -join                  //exact differnt to split in string
