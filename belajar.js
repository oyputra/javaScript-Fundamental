/** var dan let */ 
/** hoisting */ 
// console.log(bar);
// let namet = "wegodev";
// var foo = "bar";
// const bar = "foo";

/** scope */ 
// for (let i = 0; i < 3; i++) {
//   console.log("hello " + i)
// }
// console.log(i);
// function foo() {
//   const fooVar = 'bar';
//   console.log("di dalam func " + fooVar);
//   return fooVar;
// }
// foo();
// console.log(fooVar);
// const firstName = "Budi";
// firstName = "Udin";
// const count = 0;
// count++;
// console.log(count);

/** let
    var
    const
*/ 
// let number = 2020;
// let numberFrictional = 20.98;
// let veryBigNumber = 1.889e8 // 188.900.000
// let anotherNum = "2020";
// let additional = 1000 + 500;
// let substraction = 1000 - 500;
// let multiplication = 100 * 5;
// let division = 100 / 2;

/** Presedence atau order of arithmetics */ 
// let edgeCase = 1000 + (4 * 2);


/** Modulus atau Remainder = % */ 
// let modulus = 320 % 100;
// let even = 25 % 2;

/** Special Numbers */ 
// let specialNum1 = Infinity; 
// let specialNum2 = -Infinity;
// let specialCase = Infinity - 1;
// let specialNum3 = -NaN; //** Not a Number */
// let specialCase2 = 0 / 0;
// let specialCase2 = Infinity - Infinity;
// let specialCase2 = "five" - 0;

/** String */
// let string1 = "Ini adalah string";
// let string2 = 'Ini adalah string';
// let string3 = `Ini adalah string`;
// let multiLineString = "Ini adalah paragraph 1\nDan ini adalah paragraph 2"
// let multiLineString2 = `
// Ini adalah paragraph 1 dengan backtic
// Dan ini adalah paragraph 2`

/** String Concatenates */
// let firstName = "David";
// let lastName = "Bekham";
// let shirtNumber = 7;
// let namaLengkap = firstName + lastName;
// let namaLengkap = `${firstName} ${lastName} ${shirtNumber}`;

/** Type Conversion atau coercion */
// console.log("100" - 50)
// console.log("100" + 50)
// console.log(8 * null)
// console.log("five" * 4)

/** Boolean */
// let yes = true;
// let no = false;

/** Comparison */
// console.log(2 >= 2);
// console.log("Apple" == "Orange");

/** Logical Operator dan Advanced Comparison */
// let firstName = "David"
// let shirtNumber = 7;

/** Perbedaan == dan === */
// console.log(shirtNumber == "7") // loose comparison (masih dikompromikan)
// console.log(shirtNumber === "7") // strict comparison
// console.log(NaN === NaN)

/** dan (&&) */
// console.log(true && false)

/** atau (||) */
// console.log(true || false)

/** exclamation (!) negasi */
// let tahun = 2019;
// console.log(tahun !== 2020)
// let yes = !true;
// console.log(yes)

/** Array [] */
// let makananFavorit = "Mie ayam, Burger, Hotdog"
// let makananFavoritArray = ["Mie ayam", "Burger", "Hotdog", 2020, false, true, null, NaN]

/** Objects {} */
// let biodataObject = {
//   firstName: "Bambang",
//   lastName: "Pamungkas",
//   makananFavorit: ["Mie ayam", "Burger", "Hotdog"],
//   istri: {
//     firstName: "Tribuana",
//     lastName: "Tungga Dewi",
//     makananFavorit: ["Mie ayam", "Burger", "Hotdog"],

//   },
//   anak_perempuan: {
//     firstName: "Salsa",
//     lastName: "Alicia"
//   }
// }

/** Return Values */
// alert("ini adalah sebuah alert")
// console.log(Math.min(10, 9, 19, 20, 5))
// console.log(Math.round(1.3))

/** Control FLow */
// let yourName = String(prompt("What is your name?"));
// alert(`Hi, so your name is ${yourName}`);

/** Conditional Execution */
// let yourYearOfBirth = Number(prompt("Kapan tahun lahirmu?"));
// if (2020 - yourYearOfBirth < 17) {
//   alert("Kamu masih kecil")
// } else if (2020 - yourYearOfBirth > 17 && 2020 - yourYearOfBirth < 40) {
//   alert("Kamu sudah Dewasa")
// } else if (2020 - yourYearOfBirth > 40) {
//   alert("Kamu sudah Tua")
// } else {
//   alert("Tidak Jelas")
// }

// if (2020 - yourYearOfBirth < 17) {
//   alert("Kamu masih kecil")
// } else {
//   alert("Kamu sudah tua")
// }

/** Ternary Operator (? dan :) (dipakai saat 2 cabang saja) */
// 2020 - yourYearOfBirth < 17 ? alert("Kamu masih kecil") : alert("Kamu sudah tua")

/** Switch Case */
// let cuacaHariIni = prompt("Bagaimana cuaca hari ini?");
// switch (cuacaHariIni) {
//   case "mendung":
//     alert("Jangan lupa bawa payung");
//     break;
//   case "panas":
//     alert("Jangan lupa berjemur");
//     break;
//   case "berawan":
//     alert("Silahkan main diluar");
//     break;
//   default:
//     alert("Cuaca kamu gak jelas");
//     break;
// }

/** Looping */
// let count = 0;

/** While: selama */
// while (count <= 12) {
//   console.log(count)
//   count = count + 2;
// }

/** Do */
// do {
//   console.log(count);

//   count = count + 2;
// } while (count <= 12);

