
//import from default export -> no single bracket;
//import from named export -> single bracket;
import Teacher, {helloWorld} from './teacher';

const teacher = new Teacher('Steve', 'Computer Science');

console.log(teacher);
console.log(helloWorld);
helloWorld();


//Binding this
/*
const person = {
    name: "Moss",
    walk() {
        console.log(this);
    }
};

const person1 = {
    name: "Thai",
    walk() {
        console.log(this);
    }
}

const walk = person.walk.bind(person1)
walk();
*/

/*
//Old Javascript
const oldJsSquare = function (number)
{
    return number * number;
};

//Arrow function
const square = number => number * number;

console.log(oldJsSquare(4));
console.log(square(3));

console.log('See this line');
*/

/*
const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id:3, isActive: false }
];

const activeJobs = jobs.filter(job => job.isActive);
console.log(jobs);
console.log(activeJobs);
*/

/*
const person = {
    
    talk()
    {
        setTimeout(() => {
                console.log('this', this);
            }, 1000);
    }
};

person.talk();
*/

/*
const colors = ['red', 'yellow', 'blue'];
const listColors = colors.map((color) => `<li>${color}</li>`);

console.log(listColors);
*/
 
//Object Destructing
// const address = {
//     street: '358 E 525 S',
//     city: 'Providence',
//     state: 'UT'
// };

//Instead of this
/*
const street = address.street;
const city = address.city;
const state = address.state;
*/

//We can do 
// const {street: str, city: c, state: st } = address;

//Alternatively
// const {street, city, state} = address;

// console.log(street);
// console.log(city);
// console.log(state);

//Spread Operator
// const first = [1, 2, 3];
// const second = [4, 5, 6];

//Old Javascript
//const combined = first.concat(second);

//Spread Operator ...
//const combined = [...first, ...second];

//We can also add new elements in-between or anywhere
//const combined = [0, ...first, 7, ...second];

//We can also use spread operator to clone an array
// const clone = [...first];
// console.log(first);
// console.log(clone);

//We can combine object if they don't share the same property
// const player = { firstname: 'Allison'};
// const player2 = { lastname: 'Becker'};

// const team = {...player, ...player2, position: 'GK'};

// console.log(team);

