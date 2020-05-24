import { Component } from '@angular/core';
import { CARDS } from '../db-data';
import { Card } from './model/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  cards = CARDS;

  onCardSelected(card:Card){
    console.log("App clicked!", card);

  }

}
