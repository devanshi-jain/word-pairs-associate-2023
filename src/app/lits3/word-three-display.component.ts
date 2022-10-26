import { Component, OnInit } from '@angular/core';
import { AddWord } from '../add-word'; 
import { WordService } from '../word.service'; 

@Component({
  selector: 'app-word-three-display',
  templateUrl: './word-three-display.component.html',
})
export class WordThreeDisplayComponent implements OnInit {
  wordsThree: AddWord[] = [];
  
  constructor(private wordService: WordService) { }

  ngOnInit() {
    this.wordsThree = this.wordService.getWordsThree();
  }

}
