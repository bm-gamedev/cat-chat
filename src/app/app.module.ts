import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ChatPage } from '../pages/chat/chat';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyBPWhfZMD_N37SNycErzEHM8J3DVDSjA0g",
  authDomain: "cat-chat-b6472.firebaseapp.com",
  databaseURL: "https://cat-chat-b6472.firebaseio.com",
  storageBucket: "cat-chat-b6472.appspot.com",
  messagingSenderId: "787141085968"
};

@NgModule({
  declarations: [
    MyApp,
    ChatPage,
    ProfilePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatPage,
    ProfilePage,
    TabsPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
