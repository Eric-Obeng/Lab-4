"use strict";

const Person = {
  name: "Eric Obeng",
  age: 27,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  },
};

Person.greet();

// Demonstrating or experimenting call(), apply() and bind
// A new objected is created because when the call(), apply(), bind() is applied on the Person object, the value of the "this" will not be seen practically because it is pointing to the same object

const newPerson = {
  name: "Psalmist Praise",
  age: 30,
};

// using call()
Person.greet.call(newPerson);

// using apply
Person.greet.apply(newPerson);

// using bind
const bindObject = Person.greet.bind(newPerson);
bindObject();

function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log(this.count);
      // The requirement to use this.count isn't directly possible due to JavaScript's scope and closure rules. Private variables in closures are not accessible via this.
    },
    getCount: function () {
      return count;
    },
  };
}

let counter = createCounter();
counter.increment();
console.log(counter.getCount());
