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
  globalCounter = 0;

  @ViewChild(WordDirective, { static: true }) wordHost!: WordDirective;
  interval: number | any;


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
    if (this.globalCounter < this.wordsInputThree.length) {
      this.currentAdIndex = (this.currentAdIndex + 1) % this.wordsInputThree.length;
      const addWordInput = this.wordsInputThree[this.currentAdIndex];

      const viewContainerRef = this.wordHost.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent<WordComponent>(addWordInput.component);
      componentRef.instance.data = addWordInput.data;
      //console.log("Testing: ", componentRef.instance.data);
      this.globalCounter++;
      //console.log("Counter in alert: ", this.globalCounter);
    }
  }

  getWordsThree() {
    this.interval = window.setInterval(() => {
      this.loadComponent();
    }, 11000);//User has 11 seconds to fill in the blank(11000)
  }

}
