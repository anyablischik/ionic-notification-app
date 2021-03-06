import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NotificationsPage} from "../notifications/notifications";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  protected settings = [
      {
          'title': 'Common',
          'icon': 'cog',
          'description': 'Common settings',
          'page': ''
      },
      {
          'title': 'Date and Time',
          'icon': 'clock',
          'description': 'Setting for date and time',
          'page': ''
      },
      {
          'title': 'Touch and PIN',
          'icon': 'finger-print',
          'description': 'Setting for touch and PIN',
          'page': ''
      },
      {
          'title': 'Sound',
          'icon': 'megaphone',
          'description': 'Setting for sounds',
          'page': ''
      },
      {
          'title': 'Microphone',
          'icon': 'microphone',
          'description': 'Setting for microphone',
          'page': ''
      },
      {
          'title': 'Notifications',
          'icon': 'notifications',
          'description': 'Setting for notifications',
          'page': NotificationsPage
      }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openSettingsPage(item) {
      this.navCtrl.push(item.page);
  }

}
