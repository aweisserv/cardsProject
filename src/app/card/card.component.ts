import { Component, Input, OnInit, Output } from '@angular/core';
import { CARDS } from '../../db-data';
import { Card } from '../model/card';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input ()
  card: Card;

  @Output ()
  cardSelected = new EventEmitter<Card>();

  constructor() { }

  ngOnInit(): void {
  }

  onCardViewed() {
    console.log("Card component button clicked");

    this.cardSelected.emit(this.card);
  }

}
