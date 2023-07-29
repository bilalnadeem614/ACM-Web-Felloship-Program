//Challenge-1
//Why this code is not working? and how to fix it?
//const numberVariable=0;
//numberVariable++;
//numberVariable++;
//numberVariable++;
//console.log(numberVariable);

//Answer: It is because we are trying to change the value of a constant variable which is not possible.

//Fixing it:
let numberVariable=0;
numberVariable++;
numberVariable++;
numberVariable++;
console.log(numberVariable);

//Challenge-2

/*
Do the following two blocks of code result in the same answer?
If not, which one would you recommend using and why?
*/
//SNIPPET 1 
// const firstNumber = 20;
// const secondNumber = '20';
// const result = firstNumber === secondNumber;
// secondNumber;
// console. log(result);
//== END SNIPPET 1

//== SNIPPET 2 ==
// const firstNumber = 20;
// const secondNumber = '20';
// const result = firstNumber === secondNumber;
// secondNumber;
// console. log(result);

//Answer: Yes, both the blocks of code result in the same answer-->False

//Challenge-3
/*What does expression5 evaluate to? How could you write this in a single line of code ? */
const expression1 = 100 % 50; //0
const expression2 = 100 / 50; //2
const expression3 = expression1 < expression2; //False
const expression4 = expression3 && 300 + 5 === 305; //True
const expression5 = !expression4;//False

console.log(expression5); //Answer: False

const updated = !(100 % 50 < 100 / 50 && 300 + 5 === 305);
console.log(updated); // Output: false

//Challenge-4
//What does result evaluate to?

const myObj = {
    prop1: 'first value',
    prop2: 20
 };
  
  const myArray = [40, 50, 2];
  
  const result = myObj.prop2 === (myArray[0] / myArray[2]);
  console.log(result); // Output: true

//Challenge-5
//What does result evaluate to?
const myObj2 = {
    nestedObject1: {
      price: 100,
      quantity: 5
    },
    nestedObject2: {
      price: 150,
      quantity: 2
    }
  };
  
  const myArray2 = [myObj.nestedObject1, myObj.nestedObject2];
  
  const result2 = (myArray[0].price * myArray[0].quantity) > (myArray[1].price * myArray[1].quantity); 
  
  console.log(result2); // Output: true
  