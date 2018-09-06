import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './chat.service';
import { MessageComponent } from './message/message.component';
import { InputComponent } from './input/input.component';

const config = {
  apiKey: 'AIzaSyD-0Wb7mODVvVVAP_tlsFQkIELl9nuvHnA',
  authDomain: 'ngc-firebase-workshop.firebaseapp.com',
  databaseURL: 'https://ngc-firebase-workshop.firebaseio.com',
  projectId: 'ngc-firebase-workshop',
  storageBucket: 'ngc-firebase-workshop.appspot.com',
  messagingSenderId: '251258411416',
};

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, ChatComponent, MessageComponent, InputComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [ChatService],
})
export class AppModule {}
