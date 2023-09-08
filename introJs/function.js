// FUNCTION
// function dan parameter you shouldve already know it

function greeting(name, language){
    if(language === "English"){
        console.log(`Good morning ${name}`)
    } else if (language = "French") {
        console.log(`Bonjour ${name}`);
    } else {
        console.log(`Selamat pagi ${name}`)
    }
}

// ada perbedaan antar huruf kapital sama engga
greeting("Harry", "French")

const user = {
    id: 24,
    displayName: 'Kren',
    fullName: 'Kylo Ren',
  };

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`)
}

introduce(user)

function exponentsFormula(baseNumber, exponent = 2) {
    const result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
  }
  
  exponentsFormula(3);

function sum(...numbers){
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result
}   

console.log(sum(1, 2, 3, 4, 5))

// function declaration
function sayHello(greet) {
    console.log(`${greet}!`);
  }
   
// function expression
const sayName = function (name) {
    console.log(`Nama saya ${name}`)
  }

// function expression
const sayHello1 = (greet) => {
  console.log(`${greet}!`)
}
 
const sayName2 = (name) => {
  console.log(`Nama saya ${name}`)
}

// VARIABLE
// ada global scoped -> declare diluar function
// ada local scoped -> declare di dalem function

// Perlu kita perhatikan, jika kita lupa menuliskan keyword let, const, atau var pada script ketika membuat sebuah variabel, maka variabel tersebut akan menjadi global.

// CLOSURE
// intinya bikin func yg bner, klo local ya local, biar ga campur aduk

/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // output: 1
 *    minimal(3, 2) // output: 2
 *    minimal(3, 3) // output: 3
 * 
 **/
const minimal = (a, b) => {
    if (a < b){
        return a
    } else if (a == b) {
        return a
    } else {
        return b
    }
}

/*
 *
 * 2. Buatlah sebuah function bernama findIndex yang menerima dua parameter, yaitu array dan number.
 *    Fungsi tersebut harus mengembalikan index dari angka yang sesuai pada array tersebut.
 *    Jika angka tidak ditemukan, maka kembalikan nilai -1.
 *
 *    contoh:
 *    findIndex([1, 2, 3, 4, 5], 3) // output: 2
 *    findIndex([1, 2, 3, 4, 5], 6) // output: -1
 *    findIndex([1, 2, 3, 4, 5], 5) // output: 4
 */

// Tulis kode di bawah ini
const findIndex = (array = [], number) => {
   for (let i = 0; i<array.length; i++){
        if (array[i] === number) {
            return i;
        } 
   }
   return -1
}

findIndex([1, 2, 3, 4, 5], 3)
minimal(1, 5)


