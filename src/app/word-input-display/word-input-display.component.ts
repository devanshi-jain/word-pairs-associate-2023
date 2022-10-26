import { Component, OnInit } from '@angular/core';
import { AddWord } from '../add-word';
import { WordService } from '../word.service';

@Component({
  selector: 'app-word-input-display',
  templateUrl: './word-input-display.component.html',
})
export class WordInputDisplayComponent implements OnInit {
  wordsInput: AddWord[] = [];

  constructor(private wordService: WordService) { }

  ngOnInit(){
    //this.wordsInput = this.wordService.getWordsInputOne();
    this.wordsInput = this.wordService.getWordsInputOne();

  }

}
