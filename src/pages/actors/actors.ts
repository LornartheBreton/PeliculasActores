import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ActorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actors',
  templateUrl: 'actors.html',
})
export class ActorsPage {
  imagen;
  actor;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.imagen=this.navParams.get('imagenA');
    this.actor=this.navParams.get('actor');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActorsPage');
  }

}
