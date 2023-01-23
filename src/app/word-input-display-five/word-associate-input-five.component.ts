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
  interval: number | any;


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
      this.currentAdIndex = (this.currentAdIndex + 1) % this.wordsInputFive.length;
      const addWordInput = this.wordsInputFive[this.currentAdIndex];

      const viewContainerRef = this.wordHost.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent<WordComponent>(addWordInput.component);
      componentRef.instance.data = addWordInput.data;
      //console.log("Testing: ", componentRef.instance.data );
      this.counter++;
      //console.log("Counter in alert: ", this.counter);


    }
  }

  getWordsInputFive() {
    this.interval = window.setInterval(() => {
      this.loadComponent();
    }, 11000);//User has 11 seconds to fill in the blank (11000)
  }
}
