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
function drawRectangle(options) {
    let width = options.width;
    let length = options.length;
}
drawRectangle({
    width: 30,
    length: 40,
});
let threeDdoptions = {
    width: 30,
    length: 40,
    height: 10,
};
drawRectangle(threeDdoptions);
let hola;
hola = new Players("Mashrafi", 40, "bangladesh");
//GENERICS
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: "raihan",
    age: 24,
});
user.age;
const reponse1 = {
    status: 200,
    type: 'good',
    data: {
        name: 'raihan',
        something: 300,
    }
};
// const reponse02: APIResponse = {
//   status: 200,
//   type: "good",
//   data: {
//     name: "raihan",
//     something: 300,
//   },
// };
// ENUM Types
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["SUCCESS"] = 0] = "SUCCESS";
    ResponseType[ResponseType["FAILURE"] = 1] = "FAILURE";
    ResponseType[ResponseType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    ResponseType[ResponseType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(ResponseType || (ResponseType = {}));
;
const reponse2 = {
    status: 200,
    type: ResponseType.FAILURE,
    data: {
        name: "raihan",
        something: 300,
    },
};
export {};
