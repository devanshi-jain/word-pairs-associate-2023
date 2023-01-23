import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
//import { InputTaskComponent } from '../input-task/input-task.component';

@Component({
  selector: 'task-message',
  templateUrl: './task-message.component.html',
})
export class TaskMessageComponent implements OnInit {

 /*@HostListener('window:keydown.space', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    window.location.href="/word-pairs-associate/input-one", true;
    
  }*/ //This is not working properly for space bar 

  constructor() { }

  ngOnInit(): void {
  }
  
}
function preventDefault() {
  throw new Error('Function not implemented.');
}

