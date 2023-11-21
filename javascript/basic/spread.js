const nums = [24,5,6,7,357,4568,345,213123];

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs];


const feline = {
  legs: 4,
  family: 'Felidae'
};
const canine = {
  isFurry: true,  
  family: 'Caninae'
}

const catDog = {...feline, ...canine, isCute: true};

const feline2 = {...feline};
feline2.isCute = true;

const num1 = [1, 2, 3, 4, 5];
const num2 = num1;
const num3 = [...num1];