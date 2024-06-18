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
