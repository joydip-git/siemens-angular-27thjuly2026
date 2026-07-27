var a = 10
//static type checking
//a = 'joydip'
//strict typing
var numbers: number[] = [1, 2, 3, 4]

var n
console.log(n);

class Person {
    private _id: number;

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _salary: number;
    public get salary(): number {
        return this._salary;
    }
    public set salary(value: number) {
        this._salary = value;
    }

    constructor(id: number, name: string, salary: number) {
        this._id = id;
        this._name = name
        this._salary = salary
    }

    print() {
        return `${this._id}, ${this._name}, ${this._salary}`
    }
}
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

interface IOperations {
    add(a: number, b: number): number;
}
class Operations implements IOperations {
    add(a: number, b: number): number {
        return a + b
    }
}

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

function subtract(a: number, b: number, c = 0): number {
    return a - b
}
type fnRefType = (m: number, n: number, p?: number) => number;
function invoke(fnRef: fnRefType, x: number, y: number) {
    fnRef(x, y)
}


invoke(subtract, 10, 20)
const multiFn = (a: number, b: number, c?: number) => a * b * (c ? c : 0);
invoke(multiFn, 100, 200)