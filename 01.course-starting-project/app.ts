enum ROLE {
  ADMIN,
  GUEST = 100,
}

const person: {
  name: string; // 문자열 타입
  age: number; // 숫자 티입
  male: boolean; // 불리언 타입
  role: ROLE; // ROLE 타입
  address: string[]; // Array(string) 타입
  etc: [number, string]; // Tuple([number, string]) 타입
  description: any;
} = {
  name: "tomas",
  age: 34,
  male: true,
  role: ROLE.ADMIN,
  address: ["street", "54-center"],
  etc: [33, "CENTER"],
  description: 30,
};

person.description = "Number And String abled property.";

if (person.role === ROLE.GUEST) {
}

let union: string | number;
union = "type of String";
union = 30;

/**
 *
 * @param input
 * @returns
 */
function unionType(input: string | number) {
  if (typeof input === "string") {
    return input.toLowerCase();
  } else {
    return input.toFixed(2);
  }
}

let reteral: "auther" | "guest";
reteral = "auther";

type UserCustom = string | number;
let userVariable: UserCustom;
let userVariable2: UserCustom;

/*
 *  void 타입
 */

function printResult(a1: number, a2: number) {
  console.log("result: " + (a1 + a2));
}

/*
 *  함수 타입
 */

function add(num1: number, num2: number) {
  return num1 + num2;
}

let function1: Function;
function1 = add;
function1 = printResult;

function1(2, 3);
function1();

let function2: (num1: number, num2: number) => number;
function2 = add;
// function2 = printResult;

/*
 *  unknown 타입
 */

let anyType: any;
let unknownType: unknown;

let anyValue: string;
let unknownValue: string;

anyValue = anyType;
// unknownValue = unknownType;
if (typeof unknownType === "string") unknownValue = unknownType;

/*
 *  never 타입
 */

function throwsFunction() {
  throw {
    message: "ERROR",
  };
}

function loopf(): never {
  while (true) {}
}
