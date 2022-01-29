// Classes in Typescript
export class Message {
  title: string;
  message: string;
  deliveryDate?: Date;
  private _isSent!: boolean;

  constructor(title: string, message: string) {
    this.title = title;
    this.message = message;
    this.isSent = false;
  }

  previewMessage(): string {
    return this.message.slice(0, 10).concat('....');
  }

  set isSent(value: boolean) {
    if (value === true) {
      this.deliveryDate = new Date();
    }
    this._isSent = value;
  }
  get isSent(): boolean {
    return this._isSent;
  }

  get messageStatus(): string {
    const sentMessage = this.isSent ? 'Has been sent' : 'Has not been sent';

    return `${this.message} | ${sentMessage}`;
  }
}

const message = new Message('Mac Book', 'Hey Boss! Can I get new Mac Book?');

console.log('Message Class: ', message);
console.warn('Our message:', message.previewMessage());
message.isSent = true;
console.log(message.deliveryDate);
console.log(message.messageStatus);

/** Challenge
 * ----------
 * 1. Create a User Class
 * 2. Add a firstName, lastName and an email property
 * 3. Add a get to return a fullName
 * 4. Add a method to check if your email param matches the user's current email
 */

export class User {
  firstName: string;
  lastName: string;
  email: string;
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
  verifyEmail(email: string): string {
    if (email === this.email) {
      return 'Email is verified';
    }
  }
}
