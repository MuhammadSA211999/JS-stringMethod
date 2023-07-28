// Explored Javascript  all usually used String-Object method:

// Object: An object is a self contained entity that containes **data and **methods. The data of an object are called it's **State and the **Methods are calledt it's **beheviour.
// Bye the methods of an object we can create a meaningfull interactivity with the objects property.
// Object can be used to represents a real world entity that can stored in a computer. They are powerfull toll for data organization and manipulating.

// ** String is a iterable object in JavaScript.

// Length property
let text = 'My name is MSA. Im a dedicated and determined Full Stack application developer.'
let text2 = 'My name is MSA. MSA Full Stack application developer. I especially interested to develope Andriod and Desktop application. Android is most used Operating System in smart phones.'
const totalLetter = text.length //79
// length is string property that return a number of a sentence/string. It's not a function


// Extarting a part of a string by slice(), substrig() and substr(). Those 3 method are accept 2 argument and they are return a part of string.

let justName = text.slice(11, 14) //MSA
justName = text.substring(21, 23)
// const dedicated = text.substr(21, 23) //dedicated and determined
//substr(21,23)=> first argument diye letter gonona kore and 2nd argument diye poroborti word gonona kore. substr() method is depricated.

fruits = "Apple, Banana, Kiwi"
const banana = fruits.substr(7, 6)
// Banana

// replace(searchValue, replaceValue, regex) method
// replace method replacea specified value with another value in a string. Its return the new mutate string.
//replace method shudu matro first match ke replace kore.
const replaced = text.replace(/MSA/g, 'Muhammad SA')
// console.log(replaced)

//replaceAll() method 
