class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating!`;
  }
}

class Cat extends Pet {
  constructor(name, age, gender) {
    super(name, age);
  }
  meow() {
    return 'MEOWWWW!';
  }
}

class Dog extends Pet {
  bark() {
    return 'WOOOOF!';
  }
}

const kiki = new Cat('Kiki', 3, 'F');
const blue = new Dog('Blue', 4);
