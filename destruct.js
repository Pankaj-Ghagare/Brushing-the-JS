let obj1={
    name:'pankaj',
    ageOfperosn:24,
    college:'dyp',
    city:'pune'
}


//let {age}=obj1
let {ageOfperosn:age}=obj1
let {college}=obj1

console.log(age,college)


//Q.How to impliment object destructuring in function

let givedata=function({age})
{
    console.log(age)
}

givedata(obj1)