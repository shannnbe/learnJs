// VARIABLE
let lastName;
lastName = "shanti"
console.log(lastName)

let firstName = "gloria"
console.log(firstName)

// assignment expression --> =
let fullName1 = (lastName = "Gloria")
let fullName2 = "Luke" + "Skywalker"
console.log(fullName1, fullName2)

lastName = "Benedict"
console.log(lastName)

const z = 100
console.log(z + "\n")
// perbedaan const & let = const ga bisa di ubah, let bisa

// TIPE DATA
let x
console.log(typeof(x))

x = 10
console.log(typeof(x))

x = 15.5
console.log(typeof(x))

let a = 12
let b = 9
console.log(a + b)
console.log(a - b)
console.log(a / b)
console.log(a * b)
console.log(a % b + "\n")

// increment --> x++, x--. 
// x++ menghasilkan variabel sebelum ditingkatkan nilainya
// ++x --/-- setelah

let postfix = 5
let prefix = 5
console.log(postfix++)
console.log(postfix)
console.log(++prefix)

// number cmn ngecangkum dari -(2^53 - 1) s/d (2^53 - 1)
// makany ada BigInt
// kaya int, long, long long di c

const bigNumber = 1234567891011121314151617n
const myInt = 1234567891011121314151617
console.log(bigNumber)
console.log(myInt)
const bigIntButSmall = 7n
console.log(bigIntButSmall)

// string
let greet = "Hello"
console.log(greet)

const question = '"What do you think of JavaScript" I asked'
console.log(question)

const answer = '"I think it\'s awesome!" he answered confidently'
console.log(answer)
// jadi kalo di statementnya ada ', pake \, namanya escape string
// berlaku buat backlashnya itu sendiri
console.log("Windows path: C:\\Program Files\\MyProject")

// concat
console.log(greet + greet)

// string interpolation, pake bacticks
const myName = "Luke";
console.log(`Hello, my name is ${myName}.`)

// boolean
// true/false
let b1 = true
let b2 = false
console.log(typeof(b1))
console.log(typeof(b2))

// implementasi boolean bisa pake comparison operator

const u = 10
const v = 12
let isGreater = a > b
let isLess = a < b
console.log(isGreater)
console.log(isLess)

//null
let someLaterData = null;
console.log(someLaterData)

//symbol --> biasanya digunakan dr nama property dr object
const id = Symbol("id")
console.log(id)

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2)
console.log("\n")

// OPERATOR
// sama aja kek yg lain jd mager nyatet
const nilai1 = 100
const nilai2 = 150
const nilai3 = 100
console.log(nilai1 === nilai2)
console.log(nilai1 === nilai3)
console.log(nilai1 == nilai2)
console.log("\n")

// perbedaan antara sama dan identik
// sama (==) dan identik (===)
// kalo mau bandingin nilai aja, pake ==
// kalo mau bandingin nilai + tipe data, pake ===

// IF/ELSE STATEMENT
const isRaining = true;
console.log("Persiapan sebelum berangkat kegiatan.")
if (isRaining){
    console.log("Hari ini hujan, bawa payung.")
}
console.log("Berangkat")
console.log("\n")

x = 50
if (x > 70){
    console.log(x)
} else {
    console.log("Nilai kurang dari 70")
}
console.log("\n")

let language = "French"
let greeting = "Selamat Pagi"

if (language == "English"){
    greeting = "Good Morning"
} else if (language === "French") {
    greeting = "Bonjour!";
} else if (language === "Japanese") {
    greeting = "Ohayou Gozaimazu"
} else
    console.log

console.log(greeting + "\n")

// condition ? true expression : false expression

// ternary operator
const isMember = true;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)

// truthy and falsy
// setiap nilai pada js mewarisi sifat boolean
// truthy atau falsy
// nilai yg dianggap falsy adalah number 0, bigint 0,
// string kosong
// null
// undefined
// NaN

let name = ""
if (name){ // sama aja kaya != NULL
    console.log(`Halo, ${name}`)
} else {
    console.log("Nama masing kosong")
}

// SWITCH CASE STATEMENT --> kaya case di c
language = "French"
greeting = null

switch (language){
    case "English":
        greeting = "Good Morning!"
        break;
    case "French":
        greeting = "Bonjour!"
        break;
    case "Bahasa":
        greeting = "Halo!"
        break;
}

console.log(greeting + "\n")

// LOOP / FOR LOOP

for(let i = 0; i < 5; i++){
    console.log(i)
}

// for of loop
let myArray = ["Luke", "Han", "Chewbacca", "Leia"]

for(const arrayItem of myArray) {
    console.log(arrayItem)
} // jadi tiap item pada myArray dibaca dan disimpen di arrayItem

i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}
console.log("\n")

do {
    console.log(i);
    i++;
  } while (i <= 10);

  let result = 100

  if (score >= 90) {
        console.log("Selamat! Anda mendapatkan nilai A.")
  } else if (score >= 80 && score <= 89) {
        console.log("Anda mendapatkan nilai B.")
  } else if (score >= 70 && score <= 79) {
        console.log("Anda mendapatkan nilai C.")
  } else if (score >= 60 && score <= 69) {
        console.log("Anda mendapatkan nilai D.")
  } else if (score <= 60) {
        console.log("Anda mendapatkan nilai E.")
  }
