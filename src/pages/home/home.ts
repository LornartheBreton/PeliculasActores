import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActorsPage } from '../actors/actors';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pelicula=0;
  char=0;
  actor=ActorsPage;
  peliculas=[
    {
      Title: "2001: A Space Odyssey",
      id: 0,
      personajes: [
        {
          nombre: "David Bowman",
          imagen: "../assets/imgs/Dave_bowman.jpg",
          actor: "Keir Dullea",
          imagenA: "../assets/imgs/dullea.jpg",
          id:0
        },
        {
          nombre: "Frank Poole",
          imagen: "../assets/imgs/fP.jpg",
          actor: "Gary Lockwood",
          imagenA: "../assets/imgs/gL.jpg",
          id:1         
        }
      ]
    },
    {
      Title: "The Thing",
      id: 1,
      personajes: [
        {
          nombre: "David Bowman",
          imagen: "../assets/imgs/Dave_bowman.jpg",
          actor: "",
          imagenA: "",
          id:0
        }
      ]
    },
    {
      Title: "Empire Strikes Back",
      id: 2,
      personajes: [
        {
          nombre: "David Bowman",
          imagen: "../assets/imgs/Dave_bowman.jpg",
          actor: "",
          imagenA: "",
          id:0
        }
      ]
    }
  ];
  constructor(public navCtrl: NavController) {

  }
  sendActor(id1: number,id2: number){
    this.navCtrl.push(this.actor,this.peliculas[id1].personajes[id2])
  }

}
