import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  gotoProfile(): void {
    this.navCtrl.push(ProfilePage);
  }

  sendMessage(): void {

  }

}
