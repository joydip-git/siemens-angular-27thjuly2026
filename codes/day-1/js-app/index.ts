var a = 10
//static type checking
//a = 'joydip'

//by default value of this variable will be "undefined"
var n
console.log(n);

//class in TS
class Person {
    private _id: number;
    private _name: string;
    private _salary: number;

    constructor(id: number, name: string, salary: number) {
        this._id = id;
        this._name = name
        this._salary = salary
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get salary(): number {
        return this._salary;
    }
    public set salary(value: number) {
        this._salary = value;
    }

    print() {
        return `${this._id}, ${this._name}, ${this._salary}`
    }
}
//inheritance in TS
class Trainer extends Person {
    subject: string;
    constructor(id: number, name: string, salary: number, subject: string) {
        super(id, name, salary)
        this.subject = subject;
    }

    print(): string {
        return `${super.print()}, ${this.subject}`
    }
}
//interface and generic in TS (not possible in JS)
interface IOperations<T, TResult> {
    add(a: T, b: T): TResult;
}
class Operations implements IOperations<number, number> {
    add(a: number, b: number): number {
        return a + b
    }
}
//interface for typification
interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
}

const dellProduct: Product = {
    id: 1,
    name: 'dell laptop',
    price: 100000
}

//create custom types using "type" keyword in TS (not possible in JS)
function subtract(a: number, b: number, c = 0): number {
    return a - b
}
//type keyword to create data type for a function
type fnRefType = (m: number, n: number, p?: number) => number;
function invoke(fnRef: fnRefType, x: number, y: number) {
    fnRef(x, y)
}
invoke(subtract, 10, 20)

//function in TS/JS can be written in expression style using arrow function
const multiFn = (a: number, b: number, c?: number) => a * b * (c ? c : 0);

invoke(multiFn, 100, 200)

//abstract class in TS
abstract class FileOperations {
    path: string;

    constructor(path: string) {
        this.path = path;
    }

    abstract getData(): string;
}
class TextFileOperations extends FileOperations {
    constructor(path: string) {
        super(path)
    }
    getData(): string {
        return "text file data";
    }
}

//strict typing
var numbers: number[] = [1, 2, 3, 4]
numbers
    .filter((num) => num % 2 === 0)
    .map((num) => (num * 3).toString())
    .forEach((value) => console.log(value))