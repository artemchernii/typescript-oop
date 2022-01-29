// Inheritance in typescript

// Base / Parent class
export class Animal {
  age: number;
  legs: number;
  name: string;
  lives = 1;

  constructor(age: number, legs: number, name: string) {
    this.age = age;
    this.legs = legs;
    this.name = name;
  }
}

// Derived / Child class
export class Dog extends Animal {
  lives: number = 2;
  constructor(
    data: { age: number; legs: number; name: string },
    status: boolean
  ) {
    super(data.age, data.legs, data.name);
  }
  woof(): string {
    return 'WOOF! WOOF!';
  }
}

export class Cat implements Animal {
  age!: number;
  legs!: number;
  name!: string;
  lives: number = 9;

  meow(): string {
    return 'meow!';
  }
}

const dog = new Dog({ age: 2, legs: 4, name: 'Top' }, true);
const cat = new Cat();

console.log('DOG:', dog);
console.log('CAT:', cat);
console.log('CAT doing:', cat.meow());

// Generics

class User<T> {
  name!: string;
  age!: number;
  email!: string;
  isMale!: boolean;
  public classicUserData!: T;

  public mergeClassicUser(params: T): void {
    const { name, age, email, isMale } = this;

    this.classicUserData = { name, age, email, isMale, ...params };
  }
}

interface ClassicUser {
  name: { first: string; last: string };
}
interface ClassicUser2 {
  name: { first: string; middle: string; last: string };
}

const user1 = new User<ClassicUser>();
user1.mergeClassicUser({ name: { first: 'Artem', last: 'Chernii' } });
user1.age = 25;
user1.isMale = true;
console.log('User 1', user1);

/** Challenge 2: Inheritance
 * ----------
 * 1. Use the User class below
 * 2. Create an Admin class that Extends User
 * 3. Create a Guest class that implements User
 * 4. Have both classes below pass firstName, lastName and email in their constructors
 */

export class UserClass {
  firstName: string;
  lastName: string;
  email!: string;
  set setEmail(email: string) {
    this.email = email;
  }

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName(): string {
    const fullName = `${this.firstName} ${this.lastName}`;

    return fullName;
  }
  verifyEmail(email: string): string | void {
    console.log(email);
    if (email === this.email) {
      return 'Email is verified';
    }
  }
}

class Admin extends UserClass {
  constructor(firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}

class Guest implements UserClass {
  firstName!: string;
  lastName!: string;
  email!: string;
  set setEmail(email: string) {
    this.email = email;
  }
  get fullName(): string {
    const fullName = `${this.firstName} ${this.lastName}`;

    return fullName;
  }
  verifyEmail(email: string): string | void {
    console.log(email);
    if (email === this.email) {
      return 'Email is verified';
    }
  }
}

const admin = new Admin('Artem', 'Chernii');

admin.setEmail = 'artem@mail.com';
admin.verifyEmail('artem@mail.com');
console.log('Admin =>', admin);
