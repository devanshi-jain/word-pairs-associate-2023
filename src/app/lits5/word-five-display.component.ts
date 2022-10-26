import { Component, OnInit } from '@angular/core';
import { AddWord } from '../add-word';
import { WordService } from '../word.service';

@Component({
  selector: 'app-word-five-display',
  templateUrl: './word-five-display.component.html',
})
export class WordFiveDisplayComponent implements OnInit {
  wordsFive: AddWord[] = [];
  constructor(private wordService: WordService) { }

  ngOnInit(): void {

    //const numbers = [1, 2, 3, 4, 5];
    
    //for (let i = 0; i < length; i++) {
      //this.wordsFive[i];
      this.wordsFive = this.wordService.getWordsFive();
      const length = this.wordsFive.length;
    //}
    //this.wordsFive = this.wordService.getWordsFive();

    //console.log("test words", this.wordsFive.length);
    //console.log("what is this", this.wordService.getWordsFive());
    
  }

}
