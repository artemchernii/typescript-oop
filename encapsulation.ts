// Encapsulation

export class Animal {
  protected age: number;
  public legs: number;
  readonly name: string;

  constructor(age: number, legs: number, name: string) {
    this.age = age;
    this.legs = legs;
    this.name = name;
  }
}

export class Dog extends Animal {
  private status: boolean;
  constructor(
    data: { age: number; legs: number; name: string },
    status: boolean
  ) {
    super(data.age, data.legs, data.name);
    this.status = status;
  }
  woof(): string {
    return 'WOOF! WOOF!';
  }
}
const dog = new Dog({ age: 2, legs: 4, name: 'Top' }, true);

/** Challenge 3: Encapsulation
 * ----------
 * 1. Use the User class below
 * 2. Add an appropriate readonly property to the User class
 * 3. Be explicit with your public properties our User class
 * 4. Add an appropriate protected property in User class and access it with private method in Admin
 */

export class UserClass {
  readonly firstName: string;
  protected lastName: string;
  public email!: string;
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
  private get showLastName(): string {
    return this.lastName;
  }
}

const admin = new Admin('Art', 'Chernii');
