import { Component, Input, OnInit } from '@angular/core';
import { WordComponent } from '../word.component';

@Component({
  selector: 'app-word-list-five',
  template: `
    <div class="list-display">
      <p>{{data.prompt}} - {{data.answer}}</p> 
    </div>
  `
})
export class WordListFiveComponent implements WordComponent {
  @Input() data: any;

  ngOnInit(): void {
  }

}
