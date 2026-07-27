var x = 10
x = 'joydip'

//number, boolean , string and object

function add(a, b) {

}

//object literal syntax
var obj = {
    id: 1,
    name: 'anil',
    salary: 1000,
    print: function () {
        return `${this.id}, ${this.name}, ${this.salary}`
    }
}

obj.location = 'Bangalore'
obj['sayHi'] = function () {
    return `Hi...${this.name}`
}
console.log(obj.id);
console.log(obj['name'])
console.log(obj.print());
console.log(obj.sayHi());

console.log(obj);

//constructor function
function person(id, name, salary) {
    //var x = 100
    this.id = id;
    this.name = name
    this.salary = salary
    this.print = function () {
        return `${this.id}, ${this.name}, ${this.salary}`
    }
    //return this
}
function trainer(id, name, salary, subject) {
    // this.id = id;
    // this.name = name
    // this.salary = salary
    person.call(this, id, name, salary)
    this.subject = subject
    this.print = function () {
        return `${person.prototype.print.apply(this) }, ${this.subject}`
    }
}

var obj1 = new trainer(1, "sunil", 2000,"JS");

