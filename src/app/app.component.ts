import { Component } from '@angular/core';
import { CARDS } from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  card1 = CARDS[0];
  card2 = CARDS[1];

}
