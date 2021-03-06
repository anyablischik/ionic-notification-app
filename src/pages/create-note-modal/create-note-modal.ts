import { Component } from '@angular/core';
import {DateTime, NavController, NavParams, ViewController} from 'ionic-angular';
import {Note} from "../../models/Note";

@Component({
  selector: 'page-create-note-modal',
  templateUrl: 'create-note-modal.html',
})
export class CreateNoteModalPage {
  protected note: Note = new Note();
  protected date: DateTime;
  protected time: DateTime;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.note = navParams.get('note') || new Note();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateNoticeModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  save() {
    this.viewCtrl.dismiss(this.note);
  }
}
