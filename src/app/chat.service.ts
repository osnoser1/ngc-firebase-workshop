import { Injectable } from '@angular/core';

import {
  AngularFirestoreCollection,
  AngularFirestore,
} from 'angularfire2/firestore';

import { Message } from './message.model';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  messages: AngularFirestoreCollection<Message>;

  constructor(private db: AngularFirestore) {
    this.messages = db.collection<Message>('messages');
  }

  addMsg(msg: any) {
    this.messages.add(msg);
  }
}
