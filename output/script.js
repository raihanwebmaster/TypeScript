let a;
let b;
let array = [];
let arayStringorNumber = [];
// let object: object;
let object;
let anyType;
let anyTypeOfArray;
let anyTypeOfObject;
let myFunction;
myFunction = () => {
    console.log("rahan");
};
const myFunc = (a, b) => {
    console.log(`Hello ${a} ${b}`);
};
myFunc("raihan", "uddin");
const myOptionValueFunction = (c) => {
    console.log("hello world");
};
// const userDetails = (id: string | number, user: { name: string; age: number }) => {
//     console.log(`Use id is ${id}, name is ${user.name} and age is ${user.age}`)
// };
const userDetails = (id, user) => {
    console.log(`Use id is ${id}, name is ${user.name} and age is ${user.age}`);
};
// const sayHello = (user: { name: string; age: number }) => {
//     console.log(`Hello ${user.age > 50 ? "Sir" : "Mir"} ${user.name}`)
// }
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mir"} ${user.name}`);
};
// Function Signatures
let signatures;
let add;
add = (a, b) => {
    return a + b;
};
let calculation;
calculation = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
// classes
class Players {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const mashrafi = new Players("Mashrafi", 40, "bangladesh");
const players = [];
players.push(mashrafi);
// access modifiers
class Cricket {
    //   public name: string;
    //   private age: number;
    //   readonly country: string;
    //   constructor(n: string, a: number, c: string) {
    //     this.name = n;
    //     this.age = a;
    //     this.country = c;
    //   }
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const Topmashrafi = new Cricket("Mashrafi", 40, "bangladesh");
const cricket = [];
cricket.push(Topmashrafi);
export {};
