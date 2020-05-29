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

  @Input ()
  cardIndex: number;

  @Output ()
  cardSelected = new EventEmitter<Card>();

  constructor() { }

  ngOnInit(): void {
  }

  isImgVisible() {
    return this.card && this.card.iconUrl;
  }
  isDificulyAvailable() {
    return this.card && this.card.category;
  }

  onCardViewed() {
    console.log("Card component button clicked");

    this.cardSelected.emit(this.card);
  }

  cardClasses() {
    return {
    'advanced':this.card.category == 'ADVANCED', 
    'intermediate':this.card.category == 'INTERMEDIATE',
    'beginner':this.card.category == 'BEGINNER'}
  };


  cardStyles() {
    return {'text-decoration': 'underline'};
  } 

}