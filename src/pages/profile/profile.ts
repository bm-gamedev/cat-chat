import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import md5 from 'crypto-md5';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  email: any;
  password: any;
  profilePicture: any = "https://www.gravatar.com/avatar/"

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

    emailChanged(){
        this.profilePicture = "https://www.gravatar.com/avatar/" + md5(this.email.toLowerCase(), 'hex');
    }

}
