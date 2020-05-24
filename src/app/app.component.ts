import { Component } from '@angular/core';
import { CARDS } from '../db-data';
import { Card } from './model/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  card1 = CARDS[0];
  card2 = CARDS[1];

  onCardSelected(card:Card){
    console.log("App clicked!", card);

  }

}
