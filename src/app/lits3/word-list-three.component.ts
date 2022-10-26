import { Component, Input, OnInit } from '@angular/core';
import { WordComponent } from '../word.component';

@Component({
  selector: 'app-word-list-three',
  template: `
    <div class="list-display">
      <p>{{data.listhree}} - {{data.listhreesec}}</p> 
    </div>
  `
})
export class WordListThreeComponent implements WordComponent {
  @Input() data: any;

  ngOnInit(): void {
  }

}
