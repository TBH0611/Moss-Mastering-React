import { Person } from './person';

//named export
export function helloWorld(){
    console.log("Hello");
}

//default export
export default class Teacher extends Person {
    
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }
}


