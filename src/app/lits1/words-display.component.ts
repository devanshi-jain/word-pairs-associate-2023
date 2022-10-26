import { Component, OnInit } from '@angular/core';
import { WordService } from '../word.service'; 
import { AddWord } from '../add-word';

@Component({
  selector: 'words-display',
  templateUrl: './words-display.component.html',

})
export class WordsDisplayComponent implements OnInit {
words: AddWord[] = [];

  constructor(private wordService: WordService) { }

  ngOnInit() {
    this.words = this.wordService.getWordsOne();
    //console.log("Testing", this.words);
  }

}
