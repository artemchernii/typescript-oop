// Classes in Typescript
export class Message {
  title: string;
  message: string;
  isSent: boolean;

  constructor(title: string, message: string) {
    this.title = title;
    this.message = message;
    this.isSent = false;
  }
}

const message = new Message('Mac Book', 'Hey Boss! Can I get new Mac Book?');

console.log('Message: ', message);
