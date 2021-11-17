import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string){ //Add message to the cache
    this.messages.push(message);
  }

  clear(){ //Clear cache
    this.messages = [];
  }

  constructor() { }
}
