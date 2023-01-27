
let name: string;
let age:number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

type Person = {
    name:string,
    age?:number;
}

interface Guy extends Person{
    profession:string;
}

const person:Person = {
    name:"Victor"
}

let printName: (name:string) => number; 

const A_datatypes = () => {
  return (
    <div>{person.name}</div>
  )
}

export default A_datatypes