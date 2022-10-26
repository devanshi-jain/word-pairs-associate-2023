import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AddWordFive } from './add-word-five';
import { WordDirective } from '../word.directive';
import { WordComponent } from '../word.component';

@Component({
  selector: 'app-word-associate-five',
  template: `
    <div>
      <ng-template wordHost></ng-template>
      <div class="next_btn_wrap">
        <button class="next_btn" 
        [disabled]="nextClick" 
        [routerLink]="['/task-message-five']" href="">Next</button>
    </div>
    </div>
  `
})
export class WordAssociateFiveComponent implements OnInit, OnDestroy {
  @Input() wordsFive: AddWordFive[] = [];

  nextClick = true;

  constructor() { }

  currentAdIndex = -1;
  counter = 0;

  @ViewChild(WordDirective, { static: true }) wordHost!: WordDirective;
  interval: number | undefined;


  ngOnInit(): void {
    this.loadComponent();
    this.getWordsFive();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  loadComponent() {

    if (this.counter < this.wordsFive.length) {

      this.currentAdIndex = (this.currentAdIndex + 1) % this.wordsFive.length;
      const addWordFive = this.wordsFive[this.currentAdIndex];


      const viewContainerRef = this.wordHost.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent<WordComponent>(addWordFive.component);
      componentRef.instance.data = addWordFive.data;
      
      this.counter++;

      if (this.counter == this.wordsFive.length) {
        this.nextClick = false;
        console.log("button", this.nextClick);
      }
    }
    else {
      return;
    }
    console.log("how you do this?", this.counter);
  }

  getWordsFive() {
    this.interval = window.setInterval(() => {
      this.loadComponent();
    }, 1000);
  }
}
