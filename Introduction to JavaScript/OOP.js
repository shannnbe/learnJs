const cardummy = {
    // properties
    brand: 'Ford',
    color: 'red',
    maxSpeed: 200,
    chassisNumber: 'f-1',
    // methods
    drive: () => {
      console.log('driving');
    },
    reverse: () => {
      console.log('reversing');
    },
    turn: () => {
      console.log('turning');
    }
  }
   
  console.log(cardummy.brand); // Ford
  console.log(cardummy.color); // red
  console.log(cardummy.maxSpeed); // 200
  console.log(cardummy.chassisNumber); // f-1
  cardummy.drive(); // driving
  cardummy.reverse(); // reversing
  cardummy.turn(); // turning

// intinya di OOP, sebuah objek punya properti dan kegunaan sendiri. tapi ga efektif kalo objekny bnyak, makanya ada object blueprint

// function Car(brand, color, maxSpeed, chassisNumber) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this.chassisNumber = chassisNumber;
//   }

// Car.prototype.drive = function() {
//     console.log(`${this.brand} ${this.color} is driving`)
// }

// Car.prototype.reverse = function() {
//     console.log(`${this.brand} ${this.color} is reversing`);
//   }
   
// Car.prototype.turn = function() {
//     console.log(`${this.brand} ${this.color} is turning`);
//   }

// const car1 = new Car('Toyota', 'Silver', 200, 'to-1')
// const car2 = new Car('Honda', 'Black', 180, 'ho-1');
// const car3 = new Car('Suzuki', 'Red', 220, 'su-1');

// console.log(car1)

// constructor function
// 1. harus ditulis dengan huruf kapital
// 2. menggunakan this -> declare properties
// 3. menggunakan prototype -> declare methods
// 4. pas mau dipake, declare pake New
// Notes: cmn bisa dipake dengan regular function, ga bisa pake arrow function.

// sekarang ada constructor function pake keyword class, caranya sama aja tinggal class Car{} gitu, beda di declare methodsnya.

class CarClass {
    constructor(brand, color, maxSpeed, chassisNumber) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.chassisNumber = chassisNumber;
    }
   
    drive() {
      console.log(`${this.brand} ${this.color} is driving`);
    }
   
    reverse() {
      console.log(`${this.brand} ${this.color} is reversing`);
    }
   
    turn() {
      console.log(`${this.brand} ${this.color} is turning`);
    }
  }


  // karena si chassisNumber bisa mudah diubah, makanya harus pake getter dan setter. properti ada dua macem, yaitu data property & accessor property.

