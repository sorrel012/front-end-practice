const myMath = {
  PI: 3.141592,
  square(num) {
    return num* num;
  },
  cube(num) {
    return num ** 3;
  }
}

const cat = {
  name: 'Blue',
  color: 'grey',
  meow() {
    console.log(`THIS IS : ${this}`);
    console.log(`${this.name} says MEOWWW`);
  }
}

const meow2 = cat.meow;