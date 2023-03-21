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

function unionType(input: string | number) {
  if (typeof input === "string") {
    return input.toLowerCase();
  } else {
    return input.toFixed(2);
  }
}
