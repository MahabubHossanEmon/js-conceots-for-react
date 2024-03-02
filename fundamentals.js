//1. how to declare a variable using let and const
const fatherName ='tramp';
let season = 'rainy';
season='winter';
//2.condition
//6 basic condition  >,<,===,!==,<=,>=
// multiple conditions : &&,||

if(fatherName === 'tramp' || season === 'rainy'){

}
else if(fatherName === 'Tramp'){

}
else{

}


//3.array
//index,
//length,push,
const numbers = [89, 35, 98, 12];

//4.for loop
for(let i=0;i<numbers.length;i++){
    const number = numbers[i];
    confirm.log(number);
}

// 5.function

function multiply(num1,num2){
    const result = num1* num2;
    return result;
}
const output = multiply(23,45);

//6.object
// 3 ways to access property by name
const student = {
    name:'sakil khan',
    age:32,
    movies:['khan','dhakaia']
};

const myVariable = 'age';
console.log(student.age);  //direct by property
console.log(student['age']); //access via property name string
console.log(student[myVariable]); //access via property name in a variable