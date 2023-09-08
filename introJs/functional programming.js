const names = ['Harry', 'Ron', 'Jeff', 'Thomas']

const newNamesWithExcMark = []

//imperatif
for (let i = 0; i < names.length; i++){
    newNamesWithExcMark.push(`${names[i]}!`)
}

console.log(newNamesWithExcMark)

// deklaratif
const newNamesWithExcMarkd = names.map((name) => `${name}!`);

console.log(newNamesWithExcMarkd)

// FP intinya codenya jd lbh simple, krn fokus ke what to solve drpd how to solve
// konsep fp ada 4, yaitu pure function, immutability, recursive, high-order function

// Pure Action --> ga bergantung sama nnilai yang ada di luar fungsi atau parameternya

const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const createUserWithNewLastName = (newLastName, user) => {
    return { ...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Potter', user);

console.log(newUser);

// MAP
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((nama) => {return `${nama}!`})

console.log(newArray)

// FILTER
const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => String(item))

console.log(truthyArray)

const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
  
  const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
  
  console.log(eligibleForScholarshipStudents);
  // REDUCE
  const totalScore = students.reduce((acc, student) => acc + student.score, 0);
  // SOME --> ngasih nilai boolean
  const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);
// ngecek di array tsb ada angka even ap g
console.log(even);

// FIND
const findJames = students.find(student => student.name === 'James');
console.log(findJames);

// SORT
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);
// output: [ 1, 1000, 101, 121, 30, 4 ]

const compareNumber = (a, b) => {
    return a - b;
  };
  const sorting = array1.sort(compareNumber);
  console.log(sorting);

// EVERY
const scores = [70, 85, 90]
const minimumScore = 65

const examPassed = scores.every(score => score >= minimumScore)
console.log(examPassed)
// Imperatif
for (let i = 0; i <names.length; i++){
    console.log(`Hello, ${names[i]}!`);
}

// Deklaratif
names.forEach((name) => {
    console.log(`Hello, ${name}!`);
  });


/**
 * TODO:
 * Buatlah variabel greatAuthors yang merupakan array
 * berdasarkan hasil filter() dan map() dari books:
 *   - Gunakan fungsi filter untuk mengembalikan nilai item books
 *     yang hanya memiliki nilai sales lebih dari 1000000.
 *   - Gunakan fungsi map pada books yang sudah ter-filter,
 *     untuk mengembalikan nilai string dengan format:
 *     - `${author} adalah penulis buku ${title} yang sangat hebat!`
 *
 * Catatan: Jangan ubah nilai atau struktur dari books
 */

const books = [
    { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
    { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
    { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
    { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
    { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
    { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
    { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
  ];
  
  // Tulis kode di bawah ini

  const filtering = books.filter((books) => books.sales > 1000000)
  const greatAuthors = filtering.map(books => `${books.author} adalah penulis buku ${books.title} yang sangat hebat!`)

  console.log(greatAuthors)
  
if ((true || false) && (false || false)) {
    console.log("It's true");
} else {
    console.log("It's false");
}

var foo = []
foo.push(1)
foo.push(2)
console.log(foo[2])

let testing = "oon"

if (!(testing == "oon")){
  console.log("anjing")
} console.log("buset")

// ! -> !=