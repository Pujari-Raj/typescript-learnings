//Type Inferencing in TypeScript

let player = "Virat Kohli";
// player = 25 // we cannot do this because we have already declared player as string and we're declaring player as number now

// Type Annotations in TypeScript
let age: number = 22;
// age = 'test' /* we cannot do this because we have already declared age as number and we're declaring player as string now*/

// unions in TypeScript

let subscribers: number | string = "1 Million";

// creating custom datatype

let apiRequestStatus: "pending" | "success" | "error" = "pending";
console.log("apiRequestStatus", apiRequestStatus);

// apiRequestStatus  = 'done' /** we cannot assign another value from we have defined above */

// if we're not sure about which datatype our variable will have we give options and that is called as union in TypeScript

const jerseyNumbers = ["10", "18", "24"];

let kingJerseyNumber: string | undefined; // we can assign a undefined , any , null in TypeScript

for (const jersey of jerseyNumbers) {
  if (jersey === "18") {
    kingJerseyNumber = jersey;
    break;
  }
}

console.log("kingJerseyNumber", kingJerseyNumber);

// any type in ts - any is a special TypeScript type that turns OFF type checking for a variable

let value: any;

// value.toUpperCase();

value = 10;
value = "ten";
value = true;
value = { name: "string" };

let data: unknown;

data = "hello";

// data?.toUpperCase();/ // error

// type gurading
if (typeof data === "string") {
  // type narrowing
  data.toUpperCase();
  console.log("data", data);
}

console.log("data", data);

// diff between any and unknown

// 1. using any
let userInput: any;

userInput = "hello";

console.log(userInput?.toUpperCase()); //

userInput = 201;

console.log(userInput.toString());

// console.log('converting number',userInput?.toUpperCase()); // ❌ Runtime crash (but TS didn't warn you)

// using unkown

let endUserInput: unknown;

endUserInput = "MORNING";

// Type gurading, checking type of field before using it with functions
if (typeof endUserInput === "string") {
  console.log(endUserInput?.toUpperCase()); //✅ Safe
}

endUserInput = 250;
if (typeof endUserInput === "string") {
  console.log('converting number to string',endUserInput?.toUpperCase()); // No crash, no risk
}
