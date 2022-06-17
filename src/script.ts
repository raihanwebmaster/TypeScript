let a: string;

let b: number;

let array: string[] = [];
let arayStringorNumber: (string | number)[] = [];

// let object: object;
let object: {
  name: string;
  age: number;
  adult: boolean;
};

let anyType: any;

let anyTypeOfArray: any[];

let anyTypeOfObject: {
  name: any;
  age: any;
};

let myFunction: Function;
myFunction = () => {
  console.log("rahan");
};
const myFunc = (a: string, b: string) => {
  console.log(`Hello ${a} ${b}`);
};

myFunc("raihan", "uddin");

const myOptionValueFunction = (c?: string) => {
  console.log("hello world");
};

// Type Aliases
type stringOrNum = string | number;
type usertype = { name: string; age: number };

// const userDetails = (id: string | number, user: { name: string; age: number }) => {
//     console.log(`Use id is ${id}, name is ${user.name} and age is ${user.age}`)
// };
const userDetails = (id: stringOrNum, user: usertype) => {
  console.log(`Use id is ${id}, name is ${user.name} and age is ${user.age}`);
};
// const sayHello = (user: { name: string; age: number }) => {
//     console.log(`Hello ${user.age > 50 ? "Sir" : "Mir"} ${user.name}`)
// }
const sayHello = (user: usertype) => {
  console.log(`Hello ${user.age > 50 ? "Sir" : "Mir"} ${user.name}`);
};

// Function Signatures
let signatures: (x: string, y: string) => void;
let add: (x: number, y: number) => number;

add = (a: number, b: number) => {
  return a + b;
};

let calculation: (x: number, y: number, z: string) => number;
calculation = (a: number, b: number, c: string) => {
  if (c === "add") {
    return a + b;
  } else {
    return a - b;
  }
};

// classes

class Players {
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}

const mashrafi = new Players("Mashrafi", 40, "bangladesh");
const players: Players[] = [];

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
  constructor(
    public name: string,
    private age: number,
    readonly country: string
  ) {}

  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}

const Topmashrafi = new Cricket("Mashrafi", 40, "bangladesh");
const cricket: Cricket[] = [];

cricket.push(Topmashrafi);

//Module System
import { Player } from "./classes/Player.js";


//interfaces object
interface RectangleOptions {
  width: number;
  length: number;
}

function drawRectangle(options: RectangleOptions) {
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
}

drawRectangle(threeDdoptions);


// interfaces classes

import { IsPlayer } from "./interfaces/IsPlayer.js";
let hola: IsPlayer;

hola = new Players("Mashrafi", 40, "bangladesh");





//GENERICS

const addID = <T extends object>(obj: T) => {
  let id = Math.floor(Math.random() * 100)
  return { ...obj, id };
}

let user = addID({
  name: "raihan",
  age: 24,
})

user.age;


interface APIResponse<T> {
  status: number;
  type: string;
  data: T;
}

const reponse1: APIResponse<object> = {
  status: 200,
  type: 'good',
  data: {
    name: 'raihan',
    something: 300,
  }
}

// const reponse02: APIResponse = {
//   status: 200,
//   type: "good",
//   data: {
//     name: "raihan",
//     something: 300,
//   },
// };



// ENUM Types
enum ResponseType { SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN };

interface APIResponse2<T> {
  status: number;
  type: ResponseType;
  data: T;
}

const reponse2: APIResponse2<object> = {
  status: 200,
  type: ResponseType.FAILURE,
  data: {
    name: "raihan",
    something: 300,
  },
};



// Tuples


let tuples = [3, 'hello', { p: 3 }];
let tuplesType: [number, string, object] = [4, 'world', {p: 1}];





