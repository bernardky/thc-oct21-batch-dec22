class Person {
  constructor(firstname, lastname, age) {
    this._firstName = firstname;
    this.lastName = lastname;
    this._age = age; //privatizing the property
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    this._firstName = value;
  }

  get fullName() {
    return this._firstName + " " + this.lastName;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    if (typeof value == "number") return (this._age = value);
    else alert("only number is accepted");
  }
}

let david = new Person("david", "beckham", 40);

// david.age = 50;
// console.log(david.fullName);
// console.log(david.age);
// console.log(david);

david.firstName = "victoria";

console.log(david);
console.log(david.fullName);
