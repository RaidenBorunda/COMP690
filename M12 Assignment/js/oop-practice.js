// // STEP 1
// class Cat {
//     // The constructor is a special method that is executed when a new instance of the class is created
//     constructor(name, age) {
//       // Use the this keyword to refer to the instance and assign the parameters to the properties
//       this.name = name;
//       this.age = age;
//     }
//   }
  

// let Dog = class {
// // The constructor is the same as before
// constructor(name, age) {
//     this.name = name;
//     this.age = age;
// }
// };
// // STEP 2
// let cat = new Cat("Mushu", 1)
// let dog = new Dog("Zora", 1)
// // STEP 3
// class Animal {
//     constructor(){
//         this.create = function(){
//             console.log("The Animal has been created.")
//         }
//     }
// }
// // STEP 4
// class Animal {
//     // The constructor takes one argument for the message
//     constructor(message) {
//       // Assign the message to a property of the instance
//       this.message = message;
//       // Create the create method as before
//       this.create = function() {
//         // Use the console.log method to display the message property in the console window
//         console.log(this.message);
//       };
//     }
// }
// // STEP 5
// class Animal {
//     // The constructor takes five arguments for the properties
//     constructor(type, breed, color, height, length) {
//       // Assign the arguments to the properties of the instance
//       this.type = type;
//       this.breed = breed;
//       this.color = color;
//       this.height = height;
//       this.length = length;
//     }
//   }
  
// // STEP 6
// let animal = new Animal("dog", "Corgi", "Red", 24, 36);
// for (let key in animal) {
//   console.log(key + ": " + animal[key]);
// }
// // STEP 7
// class Animal {
//     // The constructor is the same as before
//     constructor(type, breed, color, height, length) {
//       this.type = type;
//       this.breed = breed;
//       this.color = color;
//       this.height = height;
//       this.length = length;
//       this.speak = function() {

//         if (this.type === "dog") {
//           return "The " + this.color + " dog is barking!";
//         } else if (this.type === "cat") {
//           return "The " + this.color + " cat is meowing!";
//         } else {
//           return "The animal is making a noise!";
//         }
//       }
//     }
// }
// // STEP 8
// class Animal {
//     constructor(_type, _breed, _color, _height, _length) {
//         this._type = _type;
//         this._breed = _breed;
//         this._color = _color;
//         this._height = _height;
//         this._length = _length;
//     }
// }

// Animal.prototype._checkType = function() {
//     return this._type;
// }

// Animal.prototype.speak = function() {
//     return "The " + this._checkType() + " has made a noise!";
// }
// // STEP 9
// String.prototype.findWords = function(word) {
//     let words = this.toLowerCase().split(" ");
//     let count = 0;

//     for (let i = 0; i < words.length; i++) {
//       if (words[i] == word.toLowerCase()) {
//         count++;
//       }
//     }
//     alert(`The word ${word} was found ${count} times in the paragraph.`);
// }
// let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lorem quis lorem consequat consequat. Morbi vitae lorem quis lorem consequat consequat. Morbi vitae lorem quis lorem consequat consequat. Morbi vitae lorem quis lorem consequat consequat.";
// paragraph.findWords("lorem");
  
  