/** For */
// for (let i = 0; i <= 100; i = i+2) {
//   console.log(i)
// }
// for (let i = "*"; i.length <= 5; i = i + "*") {
//   console.log(i)
// }


/** Functions */
// console.log(sayHello())

/** Function declaration */
// function perpangkatan(n) {
//   return n * n
// }

/** Function definition */
// const perpangkatan = function(n) {
//   if (n == undefined) {
//     return 2 * 2
//   }
//   return n * n
// }

/** ES6 Arrow FUnction */
// const perpangkatan = (n = 2) => { // n=2 sama dengan if jika tidak ada argumen
//   return n * n
// }
// const perpangkatan = n => n * n

/** Function side-effect */
// function sayHello() {
//   alert("Hello!")
// }
// console.log(perpangkatan(5))


/** Array */
// const array = [1, 2, 3, 4, 5]
// for (let i = 0; i < array.length; i++) {
//   array[i] = array[i] * 2
// }
// console.log(array)
// console.log(array[0] = "satu")
// console.log(array)

/** Push Method (menambahkan param. di belakang)*/
// array.push(6)
// console.log(array)

/** Pop Method (menghapus param. di belakang)*/
// console.log(array.pop())
// console.log(array)

/** Unshift Method (menambahkan param. di depan)*/
// array.unshift(0)
// console.log(array)

/** Shift Method (menghilangkan param. di depan)*/
// console.log(array)
// array.shift(0)

/** Slice (me-return value) */
// const animals = ["kucing", "beruang", "jerapah", "gajah", "harimau"];
// let hewanYangDitangap = animals.slice(2) // (min, max)
// console.log(hewanYangDitangap)

/** Splice */
// const animals = ["kucing", "beruang", "jerapah", "gajah", "harimau"];
// animals.splice(2, 1, "buaya") // mengubah elemen
// animals.splice(1, 3) // menghapus elemen
// console.log(animals)

/** forEach */
// const animals = ["kucing", "beruang", "jerapah", "gajah", "harimau"];

// animals.forEach(myFunction)

// function myFunction(value) {
//   console.log(value + ' hidup')
// }

/** Map (me-return sebuah array baru) */
// const numbers = [10, 20, 30, 40, 50];
// const numbersMultiplied = numbers.map(multiply)
// function multiply(value) {
//   return value * 2;
// }
// console.log(numbersMultiplied)

/** Filter */
// const age = [25, 9, 10, 11, 15, 28, 30]
// let filteredAge = age.filter(myFunction)
// function myFunction(value) {
//   return value <= 17
// }
// console.log(filteredAge)

/** Object */
// cara 1
// const person = {
//  // key      //value
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
//   nationality: "Indonesia"
// }
// cara 2
// const person2 = new Object();
// person2.firstName = "Jane";
// person2.lastName = "Doe";
// person2.age = 27;
// console.log(person2)

/** Acces value of object */
// const person = {
//   name: {
//     firstName: "John",
//     lastName: "Doe",
//   },
//   age: 25,
//   nationality: "Indonesia",
// }
// let targetKey = "firstName";
// const personName = person.firstName;
// const personName = person.name.firstName;
// console.log(personName)

/** Adding and mutating value in object */
// const person = {
//   name: {
//     firstName: "John",
//     lastName: "Doe",
//   },
//   age: 25,
//   nationality: "Indonesia",
// }
// person.hairColor = "Brown" //menambah properti
// person.name.firstNames = "oyputra" //mengubah objek
// console.log(person)

/** Delete properti in Object */
// const person = {
//   name: {
//     firstName: "John",
//     lastName: "Doe",
//   },
//   age: 25,
//   nationality: "Indonesia",
// }
// delete person.nationality;
// console.log(person.nationality)

/** Object Keys */
// const objects = {a: 1, b: 3, c: 2}
// console.log(Object.keys(objects))

/** Object Assign */
// const objects1 = {a: 1, b: 3, c: 2}
// const objects2 = {c: 4, d: 9} //merge object
// console.log(objects1)

/** Array of Objects */
// const todos = [
//   {
//     text: "Ini adalah tugas1",
//     isCompleted: false
//   },
//   {
//     text: "Ini adalah tugas2",
//     isCompleted: true
//   },
//   {
//     text: "Ini adalah tugas3",
//     isCompleted: false
//   },
//   {
//     text: "Ini adalah tugas4",
//     isCompleted: true
//   },
// ];
// cara 1
// const uncompletedTasks = todos.filter(myFunction);
// function myFunction(value) {
//   if (value.isCompleted === false) {
//     return value
//   }
// }
// cara 2
// const uncompletedTasks = todos.filter(value => { //arrow function (=>)
//   if (value.isCompleted === true) {
//     return value
//   }
// });
// console.log(uncompletedTasks)

/** Scope */
// ada scope lokal dan global
// kapan variabel bisa diakses atau tidak

// const name = "John Doe" //global scope
// function myFunction() {
//   const name = "wegodev"
  
//   function insideFunc() {
//     console.log(name)
//   }
//   insideFunc()
// }
// myFunction()
// console.log(name) // name tidak ada akses

// var globalVar = "global variable"
// console.log(window.globalVar) 
/** masuk kedalam objek window, 
 *  semua hal yang berhubungan dengan browser
 */

/** Hoisting */
// x = 10; //assigning
// y = 50; //assigning
// console.log(y)
// var x; //declaration (termasuk hoisting)
// var y = 20; //variabel initialization (hoisting hanya variabel saja)
// function myFunction() {
//   console.log("hello hoisting")
// }

/** Function expression atau definition */
// var myFunctionExp = function() {
//   console.log("hello hoisting")
// }
// console.log(myFunctionExp())

