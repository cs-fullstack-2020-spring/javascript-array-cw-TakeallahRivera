/*### Exercise 1

- Create the following array ```["John", "Paul", "George", "Pete"]```
- Console.log ONLY Pete’s name from the list
- Change Pete’s name to ‘Ringo’
- Console.log the list
- Add the name ‘Yoko’ to the list
- Console.log the list

*/
//Exercise 1 Solution 
let arrayBeatles = ['John', 'Paul', 'George', 'Pete'];
console.log(arrayBeatles[3]);
console.log(arrayBeatles);
arrayBeatles[3]="Ringo";
console.log(arrayBeatles);
arrayBeatles.push("Yoko");
console.log(arrayBeatles);


/*### Exercise 2
- Write a program that asks the user to enter 4 ages. Save each of the ages into an array.
- Console.log the list of ages
- Delete the third age.
- Change the second element (NOT index 2, the second element) to a different age.
- Console.log the list of names


*/


//Exercise 2 Solution//

let firstAge = prompt("Enter your first age");
let secondAge = prompt("Enter a second age");
let thirdAge = prompt("Enter a third age");
let fourthAge = prompt("Enter a fourth age");

let arrayAge = [firstAge, secondAge, thirdAge, fourthAge];
console.log(arrayAge);

arrayAge.splice(2,1);
console.log(arrayAge);
arrayAge[1] = 800;
console.log(arrayAge);













/*### Exercise 3
Write a program that asks the user to enter any four names into an array. 
If they enter the name Kenn, ignore it and 
don't enter it in the array. 
Console.log the resulting array.

```javascript
Example 1
Enter the first name: Kevin
Enter the second name: Erin
Enter the third name: Meka
Enter the fourth name: Autumn

console.log Results:
[Kevin, Erin, Meka, Autumn]

Example 2
Enter the first name: Kenn
Enter the second name: Erin
Enter the third name: Kenn
Enter the fourth name: Autumn

console.log Results:
[Erin, Autumn]


*/