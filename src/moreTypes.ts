//

let response: any = "50";

// forceful type assertion
let numericLength: number = (response as string).length;

console.log("numericLength", numericLength);

//

type Player = {
  name: string;
};

// assume we're getting PlayerName from browser's localStorage and it is stored in object format , so we parse but what is gurantee that after parsing gets convert into string so we give refernce to typr which we want

let PlayerName = '{"name": "King Kohli"}';
let PlayerObject = JSON.parse(PlayerName) as Player;

console.log("player value", PlayerObject.name);

//

const data: unknown = "namaskara";
const strData: string = data as string;

// type assertion using inputElement

const inputElement = document.getElementById("name") as HTMLInputElement;

// trycatch error handling

try {
  // some block of code
} catch (
  error
  // while printing error people mostly give type of error as any but we should not do that
) {
  if (error instanceof Error) {
    console.error("error", error.message);
  }
  console.error("error", error);
}

// type -> never

type userRole = "admin" | "user" | 'superadmin';

function redirectUserTo(role: userRole): void {
  if (role === "admin") {
    console.log("going to main admin dashboard");
    return;
  }

  if (role === "user") {
    console.log("going to main login page");
    return;
  }
  //
  role;
}
