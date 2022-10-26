import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AddWord } from '../add-word';
import { WordComponent } from '../word.component';
import { WordDirective } from '../word.directive';

@Component({
  selector: 'app-word-associate-input-three',
  template: `
  <div>
    <ng-template wordHost></ng-template>
  </div>
`
})
export class WordAssociateInputThreeComponent implements OnInit, OnDestroy {
  @Input() wordsInputThree: AddWord[] = [];
  @Input() data: any;

  constructor() { }

  currentAdIndex = -1;
  counter = 0;

  @ViewChild(WordDirective, { static: true }) wordHost!: WordDirective;
  interval: number | undefined;


  ngOnInit(): void {
    this.loadComponent();
    this.getWordsThree();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  loadComponent() {
    if (this.counter < this.wordsInputThree.length) {

      this.wordsInputThree.sort(() => Math.random() - Math.random()).slice(0,1);
      
      this.currentAdIndex = Math.floor((this.currentAdIndex + 1) % this.wordsInputThree.length);
      const addWordInput = this.wordsInputThree[this.currentAdIndex];
      
      const viewContainerRef = this.wordHost.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent<WordComponent>(addWordInput.component);
      componentRef.instance.data = addWordInput.data;
      this.counter++;
      
    }
  }

  getWordsThree() {
    this.interval = window.setInterval(() => {
      this.loadComponent();
    }, 6000);
  }

}
