// typescript files can't be executed in browsers
const a = "1";
const hello = "world";

// type stays consistent for each variable defined
let bye: string = "world"; // var bye is of type string

// functions
// specify type of parameters as well as what is returned
const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
}
console.log(getFullName("syasya", "azman"));

// objects
const user1: {name: string, age: number} = {
    name: "syasya",
    age: 21
};

// interfaces
// gives autocomplete of properties !
interface User {
    name: string;
    age?: number; // question mark means non-compulsory
};

const user2: User = {
    name: "syafiq", age: 18
};

// functions in interfaces
// name interfaces and classes differently !
// remember, interface is a contract so can have abstract methods
interface FamilyInterface {
    memberOne: string;
    memberTwo: string;
    memberThree?: string;
    getMoney(): number;
}

// types and properties
// recommended to use default values for variables
let username: string = "alex";
let pageName: string | number = "1"; // union operator for values of diff types
let errorMessage: string | null = null; // set by default null

// type aliases and unions
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface UserInterface {
    id: ID;
    name: string;
    surname: string;
}

let user3: UserInterface | null = null;

// for better readability and compartmentalisation
const popularTags: PopularTag[] = ['dragon', 'coffee'];
const dragonsTag: MaybePopularTag = null;

// any/void/never/unknown
// void is a set of undefined and null
const doSomething = (): void => {
    console.log("do something");
}

let foo: any = "foo"; // silver bullets for all your problems ...

const doNothing = (): never => {
    // function that never ends
    throw "never";
}

let unknown: unknown = 10; // cannot assign unknown directly in another type

// type assertion / type casting
// let s2: string = (string) unknown;
let s3: string = unknown as string;

// working with DOM
let page: any = "1";
let pageNo = page as string; // type assertion

// type script does not know about markup
// can use type casting too
const someElement = document.querySelector('.foo') as HTMLInputElement;

// listener
someElement.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement;
    console.log('event', target.value);
})

// creating classes in typescript
// all classes are public by default
class Person {
    private firstName: string; // only accessible within class
    private lastName: string; // only accessible within class
    readonly unchangeableName: string; // its like a final variable

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}

const currUser = new Person("syafiq", "azman");
console.log(currUser.getFullName());

// inheritance
// child can use parent's methods
// consider overrides and overwrites
// consider private constructors
class Admin extends Person {
    private editor: string;

    constructor(firstName: string, lastName: string, editor: string) {
        super(firstName, lastName);
        this.editor = editor;
    }

    setEditor(editor: string): void {
        this.editor = editor;
    }

    getEditor(): string {
        return this.editor;
    }
}

// generic interfaces and functions

const addId = <T extends Object>(obj: T) => {
    const id = Math.random();
    return {
        ...obj,
        id,
    };
};

const result = addId<UserInterface>(user3); // explicit declaration

// generics with interfaces
// can have multiple generics for interfaces too
interface PersonInterface<T> {
    name: string;
    data: T;
}

const user4:PersonInterface<string> = {
    name: "jack",
    data: "foo"
};

// enums
// popular in static type languages ! enums is a datatype
const statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2
};

console.log(statuses.inProgress);

// highly recommended to name the enum properly
enum Status {
    NOTSTARTED,
    INPROGRESS,
    DONE
}

console.log(Status.DONE); // can use as value as well as datatype
const notStartedStatus: Status = Status.NOTSTARTED;

