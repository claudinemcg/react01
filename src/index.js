import { choice, remove } from './helpers';
import foods from './foods';

let fruit = choice(foods);
console.log(`I'd like one ${fruit}, please.`);
console.log(`Here you go: ${fruit}`);

console.log("Delicious, may I have another?");
let otherFruits = remove(foods, fruit);
console.log(`I'm sorry, we're all out. We have ${otherFruits.length} other fruits left`);
console.log(otherFruits);