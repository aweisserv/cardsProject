import { Component } from '@angular/core';
import { CARDS } from '../db-data';
import { Card } from './model/card';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  cards = CARDS;

  actualDate = formatDate(new Date(), 'yyyy/MM/dd', 'en');

  onCardSelected(card:Card){
    console.log("App clicked!", card);

  }
//------Test fetch Marvel API------//

}
