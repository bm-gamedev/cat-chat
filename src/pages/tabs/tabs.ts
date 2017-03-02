import { Component } from '@angular/core';

import { ChatPage } from '../chat/chat';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ChatPage;
  tab2Root: any = ProfilePage;

  constructor() {

  }
}
