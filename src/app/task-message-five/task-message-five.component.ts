import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-message-five',
  templateUrl: './task-message-five.component.html',
})
export class TaskMessageFiveComponent implements OnInit {


  @HostListener('window:keydown.space', ['$event'])
   handleKeyboardEvent(event: KeyboardEvent) {
     window.location.href = '/word-display-input-five';
   
   }
  constructor() { }

  ngOnInit(): void {
  }

}
