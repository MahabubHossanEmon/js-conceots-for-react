//1.array destructuring 
const numbers = [42,65];
//const x = numbers[0];
//const y = numbers[1];
// const [x,y]=numbers;
const [x,y]=[42,65];
console.log(x,y);

//object destructuring
const {name,age} ={name:'abr matha' , age:12}

const employee = {
    id:'vs code',
    designation:'developer',
    machine:'mac',
    language:['html','css','js'],
    specification:{
        height:66,
        weight:67,
        address:'khoksa',
        drink:'dusto pani'
    }
}

const {machine, id}= employee;
const {weight, height}= employee.specification;
