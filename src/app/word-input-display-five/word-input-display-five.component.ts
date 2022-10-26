import { Component, OnInit } from '@angular/core';
import { AddWord } from '../add-word';
import { WordService } from '../word.service';

@Component({
  selector: 'app-word-input-display-five',
  templateUrl: './word-input-display-five.component.html',
})
export class WordInputDisplayFiveComponent implements OnInit {
  wordsInputFive: AddWord[] = [];

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.wordsInputFive = this.wordService.getWordsInputFive();
  }

}
