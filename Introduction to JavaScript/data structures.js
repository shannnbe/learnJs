// object berisi key dan value dikenal dengan property

const character = {
    name: "Luke Skywalker",
    age: 19,
    species: "Human",
    "hair color": "Blond",
    isJedi: true
}

console.log(character)
console.log(`Hello, my name is ${character.name}`)
console.log(`My age is ${character.age}`)
console.log(`My hair color is ${character["hair color"]}`

)

const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
  };

  spaceship.color = "Glossy red";
  spaceship["maxSpeed"] = 1300; // object modification
  console.log(spaceship);
  // kenapa ga error padahal const? karena pas ngebuat object
  // properti di dalemnya ga terikat jd bs dimodif

// delete object property
delete spaceship.manufacturer
console.log(spaceship)

// ARRAY

let myArray = ["Cokelat", 42.5, 22, true, "Programming"]
console.log(myArray)
console.log(myArray[1])

// masukin data ke dalam array
myArray.push('JavaScript')
console.log(myArray)
// pop array --> dari plg terakhir
myArray.pop()
console.log(myArray)
// shift & unshift
// shift --> mengeluarkan elemen pertama dari array
// unshift --> menambahkan elemen di awal array

myArray.shift()
myArray.unshift("Apple")
console.log(myArray)

delete myArray[1]
console.log(myArray)
// nanti hasilnya kosong, kalo ga mau kosong, pake splice

myArray.splice(2, 1) // menghapus dr index 2 sbnyk 1 elemen
console.log(myArray)
myArray.splice(1, 0, "42.5")
console.log(myArray)
myArray.splice(2, 1)
console.log(myArray)

// SPREAD OPERATOR 

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];
console.log(favorites);
console.log(...favorites)
const allFavorites = [...favorites, ...others]
console.log(allFavorites)

const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
  }
   
  let firstName = "Dimas";
  let age = 20;
   
  // menginisialisasi nilai baru melalui destructuring object
  ({ firstName, age } = profile);
  // harus ada () biar ga dikira block sm jsnya
   
  console.log(firstName);
  console.log(age);

const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;
 
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);

// kalo object pake {}, kalo array pake []
const [, , thirdFood ] = favorites;

var a = 1;
var b = 2;
var temp;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
temp = a;
a = b;
b = temp;
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/

console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
[a, b] = [b, a] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/

// MAP
const myMap = new Map([
  ['1', 'a string key'],
  [1, 'a number key'],
  [true, true]
])
// bedanya map sama object, kalo map semua tipe data
// kalo object cmn string sama symbol
// map gunain constructor
console.log(myMap)

const capital = new Map([
  ['Jakarta', 'Indonesia'],
  ["London", "England"],
  ["Tokyo", "Japan"]
])

console.log(capital.size) // 3
console.log(capital.get("London")) // buat nampilin value london
capital.set("New Delhi", "India") // buat nambah key-value baru
console.log(capital.size)

// SET
// kumpulan nilai (set of values)
// set ga berurutan dan ga ada indeks
// bersifat unik dan ga ada duplikasi

const numberSet = new Set([1, 4, 6, 4, 1]);
console.log(numberSet); // yg keprint 1,4,6
// knp ga smua diprint? krn dia ga ad duplikasi
// add --> buat nambah, cmn nerima satu argumen

numberSet.add(5);
numberSet.add(10);
numberSet.add(6);
numberSet.delete(4);
console.log(numberSet);

// WEAKMAP DAN WEAKSET
// weakmap mendukung garbage collection
// garbage collection adalah proses di mana interpreter js
// mengambil kembali memori yang tidak lagi dapat dijangkau
// dan tidak digunakan lagi oleh program.

// contohnya gmn? misal kita punya data jonas dan kita masukin ke function kita, pas data jonas kita buat null, ttp ada. beda sama weakmap

/**
 * TODO
 * 1. Buatlah variabel dengan nama restaurant yang bertipe object dengan ketentuan berikut:
 *    - Memiliki properti bernama "name"
 *       - Bertipe data string
 *       - Bernilai "Bakso Mang Dicoding".
 *    - Memiliki properti bernama "city"
 *       - Bertipe data string
 *       - Bernilai "Bandung".
 *    - Memiliki properti "favorite drink"
 *       - Bertipe data string
 *       - Bernilai "Es Teh".
 *    - Memiliki properti "favorite food"
 *       - Bertipe data string
 *       - Bernilai "Bakso".
 *    - Memiliki properti "isVegan"
 *       - Bertipe data boolean
 *       - Bernilai false.
 *
 * 2. Buatlah variabel bernama name.
 *    Kemudian isi dengan nilai name dari properti object restaurant
 * 3. Buatlah variabel bernama favoriteDrink.
 *    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant
 */

// Tulis kode di bawah ini

const restaurant = {
  name: "Bakso Mang Dicoding",
  city: "Bandung",
  "favorite drink": "Es Teh",
  "favorite food": "Bakso",
  isVegan: false
}

let name = restaurant.name
let favoriteDrink = restaurant["favorite drink"]

/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

// Tulis kode di bawah ini
let evenNumber = []
for (let i = 1; i <= 100; i++){
  if (i % 2 == 0){
    evenNumber.push(i)
  }
}
console.log(evenNumber)

/**
 * TODO:
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     - priceInJPY dengan nilai currency JPY
 */

// const priceInJPY = 5000;

// Tulis kode di bawah ini

const currency = new Map([
  ["USD", 14000],
  ["JPY", 131],
  ["SGD", 11000],
  ["MYR", 3500]
])

const priceInJPY = 5000;
let priceInIDR = priceInJPY * currency.get("JPY")
console.log(priceInIDR)