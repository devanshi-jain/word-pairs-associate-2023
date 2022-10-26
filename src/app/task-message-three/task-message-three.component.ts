import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-message-three',
  templateUrl: './task-message-three.component.html'
})
export class TaskMessageThreeComponent implements OnInit {

  @HostListener('window:keydown.space', ['$event'])
   handleKeyboardEvent(event: KeyboardEvent) {
     window.location.href = '/word-display-input-three';
   
   }
 
   constructor() { }
 
   ngOnInit(): void {
   }
   
 }
 function preventDefault() {
   throw new Error('Function not implemented.');
 }
 
  