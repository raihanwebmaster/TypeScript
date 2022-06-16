let a: string;

let b: number;

let array: string[] = [];
let arayStringorNumber: (string | number)[] = []

// let object: object;
let object: {
    name: string,
    age: number,
    adult: boolean
};

let anyType: any;

let anyTypeOfArray: any[];

let anyTypeOfObject: {
    name: any,
    age: any,
}


let myFunction: Function;
myFunction = () => {
    console.log('rahan')
}
const myFunc = (a: string, b:string) => {
    console.log(`Hello ${a} ${b}`)
}

myFunc('raihan', 'uddin')

const myOptionValueFunction = (c?: string) => {
    console.log('hello world')
}





