import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AddWordThree } from './add-word-three';
import { WordDirective } from '../word.directive';
import { WordService } from '../word.service';
import { WordComponent } from '../word.component';

@Component({
  selector: 'app-word-associate-three',
  template: `
  <div>
    <ng-template wordHost></ng-template>
    <div class="next_btn_wrap">
      <button class="next_btn" 
      [disabled]="nextClick" 
      [routerLink]="['/task-message-three']" href="">Next</button>
  </div>
  </div>
`
})
export class WordAssociateThreeComponent implements OnInit, OnDestroy {
  @Input() wordsThree: AddWordThree[] = [];

  nextClick = true;

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
    if (this.counter < this.wordsThree.length) {
      
      this.currentAdIndex = (this.currentAdIndex + 1) % this.wordsThree.length;
      const addWordThree = this.wordsThree[this.currentAdIndex];

      const viewContainerRef = this.wordHost.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent<WordComponent>(addWordThree.component);
      componentRef.instance.data = addWordThree.data;
      this.counter++;
      if (this.counter == this.wordsThree.length) {
        this.nextClick = false;
        console.log("button", this.nextClick);
      }
    }
    else {
      return;
    }
  }

  getWordsThree() {
    this.interval = window.setInterval(() => {
      this.loadComponent();
    }, 1000);
  }
}
