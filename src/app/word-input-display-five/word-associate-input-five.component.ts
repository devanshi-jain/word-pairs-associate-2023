import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AddWord } from '../add-word';
import { WordComponent } from '../word.component';
import { WordDirective } from '../word.directive';

@Component({
  selector: 'app-word-associate-input-five',
  template: `
  <div>
    <ng-template wordHost>
    </ng-template>
  </div>
`
})
export class WordAssociateInputFiveComponent implements OnInit, OnDestroy {
  @Input() wordsInputFive: AddWord[] = [];
  @Input() data: any;

  constructor() { }

  currentAdIndex = -1;
  counter = 0;

  @ViewChild(WordDirective, { static: true }) wordHost!: WordDirective;
  interval: number | undefined;


  ngOnInit(): void {
    this.loadComponent();
    this.getWordsInputFive();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  loadComponent() {
    if (this.counter < this.wordsInputFive.length) {
      //Show random words
      this.wordsInputFive.sort(() => Math.random() - Math.random()).slice(0,1);
      
      this.currentAdIndex = Math.floor((this.currentAdIndex + 1) % this.wordsInputFive.length);
      const addWordInput = this.wordsInputFive[this.currentAdIndex];
      
      const viewContainerRef = this.wordHost.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent<WordComponent>(addWordInput.component);
      componentRef.instance.data = addWordInput.data;
      this.counter++;
      
      
    }
  }

  getWordsInputFive() {
    this.interval = window.setInterval(() => {
      this.loadComponent();
    }, 6000);
  }
}
