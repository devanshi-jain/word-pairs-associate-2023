import { Component, OnInit } from '@angular/core';
import { AddWord } from '../add-word';
import { WordService } from '../word.service';

@Component({
  selector: 'app-word-input-display-three',
  templateUrl: './word-input-display-three.component.html',
})
export class WordInputDisplayThreeComponent implements OnInit {
  wordsInputThree: AddWord[] = [];

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.wordsInputThree = this.wordService.getWordsInputThree();
  }

}