class User {
    constructor(firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
   }
   
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    } // intinya buat dapetin nilainya
   
    set fullName(fullName) {
      const [firstName, lastName] = fullName.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    } // intinya buat netapin nilainya
  }
   
  const user = new User('John', 'Doe');
  console.log(user);
  console.log(user.fullName);
   
  user.fullName = 'Fulan Fulanah';
  console.log(user);
  console.log(user.fullName);


  class Car {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      // Set a random chassis number
      this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`; // jadi ga masuk ke constructor
    }

    get chassisNumber(){
      return this._chassisNumber;
    }

    set chassisNumber(chassisNumber){
      console.log('You are not allowed to change the chassis number')
    }
  }

const cardump = new Car('BMW', 'red', 200);
console.log(cardump.chassisNumber);
cardump.chassisNumber = 'BMW-1';
console.log(cardump.chassisNumber);

// METHOD

// intinya buat private, dari _ diganti jadi #

// class WhatsAppService {
//   constructor(sender){
//     this.sender = sender
//   }
// }

// sendMessage(message, receiver){
//   console.log(`${this.sender} sent ${message} to ${receiver}`)
// }

// sendBroadcastMessage(message, receiver){
//   for (const receiver of receiver){
//     this.sendMessage(message, receiver)
//   }
// }

// class EmailService {
//   constructor(sender){
//     this.sender = sender;
//   }
// }

// sendMessage(message, receiver){
//   console.log(`${this.sender} send ${message} to ${receiver}`)
// }

// sendDelayedMessage(message, receiver, delay){
//   setTimeout(() => {
//     this.sendMessage(message, receiver)
//   }, delay);
// }

// problemnya adalah ada duplikasi code (sendMessage), makanya pake inheritance

// Superclass
class MailService {
  constructor(sender){
    this.sender = sender
  }

  sendMessage(message, receiver){
    console.log(`${this.sender} sent ${message} to ${receiver}`)
  }
}


// subclass
class WhatsAppService extends MailService {
  sendBroadcastMessage(message, receivers){
    for (const receiver of receivers){
      this.sendMessage(message, receiver)
    }
  }
}
// subclass
class EmailService extends MailService {
  sendDelayedMessage(message, receiver, delay){
    setTimeout(() => {
      this.sendMessage(message, receiver)
    }, delay);
  }
}

const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');
 
whatsapp.sendMessage('Hello', '+6289876543210');
whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
 
email.sendMessage('Hello', 'john@doe.com');
email.sendDelayedMessage('Hello', 'john@doe.com', 0);

// cara di atas kan kalo pake class bawaan ES6
// kalo misalnya pake function bentukannya kek gini

// function MailService(sender) {
//   this.sender = sender;
// }
 
// MailService.prototype.sendMessage = function (message, receiver) {
//   console.log(`${this.sender} sent ${message} to ${receiver}`);
// }
 
// function WhatsAppService(sender) {
//   MailService.call(this, sender);
// }
 
// // Prototype inheritance
// WhatsAppService.prototype = Object.create(MailService.prototype);
// WhatsAppService.prototype.constructor = WhatsAppService;
 
// WhatsAppService.prototype.sendBroadcastMessage = function (message, receivers) {
//   for (const receiver of receivers) {
//     this.sendMessage(message, receiver);
//   }
// }
 
// function EmailService(sender) {
//   MailService.call(this, sender);
// }
 
// // Prototype inheritance
// EmailService.prototype = Object.create(MailService.prototype);
// EmailService.prototype.constructor = EmailService;
 
// EmailService.prototype.sendDelayedMessage = function (message, receiver, delay) {
//   setTimeout(() => {
//     this.sendMessage(message, receiver);
//   }, delay);
// }
 
// const whatsapp = new WhatsAppService('+6281234567890');
// const email = new EmailService('dimas@dicoding.com');
// whatsapp.sendMessage('Hello', '+6289876543210');
// whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
// email.sendMessage('Hello', 'john@doe.com');
// email.sendDelayedMessage('Hello', 'john@doe.com', 3000);

// operator instanceof
// gunanya buat ngecek jenis dari objek tersebut
// operand1 --> objek yang ingin dites prototype
// operand2 --> consstructor function atau class

console.log(whatsapp instanceof WhatsAppService); // true
console.log(whatsapp instanceof EmailService); // false
console.log(whatsapp instanceof MailService); // true
 
console.log(email instanceof EmailService); // true
console.log(email instanceof WhatsAppService); // false
console.log(email instanceof MailService); // true

// Overriding
// memperbolehkan subclass mendefinisikan implemetnasinya sendiri pada sebuah method yang udah ditetapkan pada superclassnya.

class WhatsAppServiceOR extends MailService {
  constructor(sender, isBusiness){
    super(sender) //artinya manggil constructor dr superclass
  }
   // Overriding method
   sendMessage(message, receiver) {
    // memanggil method sendMessage pada superclass
    super.sendMessage(message, receiver);

    console.log('message sent via WhatsApp');
  }
}

const mailService = new MailService('someSender');
const whatsappService = new WhatsAppService('+6281234567890', true);

mailService.sendMessage('Hai, apa kabar?', 'someReceiver');
whatsappService.sendMessage('Hai, apa kabar?', '+6289876543210');

// object composition
// intinya kan ribet kalo bikin class banyak2 atau harus inherit, makanya pake object composition

class Developer {
  constructor(name){
    this.name = name;
  }

  commitChange(){
    console.log(`${this.name} is committing changes...`)
  }
}

function canBuildUI(developer){
  return {
    buildUI: () => {
      console.log(`${developer.name} is building UI`)
    }
  }
}

function canBuildAPI(developer){
  return {
    buildAPI: () => {
      console.log(`${developer.name} is building API...`)
    }
  }
}

function canDeployApp(developer){
  return {
    deployApp: () => {
      console.log(`${developer.name} is deploying app...`)
    }
  }
}

function createFrontEndDeveloper(name){
  const developer = new Developer(name);
  return Object.assign(developer, canBuildUI(developer))
}

function createBackEndDeveloper(name){
  const developer = new Developer(name);
  return Object.assign(developer, canBuildAPI(developer))
}

function createDevOps(name){
  const developer = new Developer(name);
  return Object.assign(developer, canDeployApp(developer))
}

function createFullStackDeveloper(name){
  const developer = new Developer(name);
  return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer))
}

const feDev = createFrontEndDeveloper('Andrea')
console.log(`is ${feDev.name} developer?`, feDev instanceof Developer)
feDev.buildUI()

// Build in Class
// Date, Object, Array, Math, dan String

const date = new Date()

const timeInJakarta = date.toLocaleDateString('id-ID',{
  timeZone: 'Asia/Jakarta',
})

console.log(timeInJakarta)

class UniqueArray extends Array {
  constructor(...args){
    const uniqueValue = args.filter((item, index) => args.indexOf(item) === index)
// make sure argsnya udah unique baru dipass ke super
    super(...uniqueValue) // ... buat spread
  }

  push(item){
    // make sure only unique item is added
    if (!this.includes(item)){
      super.push(item)
    }
  }
}

const someArray = new UniqueArray('a', 'b', 'c', 'a', 'b', 'c');
console.log(someArray); // ['a', 'b', 'c']
someArray.push('d');
console.log(someArray); // ['a', 'b', 'c', 'd']
someArray.push('a');
console.log(someArray); // ['a', 'b', 'c', 'd']

/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 */
class Animal {
  constructor(name, age, isMammal){
    this.name = name
    this.age = age
    this.isMammal = isMammal
  }
}
/*
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
*/
class Rabbit extends Animal{
  constructor(name, age, isMammal = true){
    super(name, age, isMammal)
  }
  eat(){
    return (`${this.name} sedang makan!`)
  }
}
/*
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 
*/
class Eagle extends Animal{
  constructor(name, age, isMammal = false){
    super(name, age, isMammal)
  }
  fly(){
    return (`${this.name} sedang makan!`)
  }
}
/*
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 
*/
const myRabbit = new Rabbit("Labi", 2)
/*
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */
const myEagle = new Eagle("Elo", 4)
