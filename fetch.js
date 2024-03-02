const student = {
    name:'sakil khan',
    age:30,
    movies:['king khan','dhakaia']
}
//1 JSON
const studentJSON =JSON.stringify(student);
console.log(student);
console.log(studentJSON);
const studentObj =JSON.parse(studentJSON);
console.log(studentObj);

//2. fetch
fetch('url')
.then(res => res.json())
.then(data => console.log(data));

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

//for of an array like object e use korbo
//loop on an object from an array
